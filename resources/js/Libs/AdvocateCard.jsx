import { useState } from "react";

const AdvocateCard = ({ name, bio, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ease-in-out text-white ${
                    isHovered ? "translate-y-0" : "translate-y-[90px]"
                }`}
            >
                <h2 className={`text-3xl font-bold font-play-fair mb-4`}>
                    {name}
                </h2>
                <div
                    className={`text-sm mb-2 transition-opacity duration-300 ease-in-out`}
                >
                    <p className="line-clamp-3">{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvocateCard;
