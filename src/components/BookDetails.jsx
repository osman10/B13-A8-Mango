"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const BookDetails = ({ books }) => {
    const params = useParams();
    const id = Number(params.id); // ✅ convert to number

    const book = books.find((book) => book.id === id);


    if (!book) {
        return <div>Book not found</div>;
    }



    const { title, author, description, category, image_url } = book;

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={image_url}
                        className="max-w-sm rounded-lg shadow-2xl"
                        width={400}
                        height={400}
                    />
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">{title}</h1>
                        <p className="py-6  text-sky-700 text-2xl"><span className="font-bold">Author:</span> {author}</p>
                        <p className="py-6 text-green-700 text-2xl"><span className="font-bold">Category:</span> {category}</p>
                        <p className="py-6 text-xl">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;