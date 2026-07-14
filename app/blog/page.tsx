import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";
import BlogCard from "@/components/molecules/blogCard/page";
import { BLOG_POSTS } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog | BertAndre Group",
  description:
    "Insights on operational systems, sustainable growth, and building resilient businesses from BertAndre Group.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 md:px-8 xl:px-0 pt-20">
          <div className="mx-auto flex flex-col items-start">
            <Pill className="mb-8 sm:mb-10" active>
              Blog
            </Pill>
            <p className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed mb-10 md:mb-14 max-w-3xl">
              Practical insights on building stronger operations, scaling with
              confidence, and creating sustainable growth.
            </p>
            <div className="w-full space-y-10 md:space-y-14">
              {BLOG_POSTS.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                />
              ))}
            </div>
          </div>
        </section>
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
