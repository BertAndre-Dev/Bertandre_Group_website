import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/lib/blog/posts";

export interface BlogCardProps {
  readonly slug: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
}

export default function BlogCard({
  slug,
  imageSrc,
  imageAlt,
  category,
  title,
  excerpt,
  date,
}: BlogCardProps) {
  return (
    <article className="w-full mx-auto border border-[#FEE6D4] md:border-none rounded-2xl md:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      <Link href={`/blog/${slug}`} className="block group">
        <div className="rounded-3xl sm:border sm:border-[#FEE6D4] mx-auto">
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] min-h-[180px] md:min-h-[220px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1320px"
            />
          </div>
        </div>
        <div className="p-6 md:p-0 md:py-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <p className="text-[#FA8128] text-[16px] md:text-[20px] font-semibold uppercase tracking-wide">
              {category}
            </p>
            <span className="hidden sm:inline text-[#4C4C4C]/40" aria-hidden>
              ·
            </span>
            <time
              dateTime={date}
              className="text-[#4C4C4C] text-[13px] md:text-[15px] font-normal"
            >
              {formatPostDate(date)}
            </time>
          </div>
          <h2 className="text-[#4C4C4C] text-[14px] md:text-2xl font-semibold md:font-bold mb-4 group-hover:text-[#FA8128] transition-colors">
            {title}
          </h2>
          <p className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed mb-4">
            {excerpt}
          </p>
          <span className="inline-flex items-center gap-1 text-[#FA8128] font-medium text-[14px] md:text-[16px] group-hover:underline">
            Read more
            <span aria-hidden="true"> →</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
