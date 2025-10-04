import Services from "../Libs/Services";
import AdvocateCard from "../Libs/AdvocateCard";
import QuestionCard from "../Libs/QuestionCard";
import { useState } from "react";

const Home = () => {
    const [accordionOpen, setAccordionOpen] = useState(0);

    const handleButton = (i) => {
        if (accordionOpen === i) return;
        setAccordionOpen(i);
    };

    const advocates = [
        {
            name: "Emily Smith",
            bio: "Emily is a dedicated property advocate known for her meticulous approach to legal challenges. With a background in environmental law, she brings a unique perspective to property disputes.",
            imageUrl: "/Assets/Advocate_1.png",
        },
        {
            name: "Jhon Doe",
            bio: "John is a seasoned property advocate with over 15 years of experience in navigating complex land disputes and transactions. His expertise lies in risk assessment and legal strategy formulation.",
            imageUrl: "/Assets/Advocate_2.png",
        },
        {
            name: "Michael Johnson",
            bio: "Michael has a wealth of experience in property law, specializing in commercial real estate. His strategic insights have helped numerous clients achieve favorable outcomes.",
            imageUrl: "/Assets/Advocate_3.png",
        },
        {
            name: "Erina Wood",
            bio: "Erina is a rising star in property law, known for her innovative approach to legal challenges. She is passionate about advocating for her clients' rights and finding creative solutions to complex issues.",
            imageUrl: "/Assets/Advocate_4.png",
        },
    ];

    const accordionItems = [
        {
            question: "What types of property issues can be consulted?",
            answer: "We provide consultation for various property issues, including land boundary disputes, problematic property sales and purchases, handling property certificates (SHM/HGB), property inheritance issues, and matters related to building permits.",
        },
        {
            question: "How is the property law consultation process conducted?",
            answer: "The process begins with scheduling an appointment. Consultations can be done online (video call or chat) or in-person. You will be asked to explain your case in detail, and our team of advocates will provide legal analysis and recommendations for the next steps.",
        },
        {
            question: "What is the fee for a single consultation session?",
            answer: "The consultation fee varies depending on the complexity of the case and the chosen session duration. Detailed information regarding the tariffs will be provided after you fill out the initial consultation request form.",
        },
        {
            question:
                "Is the data and information I provide guaranteed to be confidential?",
            answer: "Yes, we fully guarantee the confidentiality of all client data and information. This confidentiality is an integral part of the professional code of ethics for advocates and is guaranteed by law.",
        },
        {
            question:
                "Does this service also include legal representation in court?",
            answer: "The consultation service is the initial stage. If your case requires litigation (court) or non-litigation (negotiation) assistance, we can offer full representation services under a separate agreement and fee structure.",
        },
        {
            question:
                "What should I prepare before the consultation session begins?",
            answer: "It is best to prepare relevant documents such as copies of land certificates, Sale and Purchase Agreements (AJB), Preliminary Sale and Purchase Agreements (PPJB), inheritance documents, or any other evidence related to your property issue. Also, put together a brief chronology of events.",
        },
    ];
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
            <section className="py-10 md:py-20">
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
            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-md">
                            Meet Your{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                Lead Advocates
                            </span>
                        </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advocates.map((data) => (
                                <AdvocateCard
                                    key={data.name}
                                    name={data.name}
                                    bio={data.bio}
                                    imageUrl={data.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-md">
                            Tell Us About{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                Your Case.
                            </span>
                            Get Matched{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                with an Expert.
                            </span>
                        </h1>
                        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Jhon"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="test@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="08123-4567-8990"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="case_type"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Case Type
                                </label>
                                <input
                                    type="text"
                                    id="case_type"
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="e.g Property Purchacing"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="urgency_level"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Urgency Level
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                                >
                                    <option>Low</option>
                                    <option>Normal</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="property_location"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Property Location
                                </label>
                                <textarea
                                    id="property_location"
                                    rows="2"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                    placeholder="123 Main Street, Anytown, USA"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <label
                                    htmlFor="case_details"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Case Details
                                </label>
                                <textarea
                                    id="case_details"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                    placeholder="Explain more about your case."
                                ></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <div className="flex items-center mb-4">
                                    <input
                                        id="checkbox-1"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary "
                                    />
                                    <label
                                        htmlFor="checkbox-1"
                                        className="ms-2 text-sm font-medium text-gray-900"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-primary hover:underline"
                                        >
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Register new account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl leading-snug mb-6 max-w-md">
                            Frequently{" "}
                            <span className="font-black italic text-primary text-3xl md:text-4xl font-play-fair">
                                Asked
                            </span>{" "}
                            Question.
                        </h1>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                        <img
                            src="/Assets/Faq.jpg"
                            alt=""
                            className="w-full rounded-md"
                        />
                        <div className="space-y-4 w-full">
                            {accordionItems.map((data, index) => (
                                <QuestionCard
                                    data={data}
                                    isOpen={accordionOpen === index}
                                    setIsOpen={handleButton}
                                    index={index}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
