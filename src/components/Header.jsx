"use client";

import {
  PopoverGroup,
} from "@headlessui/react";
import { Link, NavLink } from "react-router";
export default function Example() {

  return (
    <header className="bg-gray-100  ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex">
          <Link
            className="font-bold text-indigo-600 text-3xl px-4 py-2 rounded mr-5  pr-5"
            to={"/"}
          >
            WebProg.io
          </Link>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-500"
                : "font-semibold text-gray-800  transition-all duration-500 ease-in-out hover:text-indigo-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-500"
                : "font-semibold text-gray-800 transition-all duration-500 ease-in-out hover:text-indigo-500"
            }
          >
            Users
          </NavLink>
          <NavLink
            to={"/posts"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-500"
                : "font-semibold text-gray-800  transition-all duration-500 ease-in-out hover:text-indigo-500"
            }
          >
            Posts
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            href="#"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-500"
                : "font-semibold text-gray-800 transition-all duration-500 ease-in-out hover:text-indigo-500"
            }
          >
            Log in
            <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

    </header>
  );
}
