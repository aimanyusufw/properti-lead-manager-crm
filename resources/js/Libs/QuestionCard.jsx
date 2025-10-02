import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuestionCard = ({ data, isOpen, setIsOpen, index }) => {
    return (
        <div className="border border-neutral-500 rounded-sm">
            <button
                onClick={() => setIsOpen(index)}
                className="w-full flex justify-between items-center p-5"
            >
                <h1 className="font-semibold text-sm md:text-base lg:text-lg text-start">
                    {data.question}
                </h1>
                <span className="p-2 border border-neutral-500 rounded-full text-slate-300">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p className="text-neutral-700 text-xs max-w-lg md:text-sm leading-relaxed md:leading-relaxed">
                        {data.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
