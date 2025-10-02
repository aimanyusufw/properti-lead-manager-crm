import Services from "../Libs/Services";
import AdvocateCard from "../Libs/AdvocateCard";

const Home = () => {
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
            <section className="py-24">
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
            </section>
            <section className="py-20">
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
                        <div className="mb-10 md:mb-0">
                            <img
                                src="/Assets/Solution-image.png"
                                alt=""
                                className="w-full rounded-md"
                            />
                        </div>
                        <Services />
                    </div>
                </div>
            </section>
            <section className="py-24">
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
            <section className="py-24">
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
                            <div>
                                <label
                                    for="first_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Jhon"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="last_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="test@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="08123-4567-8990"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="case_type"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Case Type
                                </label>
                                <input
                                    type="text"
                                    id="case_type"
                                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="e.g Property Purchacing"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="urgency_level"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Urgency Level
                                </label>
                                <select
                                    id="countries"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                                >
                                    <option>Low</option>
                                    <option>Normal</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label
                                    for="urgency_level"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Property Location
                                </label>
                                <textarea
                                    id="message"
                                    rows="2"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                    placeholder="123 Main Street, Anytown, USA"
                                ></textarea>
                            </div>
                            <div className="col-span-2">
                                <label
                                    for="urgency_level"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Case Details
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                    placeholder="Explai more about your case."
                                ></textarea>
                            </div>
                            <div>
                                <div class="flex items-center mb-4">
                                    <input
                                        id="checkbox-1"
                                        type="checkbox"
                                        value=""
                                        class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary "
                                    />
                                    <label
                                        for="checkbox-1"
                                        class="ms-2 text-sm font-medium text-gray-900"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            class="text-primary hover:underline"
                                        >
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Register new account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
