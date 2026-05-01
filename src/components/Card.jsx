
import Image from "next/image";


// components/Card.jsx
const Card = ({ item }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>
      <span className="text-sm text-blue-500">{item.category}</span>
      <Image src={item.image_url} alt={item.title} width={300} height={400} className="w-full h-48 object-cover mt-4 rounded" />
    </div>
  );
};

export default Card;