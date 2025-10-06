import { useEffect, useState, useCallback } from "react";
import AdvocateCard from "../../Libs/AdvocateCard";

const ITEMS_PER_PAGE = 4;
const INITIAL_PAGE = 1;

const Advocates = () => {
    const [advocates, setAdvocates] = useState([]);

    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const [lastFetchedCount, setLastFetchedCount] = useState(0);

    const fetchAdvocates = useCallback(async (nextPage) => {
        if (!nextPage) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `/advocates?page=${nextPage}&limit=${ITEMS_PER_PAGE}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            const newAdvocates = responseData.data || responseData;

            setLastFetchedCount(newAdvocates.length);

            setHasMore(newAdvocates.length >= ITEMS_PER_PAGE);

            setAdvocates((prevAdvocates) => {
                const isDuplicate =
                    prevAdvocates.some(
                        (adv) => adv.id === newAdvocates[0]?.id
                    ) && newAdvocates.length > 0;

                if (isDuplicate && nextPage > INITIAL_PAGE) {
                    return prevAdvocates;
                }

                return [...prevAdvocates, ...newAdvocates];
            });

            setPage(nextPage);
        } catch (err) {
            console.error("Failed to fetch advocates:", err);
            setError(err.message);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAdvocates(INITIAL_PAGE);
    }, [fetchAdvocates]);

    const handleViewMore = () => {
        fetchAdvocates(page + 1);
    };

    const handleViewLess = () => {
        if (page > INITIAL_PAGE) {
            const itemsToRemove =
                lastFetchedCount > 0 ? lastFetchedCount : ITEMS_PER_PAGE;

            setAdvocates((prevAdvocates) =>
                prevAdvocates.slice(0, prevAdvocates.length - itemsToRemove)
            );

            setPage((prev) => prev - 1);

            setHasMore(true);
            setLastFetchedCount(ITEMS_PER_PAGE);
        }
    };

    if (advocates.length === 0 && loading && page === INITIAL_PAGE)
        return <p>Loading Advocates...</p>;
    if (error) return <p>Error: {error}</p>;

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
                        {advocates.map((data) => (
                            <AdvocateCard
                                key={data.id}
                                name={data.name}
                                bio={data.notes}
                                imageUrl={
                                    data.photo.split("/")[0] === "Assets"
                                        ? `/${data.photo}`
                                        : `${window.location.origin}/storage/${data.photo}`
                                }
                            />
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        {page > INITIAL_PAGE && (
                            <button
                                onClick={handleViewLess}
                                disabled={loading}
                                className="px-4 py-3 bg-gray-500 text-sm text-white rounded cursor-pointer disabled:opacity-50"
                            >
                                {loading ? "Loading..." : "View Less"}
                            </button>
                        )}
                        {hasMore && (
                            <button
                                onClick={handleViewMore}
                                disabled={loading}
                                className="px-4 py-3 bg-primary text-sm text-white rounded cursor-pointer disabled:opacity-50"
                            >
                                {loading ? "Loading..." : "View More"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advocates;
