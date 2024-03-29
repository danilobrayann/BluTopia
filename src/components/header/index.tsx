import { Equal, User } from "lucide-react";
export default function header() {
  return (
    <nav className="flex mt-5 justify-around">
      <div>
        <h3 className="text-white">ESCOBATE</h3>
      </div>
      <div className="flex gap-3">
        <User className="cursor-pointer" />
        <Equal className="cursor-pointer" />
      </div>
    </nav>
  );
}
