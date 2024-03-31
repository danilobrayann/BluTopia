import Header from "../components/header";
import Image from "next/image"; // Importe a tag Image do Next.js
import Azul from "../../public/azul.png"; // Importe a imagem
import Socialmedia from "@/components/socialmedia";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <section className="mt-44 flex justify-around items-center">
        <Socialmedia />
        <h1 className="mr-28 text-white font-semibold text-6xl">
          <span className="text-gray-400">BL</span>UTOPIA
        </h1>
        <div className="rounded-full bg-slate-200 h-96 w-96 ">
          <Image src={Azul} alt="azul" width={380} height={400} />
        </div>
      </section>
      <section className="flex justify-center items-center h-64 gap-10 "></section>
      <Footer/>
    </main>
  );
}
