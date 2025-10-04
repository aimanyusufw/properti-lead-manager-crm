import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:py-8 py-6 gap-5">
                    <h1 className="font-play-fair font-black text-3xl text-text text-white">
                        LEX PROPERTI
                    </h1>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Disclaimer
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Contact
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Office Address
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Email
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Call Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Social
                            </h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        target="_blank"
                                        href={""}
                                        className=" hover:underline"
                                    >
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <span className="text-xs md:text-sm text-gray-300 sm:text-center">
                        © 2025 <a href="/">LEX PROPERTI</a>. All Rights
                        Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
