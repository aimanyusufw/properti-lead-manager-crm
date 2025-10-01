import React from "react";

const Home = () => {
    return (
        <>
            <section className="pt-24 pb-20 md:py-48 ">
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
                        <button className="px-6 py-4 bg-primary text-sm text-white rounded-sm cursor-pointer font-medium hover:opacity-90 transition">
                            Secure Your{" "}
                            <span className="font-play-fair text-base italic">
                                FREE Consultation
                            </span>{" "}
                            Slot
                        </button>
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
            <section id="our-credibility" className="py-16 bg-slate-100">
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
            <div className="py-24">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-sm">
                            Are You Facing These{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                Property Roadblocks?
                            </span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
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
            </div>
        </>
    );
};

export default Home;
