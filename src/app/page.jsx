// app/page.jsx (or any server component)

import Card from "@/components/Card";
import { getData } from "@/lib/data";


export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}