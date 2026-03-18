import Image from "next/image";
import ProfileCard from "@/components/navbar";
import About from "@/components/about";
import Techstack from "@/components/techstack";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <ProfileCard />
      <About />
      <Techstack />
      <Footer />
    </main>
  );
}
