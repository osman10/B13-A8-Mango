
import Image from "next/image";
import Link from "next/link";


// components/Card.jsx
const Card = ({ item }) => {
  const { id, title, description, category, image_url } = item;


  return (
    <div className="card bg-base-100 w-75 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <figure>
        <Image
          src={image_url}
          alt={title}
          width={300}
          height={200}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/books/${id}`} className="btn bg-gradient text-white" >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;