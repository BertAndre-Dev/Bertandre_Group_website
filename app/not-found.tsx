import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-xl mx-auto text-center">
        <h1 className="text-[#1560BD] font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6">
          404
        </h1>
        <p className="text-[#4C4C4C] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
          Sorry, the content you&apos;re looking for doesn&apos;t exist. Either
          it was removed, or you mistyped the link.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1560BD] hover:bg-[#124ea0] text-white font-medium rounded-full px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base transition-colors"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
