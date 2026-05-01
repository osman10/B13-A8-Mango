import Card from './Card';
import { getData } from "@/lib/data";

const Books = async () => {
    const data = await getData();
    return (
        <div>
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Books;