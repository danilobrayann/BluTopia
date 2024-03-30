import Header from "../components/header";
import Image from "next/image"; // Importe a tag Image do Next.js
import Azul from "../../public/azul.png"; // Importe a imagem
import { Instagram, Github,Phone,Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
    
      <Header />
      <section className="mt-44 flex justify-around items-center">
      <nav className="  h-40 w-32 flex justify-around items-center flex-col ">
      <Instagram className="cursor-pointer text-lime-400" />
      <Github className="cursor-pointer text-lime-400" /> 
      <Phone className="cursor-pointer text-lime-400"/>
      <Mail className="cursor-pointer text-lime-400"/>
        </nav>
        <h1 className="mr-28 text-white font-semibold text-6xl">
          <span className="text-gray-400">BL</span>UTOPIA
        </h1>
        <div className="rounded-full bg-slate-200 h-96 w-96 ">
          <Image src={Azul} alt="azul" width={380} height={400} />
        </div>
      </section>
      <section className="flex justify-center items-center h-64 gap-10 ">
        
        <div className="rounded-full bg-red-700 h-8 w-8 cursor-pointer"></div>
        <div className="rounded-full bg-lime-500 h-8 w-8 cursor-pointer"></div>
        <div className="rounded-full"></div>
        <div className="rounded-full"></div>
      </section>
    </main>
  );
}
