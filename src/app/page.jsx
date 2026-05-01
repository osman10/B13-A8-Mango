// app/page.jsx (or any server component)
import Hero from "@/components/Hero";
import SwiperSlideComponent from "@/components/Swiper";

export default async function Page() {
  return (
    <div>
      <Hero />
      <SwiperSlideComponent />
    </div>
  );
}