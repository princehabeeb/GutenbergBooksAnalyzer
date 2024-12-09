"use client";
import logo from "@/public/images/logo-with-text.png";
import logoIcon from "@/public/images/logoicon.png";
import { IconArrowUpRight, IconMenu2, IconSearch } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import ModeSwitcher from "../navbar/ModeSwitcher";
import { demoData } from "./demodata";

type ResultType = {
  id: number;
  title: string;
  img: StaticImageData;
  desc: string;
  category: string;
  url: string;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<ResultType[]>([]);
  const router = useRouter(); // For programmatic navigation
  const isLoggedIn = false; // Simulate authentication. Replace with real logic.

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 120);
    });
  }, []);

  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchResult([]); // Clear search results if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm.trim()) {
      setSearchResult([]);
      return;
    }
    const result = demoData.filter(
      ({ title, desc }) =>
        title.toLowerCase().includes(searchTerm) ||
        desc.toLowerCase().includes(searchTerm)
    );
    setSearchResult(result);
  };

  const handleSavedListClick = () => {
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      router.push("/saved-list"); // Redirect to saved list if authenticated
    }
  };

  const path = usePathname();

  return (
    <div
      className={`fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10 ${
        scrolled && "bg-n0 dark:bg-bg3 shadow-lg"
      }`}>
      <nav
        className={`container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 lg:py-6 xxl:py-8 ${
          scrolled && "lg:py-4 xxl:!py-5"
        }`}>
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <div className="relative" ref={searchContainerRef}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`bg-n0 dark:bg-bg4 shrink-0 ${
                scrolled ? "bg-primary/5 dark:bg-bg4" : "bg-n0 "
              } ${
                path === "/demos" && "bg-primary/5"
              }  flex gap-3 rounded-[30px] border max-md:border-n30 lg:border-transparent px-3 xl:px-5 xxl:px-6 items-center justify-between xxl:w-[336px]`}>
              <input
                type="text"
                placeholder="Search book.."
                onFocus={handleSearch}
                onInput={handleSearch}
                className="bg-transparent py-2 xxl:py-3 focus:outline-none w-full"
              />
              <IconSearch />
            </form>
            {searchResult.length > 0 && (
              <div
                className={`absolute top-[110%] left-0 max-h-[350px] overflow-y-auto right-0 p-1 rounded-lg flex flex-col bg-n0 dark:bg-bg4`}>
                {searchResult.map(({ id, desc, title, url }) => (
                  <Link
                    key={id}
                    href={url}
                    className="flex flex-col gap-1 p-2 hover:bg-primary/5 dark:hover:bg-bg3 rounded-lg duration-300">
                    <p className="font-medium text-sm xl:text-base">{title}</p>
                    <span className="text-xs">{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <ul
          className={`lg:flex z-20 items-center gap-4 absolute top-full lg:static ${
            menuOpen
              ? "bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col"
              : "max-lg:hidden font-bold max-lg:-translate-x-full"
          }`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ModeSwitcher isBlue={true} />
          <button
            className="btn max-md:hidden"
            onClick={handleSavedListClick}>
            Saved List <IconArrowUpRight />
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <IconMenu2 />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
