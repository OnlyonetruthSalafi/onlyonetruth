"use client";

export default function ArticleImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/manuscripts/quran/placeholder.jpg";
        e.target.className = "w-full h-full object-contain p-8 opacity-20";
      }}
    />
  );
}
