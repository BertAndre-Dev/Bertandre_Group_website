import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";
import {
  BLOG_POSTS,
  formatPostDate,
  getPostBySlug,
  type BlogBlock,
} from "@/lib/blog/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | BertAndre Group" };
  }

  return {
    title: `${post.title} | BertAndre Group`,
    description: post.excerpt,
  };
}

function BlogContent({ content }: { readonly content: BlogBlock[] }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <div key={`${block.type}-${index}`} className="pt-4 md:pt-6">
              {index > 0 && (
                <hr className="border-t border-[#FA8128]/40 mb-6 md:mb-8" />
              )}
              <h2 className="text-[#FA8128] text-base md:text-[20px] font-medium">
                {block.text}
              </h2>
            </div>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.type}-${index}`}
              className="w-full space-y-3 sm:space-y-4 list-none pl-1"
            >
              {block.items.map((item) => (
                <li key={item} className="flex gap-2 sm:gap-3">
                  <span
                    className="text-[#4C4C4C] shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-[#FA8128]"
                    aria-hidden
                  />
                  <span className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={`${block.type}-${index}`}
            className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 md:px-8 xl:px-0 pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-[#FA8128] font-medium text-[14px] md:text-[16px] hover:underline mb-6"
          >
            <span aria-hidden="true">← </span>
            Back to Blog
          </Link>

          <div className="border border-[#FEE6D4] rounded-3xl mx-auto">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] min-h-[200px] md:min-h-[320px]">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1320px"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 md:px-8 xl:px-0">
          <div className="mx-auto max-w-3xl">
            <Pill className="px-8 mb-4 sm:mb-6 mt-10 md:mt-12" active>
              {post.category}
            </Pill>
            <h1 className="text-[#171717] text-[24px] md:text-[36px] lg:text-[40px] font-medium leading-tight mb-4">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="block text-[#4C4C4C] text-[14px] md:text-base mb-8 md:mb-10"
            >
              {formatPostDate(post.date)}
            </time>

            <BlogContent content={post.content} />

            <hr className="border-t border-[#FA8128]/60 mt-12 sm:mt-14" />
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
