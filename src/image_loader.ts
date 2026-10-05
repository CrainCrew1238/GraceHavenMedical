import { StaticImageData } from "next/image";

export default function myImageLoader(source: { src: string }) {
  if (source.src.startsWith('/')) {
    return source.src;
  }

  return `https://res.cloudinary.com/${source.src}`;
}
