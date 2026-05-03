"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center bg-white">
      
      {/* Image */}
      <div className="max-w-md w-full">
        <Image
          src="/images/not-found.jpg" // 👉 put your custom image in public/images
          alt="Page Not Found"
          width={500}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Text */}
      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        404 - Page Not Found
      </h1>

      <p className="mt-3 text-gray-500 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-focus transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}