import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-5  bg-gray-200 bg-opacity-30 ">
      <ul className="flex justify-evenly">
        <Link href="/">
          <li className="bg-gray-300 p-2 rounded-xl shadow-xl ">Home</li>
        </Link>
        <Link href="/performance">
          <li className="bg-gray-300 p-2 rounded-xl shadow-xl">Performance</li>
        </Link>
        <Link href="/reliability">
          <li className="bg-gray-300 p-2 rounded-xl shadow-xl">Reliability</li>
        </Link>
        <Link href="/scale">
          <li className="bg-gray-300 p-2 rounded-xl shadow-xl">Scale</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
