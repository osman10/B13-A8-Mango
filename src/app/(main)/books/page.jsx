import BooksPage from "@/components/BooksPage";
import { getData } from "@/lib/data";

const page = async () => {
  
  const books = await getData();

  return <BooksPage books={books} />;
};

export default page;