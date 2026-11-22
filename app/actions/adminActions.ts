'use server'

import { prisma } from '@/lib/data'
import { revalidatePath } from 'next/cache'
import { STATIC_BLOG_POSTS } from '@/data/static-blogs'

/* ==========================================================================
   COURSES
   ========================================================================== */

export async function triggerSitemapRevalidation() {
  try {
    revalidatePath('/sitemap.xml')
  } catch (err) {
    console.error("Revalidation error:", err)
  }
}

export async function addCourse(formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const level = formData.get('level') as string
  const price = formData.get('price') as string
  const image = formData.get('image') as string 
  const description = formData.get('description') as string
  const features = (formData.get('features') as string).split(',').map(f => f.trim())
  const slug = title.toLowerCase().replace(/ /g, '-')

  await prisma.course.create({
    data: { title, category, level, price, image, description, features, slug }
  })
  
  revalidatePath('/courses')
  triggerSitemapRevalidation()
}

// ✅ NEW: Edit Course Function
export async function editCourse(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const level = formData.get('level') as string
  const price = formData.get('price') as string
  const description = formData.get('description') as string
  const features = (formData.get('features') as string).split(',').map(f => f.trim())
  
  // Only update image if a new one is provided
  const image = formData.get('image') as string
  const dataToUpdate: any = { title, category, level, price, description, features }
  if (image) dataToUpdate.image = image

  await prisma.course.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/courses')
  triggerSitemapRevalidation()
}

export async function getCourses() {
  return await prisma.course.findMany({ orderBy: { id: 'desc' } })
}

export async function deleteCourse(id: number) {
  await prisma.course.delete({ where: { id } })
  revalidatePath('/courses')
  triggerSitemapRevalidation()
}

/* ==========================================================================
   GALLERY
   ========================================================================== */

export async function addGalleryImage(formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const src = formData.get('src') as string
  const description = formData.get('description') as string

  await prisma.galleryImage.create({
    data: { title, category, src, description }
  })

  revalidatePath('/gallery')
}

// ✅ NEW: Edit Gallery Function
export async function editGalleryImage(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  
  const src = formData.get('src') as string
  const dataToUpdate: any = { title, category, description }
  if (src) dataToUpdate.src = src

  await prisma.galleryImage.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/gallery')
}

export async function getGalleryImages() {
  return await prisma.galleryImage.findMany({ orderBy: { id: 'desc' } })
}

export async function deleteGalleryImage(id: number) {
  await prisma.galleryImage.delete({ where: { id } })
  revalidatePath('/gallery')
}

/* ==========================================================================
   BLOGS
   ========================================================================== */

function slugify(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function addBlogPost(formData: FormData) {
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const image = formData.get('image') as string
  const category = formData.get('category') as string
  const readTime = formData.get('readTime') as string
  const content = formData.get('content') as string
  const slug = slugify(title) || title.toLowerCase().replace(/ /g, '-')

  await prisma.blogPost.create({
    data: { title, excerpt, content, category, readTime, image, slug }
  })
  
  revalidatePath('/blog')
  revalidatePath(`/blog/${slug}`)
  triggerSitemapRevalidation()
}

// ✅ NEW: Edit Blog Function
export async function editBlogPost(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const category = formData.get('category') as string
  const readTime = formData.get('readTime') as string
  const content = formData.get('content') as string
  
  const image = formData.get('image') as string
  const dataToUpdate: any = { title, excerpt, category, readTime, content }
  if (image) dataToUpdate.image = image
  if (title) dataToUpdate.slug = slugify(title)

  const updated = await prisma.blogPost.update({
    where: { id },
    data: dataToUpdate
  })

  revalidatePath('/blog')
  revalidatePath(`/blog/${updated.slug}`)
  triggerSitemapRevalidation()
}

export async function getBlogPosts() {
  try {
    const dbPosts = await prisma.blogPost.findMany({ orderBy: { date: 'desc' } })
    const staticSlugs = new Set(dbPosts.map(p => p.slug));
    const merged = [...dbPosts];
    for (const sp of STATIC_BLOG_POSTS) {
      if (!staticSlugs.has(sp.slug)) {
        merged.push({
          id: sp.id,
          title: sp.title,
          excerpt: sp.excerpt,
          content: sp.content,
          category: sp.category,
          readTime: sp.readTime,
          image: sp.image,
          slug: sp.slug,
          featured: sp.featured,
          date: new Date(sp.date)
        });
      }
    }
    return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error("DB error in getBlogPosts, falling back to static posts:", err);
    return STATIC_BLOG_POSTS.map(sp => ({
      ...sp,
      date: new Date(sp.date)
    }));
  }
}

export async function getBlogPostSummaries() {
  try {
    const dbPosts = await prisma.blogPost.findMany({
      orderBy: { date: 'desc' },
      select: {
        id: true,
        title: true,
        excerpt: true,
        category: true,
        readTime: true,
        image: true,
        slug: true,
        featured: true,
        date: true,
      }
    })
    const existingSlugs = new Set(dbPosts.map(p => p.slug));
    const merged = [...dbPosts];
    for (const sp of STATIC_BLOG_POSTS) {
      if (!existingSlugs.has(sp.slug)) {
        merged.push({
          id: sp.id,
          title: sp.title,
          excerpt: sp.excerpt,
          category: sp.category,
          readTime: sp.readTime,
          image: sp.image,
          slug: sp.slug,
          featured: sp.featured,
          date: new Date(sp.date),
        });
      }
    }
    return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error("DB error in getBlogPostSummaries, falling back to static posts:", err);
    return STATIC_BLOG_POSTS.map(sp => ({
      id: sp.id,
      title: sp.title,
      excerpt: sp.excerpt,
      category: sp.category,
      readTime: sp.readTime,
      image: sp.image,
      slug: sp.slug,
      featured: sp.featured,
      date: new Date(sp.date),
    }));
  }
}

export async function getBlogPostBySlug(rawSlug: string) {
  if (!rawSlug) return null;
  const decodedSlug = decodeURIComponent(rawSlug);
  const normalizedTarget = slugify(decodedSlug);

  // First check static blog posts for instant reliability
  const staticMatch = STATIC_BLOG_POSTS.find(p =>
    p.slug === rawSlug ||
    p.slug === decodedSlug ||
    slugify(p.slug) === normalizedTarget ||
    slugify(p.title) === normalizedTarget
  );
  if (staticMatch) {
    return {
      ...staticMatch,
      date: new Date(staticMatch.date)
    };
  }

  try {
    // 1. Exact match with raw slug parameter
    let post = await prisma.blogPost.findUnique({
      where: { slug: rawSlug }
    });
    if (post) return post;

    // 2. Exact match with decoded slug
    if (rawSlug !== decodedSlug) {
      post = await prisma.blogPost.findUnique({
        where: { slug: decodedSlug }
      });
      if (post) return post;
    }

    // 3. Fallback match by normalized slug or title match across database
    const posts = await prisma.blogPost.findMany({
      select: { id: true, slug: true, title: true }
    });

    const matched = posts.find(p => 
      p.slug === rawSlug || 
      p.slug === decodedSlug || 
      slugify(p.slug) === normalizedTarget ||
      slugify(p.title) === normalizedTarget
    );

    if (matched) {
      return await prisma.blogPost.findUnique({ where: { id: matched.id } });
    }
  } catch (err) {
    console.error("DB error in getBlogPostBySlug:", err);
  }

  return null;
}

export async function getRelatedBlogPostSummaries(currentSlug: string, category?: string) {
  try {
    const dbPosts = await prisma.blogPost.findMany({
      where: {
        slug: { not: currentSlug },
        ...(category ? { category } : {})
      },
      take: 2,
      orderBy: { date: 'desc' },
      select: {
        id: true,
        title: true,
        excerpt: true,
        category: true,
        readTime: true,
        image: true,
        slug: true,
        date: true,
      }
    });

    if (dbPosts.length >= 2) return dbPosts;

    const existingSlugs = new Set([currentSlug, ...dbPosts.map(p => p.slug)]);
    const fallbackStatic = STATIC_BLOG_POSTS
      .filter(sp => !existingSlugs.has(sp.slug) && (!category || sp.category === category || true))
      .map(sp => ({
        id: sp.id,
        title: sp.title,
        excerpt: sp.excerpt,
        category: sp.category,
        readTime: sp.readTime,
        image: sp.image,
        slug: sp.slug,
        date: new Date(sp.date),
      }));

    return [...dbPosts, ...fallbackStatic].slice(0, 2);
  } catch (err) {
    console.error("DB error in getRelatedBlogPostSummaries, using static:", err);
    return STATIC_BLOG_POSTS
      .filter(sp => sp.slug !== currentSlug)
      .map(sp => ({
        id: sp.id,
        title: sp.title,
        excerpt: sp.excerpt,
        category: sp.category,
        readTime: sp.readTime,
        image: sp.image,
        slug: sp.slug,
        date: new Date(sp.date),
      }))
      .slice(0, 2);
  }
}

export async function deleteBlogPost(id: number) {
  await prisma.blogPost.delete({ where: { id } })
  revalidatePath('/blog')
  triggerSitemapRevalidation()
}

// ... existing imports
// Add 'revalidatePath' if not already imported

// --- ENQUIRIES ---

// 1. Submit Enquiry (Public Action)
export async function submitEnquiry(formData: FormData) {
  const parentName = formData.get('parentName') as string;
  const studentName = formData.get('studentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  await prisma.enquiry.create({
    data: {
      parentName,
      studentName,
      email,
      phone,
      subject,
      message,
      status: "New"
    }
  });

  // Revalidate admin page so the new query shows up immediately
  revalidatePath('/admin/enquiries');
}

// 2. Get Enquiries (Admin)
export async function getEnquiries() {
  return await prisma.enquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

// 3. Update Status/Notes (Admin)
export async function updateEnquiry(id: number, formData: FormData) {
  const status = formData.get('status') as string;
  const notes = formData.get('notes') as string;

  await prisma.enquiry.update({
    where: { id },
    data: { status, notes }
  });

  revalidatePath('/admin/enquiries');
}

// 4. Delete Enquiry (Admin)
export async function deleteEnquiry(id: number) {
  await prisma.enquiry.delete({ where: { id } });
  revalidatePath('/admin/enquiries');
}


// --- STUDY MATERIALS ---

export async function addStudyMaterial(formData: FormData) {
  const title = formData.get('title') as string;
  const type = formData.get('type') as string;
  const category = formData.get('category') as string;
  const link = formData.get('link') as string;

  await prisma.studyMaterial.create({
    data: { title, type, category, link }
  });
  
  revalidatePath('/study-materials');
  revalidatePath('/admin/materials');
}

export async function getStudyMaterials() {
  return await prisma.studyMaterial.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function deleteStudyMaterial(id: number) {
  await prisma.studyMaterial.delete({ where: { id } });
  revalidatePath('/study-materials');
  revalidatePath('/admin/materials');
}