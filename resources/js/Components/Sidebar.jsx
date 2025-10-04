import { Link } from "react-scroll";

const Sidebar = ({ isOpen, handleMenu }) => {
    return (
        <>
            <aside
                id="sidebar-responsive"
                className={`fixed top-0 right-0 z-[100] w-64 h-screen transition-transform md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#34656D]">
                    <div className="flex items-center p-2 my-5 justify-between">
                        <Link
                            onClick={handleMenu}
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="cursor-pointer self-center text-2xl text-white font-play-fair font-black whitespace-nowrap"
                        >
                            LEX PROPERTI
                        </Link>
                    </div>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="our-credibility"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Our Credibility</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="our-solution"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Our Solution</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="expert-profile"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Expert Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="get-started"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Get Clarity</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                to="faq"
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="cursor-pointer flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">FAQs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 z-[99]"
                    aria-hidden="true"
                    onClick={handleMenu}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
