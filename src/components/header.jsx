import { Link } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto font-semibold">
        <Link to={"/user"} className="flex items-center">
          <span className="self-center text-xl whitespace-nowrap dark:text-white">
            Home
          </span>
        </Link>
        <div className="text-base text-gray-700 flex space-x-10">
            <span >Username: </span>
            <span >Email: </span>
        </div>
        <div className="w-full md:block md:w-auto" id="mobile-menu">
          <Link
            to={"/"}
            className="md:text-sm md:font-medium block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
