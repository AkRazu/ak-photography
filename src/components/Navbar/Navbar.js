import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../../images/logo4.png";
import auth from "../Auth/firebase_init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handelSignout = async () => {
    const success = await signOut();
    if (success) {
      toast.success("You are sign out");
      navigate("/login");
    }
  };

  console.log(user);
  return (
    <div>
      <ToastContainer />
      <Popover className="relative  bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 cursor-pointer">
              <a onClick={() => navigate("/")}>
                <span className="sr-only">Ak Photography</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="logoweb" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {/* <a
                
                className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a> */}
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Home
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/service"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Service
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Blog
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                About
              </NavLink>
              
            </Popover.Group>
            {user ? (
              <div className="hidden items-center items-center justify-end md:flex md:flex-1 lg:w-0">
                <p className="m-0">{user.email}</p>
                <a
                  onClick={() => handelSignout()}
                  className="cursor-pointer ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign out
                </a>
              </div>
            ) : (
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  onClick={() => navigate("/login")}
                  className="cursor-pointer whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Login
                </a>
                <a
                  onClick={() => navigate("/signup")}
                  className="cursor-pointer ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6"></div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Home
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/service"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Service
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                Blog
              </NavLink>
              <NavLink
               className="cursor-pointer text-base font-medium  hover:text-red-800"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                About
              </NavLink>
                </div>
                {user ? (
                  <div>
                    <a
                      onClick={() => handelSignout()}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Sign out
                    </a>
                  </div>
                ) : (
                  <div>
                    <a
                      onClick={() => navigate("/signup")}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        onClick={() => navigate("/login")}
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
