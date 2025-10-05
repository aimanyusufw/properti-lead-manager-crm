import { useState } from "react";
import QuestionCard from "../../Libs/QuestionCard";
import { accordionItems } from "../../Const/Home";

const FAQs = () => {
    const [accordionOpen, setAccordionOpen] = useState(0);

    const handleButton = (i) => {
        if (accordionOpen === i) return;
        setAccordionOpen(i);
    };

    return (
        <section className="py-10 md:py-20" id="faq">
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
    );
};

export default FAQs;
