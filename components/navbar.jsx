import Image from "next/image";
import Logo from "@/public/BName.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-20 py-3 lg:flex justify-between align-middle items-center bg-gray-100 shadow-lg">
      <div>
        <Link href="/">
          <Image width={400} src={Logo} alt="Madrasha logo" />
        </Link>
      </div>
      <ul className="flex gap-4 align-middle justify-center flex-wrap lg:mt-0 mt-4">
        <li>
          <a className="hover:text-gray-500" href="">
            যোগাযোগ
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500" href="https://jamiatullatif.com">
            মাদ্রাসা পরিচিতি
          </a>
        </li>

        <li>
          <Link className="hover:text-gray-500" href="/question">
            প্রশ্ন করুন
          </Link>
        </li>
        <li>
          <a
            className="bg-green-500 text-white px-6 py-2 rounded-2xl hover:bg-gray-300 hover:text-black transition duration-300"
            href=""
          >
            লগ-ইন
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
