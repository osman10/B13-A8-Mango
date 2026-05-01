import BookDetails from "@/components/BookDetails";
import { getData } from "@/lib/data";

const Page = async () => {
  const books = await getData();

  return (
    <div className="container mx-auto p-4">
        <BookDetails books={books} />
    </div>
  );
};

export default Page;