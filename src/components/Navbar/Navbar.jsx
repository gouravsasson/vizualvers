import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/vizualverselogo.webp";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="bg-black sm:h-[136px]">
        <div className="mx-auto flex justify-center  px-6 max-w-full">

        <Link to="/" className="w-[130px]  pt-6">
          <img className="h-auto w-[130px]" src={Logo} alt="Your Company" />
        </Link>
        </div>
        <div className=" relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  className={({isActive}) => 
                    ` hover:bg-gray-700 hover:text-white",
                    ${isActive ? "bg-gray-900 text-white" : "bg-gray-700,hover:text-white"    }
                      
                    "rounded-md px-3 py-2 text-sm font-medium`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className=" absolute hidden sm:block top-0 right-[50px]  ">
            <button
              type="button"
              className="  relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
