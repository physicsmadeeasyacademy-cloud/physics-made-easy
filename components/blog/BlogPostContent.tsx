"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content) return null;

  // Detect pure HTML (e.g. from rich-text editor or custom HTML string starting with an HTML block)
  const trimmed = content.trim();
  const startsWithTag = trimmed.startsWith("<");
  const hasMarkdownMarkers = /^(#{1,6}\s|---|\*\*|\$\$)/m.test(trimmed);

  // If it's explicitly structured HTML and doesn't contain raw markdown headers/dividers
  const isPureHtml = startsWithTag && !hasMarkdownMarkers;

  if (isPureHtml) {
    const processedHtml = content.replace(
      /(<table[\s\S]*?<\/table>)/gi,
      '<div class="table-wrapper">$1</div>'
    );

    return (
      <div 
        className="blog-content leading-relaxed"
        dangerouslySetInnerHTML={{ __html: processedHtml }} 
      />
    );
  }

  // Render HTML directly for rich formatted blog posts
  return (
    <div 
      className="blog-content leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}
