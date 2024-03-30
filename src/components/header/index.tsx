import { Equal, User } from "lucide-react";
import Link from "next/link";

export default function header() {
  return (
    <nav className="flex mt-5 justify-around items-center ">
      <div>
        <h3 className="text-white">ESCOBATE</h3>
      </div>
      <div className="w-60" >
        <ul className="flex justify-around items-center w-96 h-20 cursor-pointer ">
          <Link href="/">
          <li className="text-zinc-400 hover:text-zinc-50">
            Home
          </li>
          </Link>
          <Link href="/About">
          <li className="text-zinc-400 hover:text-zinc-50" >
            About
          </li>
          </Link>
          <li className="text-zinc-400 hover:text-zinc-50">
            Contact
          </li>
          <li className="text-zinc-400 hover:text-zinc-50">
            Music
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <User className="cursor-pointer " />
        <Equal className="cursor-pointer" />
      </div>
    </nav>
  );
}
