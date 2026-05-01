
import { getData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";




const Hero = async () => {
     const books = await getData();
    console.log(books);

    return (
<div className="bg-base-200">
            <div className="container mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <Image src="/images/book.webp" alt="Book Image" className=" rounded-lg shadow-2xl" width={600} height={600} />
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">Best place to find your favorite books.</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link href="/books" className="btn bg-gradient">Read Book</Link>
                    </div>
                </div>
            </div>

        </div>
</div>
    );
};

export default Hero;