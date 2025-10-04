import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";

const Navbar = () => {
    const [navScrol, setNavScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const handleMenu = () => {
        document.body.classList.toggle("overflow-hidden");
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`py-4 md:py-6 fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
                    navScrol ? "navbar-fixed" : ""
                }`}
            >
                <div className="container">
                    <div className="w-full flex justify-between items-center">
                        <Link to={"home"} smooth={true} duration={500}>
                            <h1 className="font-play-fair cursor-pointer font-black text-3xl text-text">
                                LEX PROPERTI
                            </h1>
                        </Link>
                        <div className="md:hidden">
                            <HiOutlineMenu
                                className="w-7 h-7"
                                onClick={handleMenu}
                            />
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-text">
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#home"
                                        ? "hover:opacity-70"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#our-credibility"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="our-credibility"
                                smooth={true}
                                offset={-250}
                                duration={500}
                            >
                                Our Credibility
                            </Link>
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#our-solution"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="our-solution"
                                smooth={true}
                                offset={-90}
                                duration={500}
                            >
                                Our Solution
                            </Link>
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#expert-profile"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="expert-profile"
                                smooth={true}
                                offset={-90}
                                duration={500}
                            >
                                Expert Profile
                            </Link>
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#get-started"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="get-started"
                                smooth={true}
                                offset={-90}
                                duration={500}
                            >
                                Get Clarity
                            </Link>
                            <Link
                                className={`transition-all cursor-pointer ${
                                    url === "/#get-started"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                to="faq"
                                smooth={true}
                                offset={-90}
                                duration={500}
                            >
                                FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
        </>
    );
};

export default Navbar;
