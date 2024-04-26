import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-5 mb-8 bg-gray-300 border border-black ">
      <ul className="flex justify-evenly">
        <Link href="/">
          <li className="bg-transparent p-5 rounded-xl shadow-xl ">Home</li>
        </Link>
        <Link href="/performance">
          <li className="bg-transparent p-5 rounded-xl shadow-xl">
            Performance
          </li>
        </Link>
        <Link href="/reliability">
          <li className="bg-transparent p-5 rounded-xl shadow-xl">
            Reliability
          </li>
        </Link>
        <Link href="/scale">
          <li className="bg-transparent p-5 rounded-xl shadow-xl">Scale</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
