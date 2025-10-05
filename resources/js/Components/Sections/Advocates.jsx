import React from "react";
import AdvocateCard from "../../Libs/AdvocateCard";
import { advocates } from "../../Const/Home";

const Advocates = () => {
    return (
        <section className="py-10 md:py-20" id="expert-profile">
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
    );
};

export default Advocates;
