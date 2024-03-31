import { Instagram, Github, Phone, Mail } from "lucide-react";
export default function socialmedia() {
  return (
    <nav className="  h-40 w-32 flex justify-around items-center flex-col ">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Instagram className="cursor-pointer text-lime-400 animate-bounce" />
      </a>
      <Github className="cursor-pointer text-lime-400 animate-bounce" />
      <Phone className="cursor-pointer text-lime-400 animate-bounce" />
      <Mail className="cursor-pointer text-lime-400 animate-bounce" />
    </nav>
  );
}
