import { useState } from "react";
import { FaMinus } from "react-icons/fa";

const Services = () => {
    const [isOpen, setIsOpen] = useState(0);

    const services = [
        {
            title: "Immediate Risk Exposure",
            description:
                "Stop Guessing. We quickly pinpoint hidden vulnerabilities in your land certificate, HGB status, or complex transaction agreements. Know your exact legal exposure before it costs you millions.",
        },
        {
            title: "Clear, Step-by-Step Action Plan",
            description:
                "You won't leave with vague advice. Our advocates provide a prioritized legal roadmap: Step 1 (Urgent Fixes), Step 2 (Negotiation Strategy), and Step 3 (Litigation Preparedness). Clarity eliminates anxiety.",
        },
        {
            title: "Immediate Risk Exposure",
            description:
                "Minimize prolonged litigation and future government penalties. By correctly structuring your documents now, we ensure your assets are legally sound, protecting their value for generations to come.",
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {services.map((data, index) => (
                <div className="border rounded-md p-4 " key={index}>
                    <button
                        onClick={() => setIsOpen(index)}
                        className="flex justify-between items-center cursor-pointer w-full"
                    >
                        <div className="w-full flex items-center">
                            <div className="flex justify-center items-center border rounded-full h-14 w-14 text-primary font-play-fair italic text-4xl font-bold mr-4">
                                {index + 1}
                            </div>
                            <h1
                                key={index}
                                className="font-play-fair text-start text-lg md:text-2xl font-black italic mb-4"
                            >
                                {data.title}
                            </h1>
                        </div>
                        <span className="p-2 w-10 h-10 flex justify-center items-center border rounded-full text-slate-300">
                            <FaMinus />{" "}
                        </span>
                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                            isOpen === index
                                ? "grid-rows-[1fr] opacity-100 px-2 pb-5"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <div className="overflow-hidden mt-2 md:mt-5">
                            <p className="text-xs md:text-sm lg:text-base text-text/80 leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
