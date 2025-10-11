import { Form, usePage } from "@inertiajs/react";
import { useState } from "react";

const GetStarted = () => {
    const [closeToast, setCloseToast] = useState(false);
    const { flash } = usePage().props;

    return (
        <section className="py-10 md:py-20 relative" id="get-started">
            <div className="container">
                {flash.message && (
                    <div
                        id="toast-success"
                        className={`${
                            closeToast ? "hidden" : "fixed"
                        } top-20 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm`}
                        role="alert"
                    >
                        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            {flash.message}
                        </div>
                        <button
                            type="button"
                            onClick={() => setCloseToast(true)}
                            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8-700"
                            data-dismiss-target="#toast-success"
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                )}
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
                    <Form
                        action={"/send-case"}
                        method="post"
                        className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5"
                        resetOnSuccess
                        disableWhileProcessing
                    >
                        {({ errors }) => (
                            <>
                                <>
                                    <div className="w-full">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                            placeholder="Jhon"
                                        />
                                        {errors.first_name && (
                                            <span className="text-xs text-red-600">
                                                {errors.first_name}
                                            </span>
                                        )}
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
                                            name="last_name"
                                            id="last_name"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                            placeholder="Doe"
                                        />{" "}
                                        {errors.last_name && (
                                            <span className="text-xs text-red-600">
                                                {errors.last_name}
                                            </span>
                                        )}
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
                                            name="email"
                                            id="email"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                            placeholder="test@example.com"
                                        />
                                        {errors.email && (
                                            <span className="text-xs text-red-600">
                                                {errors.email}
                                            </span>
                                        )}
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
                                            name="phone"
                                            id="phone"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                            placeholder="08123-4567-8990"
                                        />
                                        {errors.phone && (
                                            <span className="text-xs text-red-600">
                                                {errors.phone}
                                            </span>
                                        )}
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
                                            name="case_type"
                                            id="case_type"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                            placeholder="e.g Property Purchacing"
                                        />
                                        {errors.case_type && (
                                            <span className="text-xs text-red-600">
                                                {errors.case_type}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="urgency_level"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Urgency Level
                                        </label>
                                        <select
                                            name="urgency_level"
                                            id="urgency_level"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                                        >
                                            <option>Low</option>
                                            <option>Normal</option>
                                            <option>High</option>
                                            <option>Critical</option>
                                        </select>
                                        {errors.urgency_level && (
                                            <span className="text-xs text-red-600">
                                                {errors.urgency_level}
                                            </span>
                                        )}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="property_location"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Property Location
                                        </label>
                                        <textarea
                                            name="property_location"
                                            id="property_location"
                                            rows="2"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                            placeholder="123 Main Street, Anytown, USA"
                                        ></textarea>
                                        {errors.property_location && (
                                            <span className="text-xs text-red-600">
                                                {errors.property_location}
                                            </span>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="case_details"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Case Details
                                        </label>
                                        <textarea
                                            name="case_details"
                                            id="case_details"
                                            rows="6"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                            placeholder="Explain more about your case."
                                        ></textarea>
                                        {errors.case_details && (
                                            <span className="text-xs text-red-600">
                                                {errors.case_details}
                                            </span>
                                        )}
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="flex items-center mb-4">
                                            <input
                                                name="checkbox-1"
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
                                            className="cursor-pointer text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >
                                            Send Your Case{" "}
                                        </button>
                                    </div>
                                </>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
