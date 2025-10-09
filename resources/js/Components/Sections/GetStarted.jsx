import React from "react";

const GetStarted = () => {
    return (
        <section className="py-10 md:py-20" id="get-started">
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
                                Send Your Case
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
