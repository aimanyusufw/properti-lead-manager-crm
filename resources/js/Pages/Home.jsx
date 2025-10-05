import Services from "../Libs/Services";
import { Link } from "react-scroll";
import Advocates from "../Components/Sections/Advocates";
import GetStarted from "../Components/Sections/GetStarted";
import FAQs from "../Components/Sections/FAQs";

const Home = () => {
    return (
        <>
            <section className="pt-24 pb-20 md:py-48" id="home">
                <div className="container w-full flex flex-wrap-reverse items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-semibold text-4xl md:text-5xl leading-snug mb-6">
                            Stop Losing Sleep Over{" "}
                            <span className="font-black italic text-primary text-5xl md:text-6xl lg:text-7xl font-play-fair">
                                Property
                            </span>{" "}
                            Disputes.{" "}
                            <span className="font-black italic text-primary text-5xl md:text-6xl lg:text-7xl font-play-fair">
                                {" "}
                                Get Your FREE
                            </span>{" "}
                            Legal Risk Analysis
                        </h1>
                        <p className="max-w-xl text-sm leading-relaxed text-text/80 mb-8">
                            Limited slots available this month. Our Senior
                            Advocates will review your case and provide a clear
                            legal roadmap.
                        </p>
                        <Link
                            to="get-started"
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="px-6 py-4 bg-primary text-sm text-white rounded-sm cursor-pointer font-medium hover:opacity-90 transition"
                        >
                            Secure Your{" "}
                            <span className="font-play-fair text-base italic">
                                FREE Consultation
                            </span>{" "}
                            Slot
                        </Link>
                    </div>
                    <div className="mb-8 md:mb-0 self-center w-full md:w-1/2 relative">
                        <img
                            src="./Assets/Hero-image.png"
                            className="rounded-lg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section id="our-credibility" className="py-10 bg-slate-100">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-5 place-items-center gap-20 md:gap-40 flex-wrap">
                        <img src="/Assets/Gic-logo.png" alt="" />
                        <img src="/Assets/JLL_logo.png" alt="" />
                        <img src="/Assets/Marriott_International.svg" alt="" />
                        <img src="/Assets/accor_logo.png" alt="" />
                        <img src="/Assets/CBRE_Group_logo.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-sm">
                            Are You Facing These{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                Property Roadblocks?
                            </span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14">
                            <div>
                                <img
                                    src="/Assets/Rectangle 1.png"
                                    className="w-full rounded-sm mb-6"
                                    alt=""
                                />
                                <h1 className="font-semibold text-lg md:text-xl leading-snug mb-6 max-w-sm">
                                    Uncertainty about land certificate validity?
                                </h1>
                            </div>
                            <div>
                                <img
                                    src="/Assets/Rectangle 2.png"
                                    className="w-full rounded-sm mb-6"
                                    alt=""
                                />
                                <h1 className="font-semibold text-lg md:text-xl leading-snug mb-6 max-w-sm">
                                    Protracted or complex buying/selling
                                    processes?
                                </h1>
                            </div>
                            <div>
                                <img
                                    src="/Assets/Rectangle 3.png"
                                    className="w-full rounded-sm mb-6"
                                    alt=""
                                />
                                <h1 className="font-semibold text-lg md:text-xl leading-snug mb-6 max-w-sm">
                                    Fear of future legal challenges?
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-20" id="our-solution">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-sm">
                            Identify{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                hidden risks
                            </span>{" "}
                            immediately.
                        </h1>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                        <img
                            src="/Assets/Solution-image.png"
                            alt=""
                            className="w-full rounded-md"
                        />
                        <Services />
                    </div>
                </div>
            </section>
            <Advocates />
            <GetStarted />
            <FAQs />
        </>
    );
};

export default Home;
