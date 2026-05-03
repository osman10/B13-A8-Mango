
import { getData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";




const Hero = async () => {
    const books = await getData();


    return (
        <div className="bg-base-200">
            <div className="container mx-auto">
                <div className="hero min-h-80vh">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <Image src="/images/book.webp" alt="Book Image" className=" rounded-lg shadow-2xl" width={600} height={600} />
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">Best place to find your favorite books.<span className="bg-gradient-to-r from-red-600 to-pink-400 bg-clip-text"> Find Your Next Read</span></h1>
                            <p className="py-6">
                                A book library is a place where knowledge, imagination, and culture come together. It offers a wide collection of books across various subjects, allowing readers to explore, learn, and grow. Libraries provide a quiet environment for study and reflection, making them essential spaces for education, research, and lifelong learning.
                            </p>
                            <Link href="/books" className="btn bg-gradient text-white">Browse Now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;