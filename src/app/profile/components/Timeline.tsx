const Timeline = () => {
    const events = [
        {
            date: "January 7, 2024",
            title: "Sunday Service",
            description:
                "Jan Dyze didn't attend the Sunday service for unknown reasons.",
        },
        {
            date: "January 14, 2024",
            title: "Sunday Service",
            description:
                "Jan Dyze attended the service and participated in the community prayer.",
        },
        {
            date: "January 21, 2024",
            title: "Sunday Service",
            description:
                "Jan Dyze was late to the service but stayed until the end.",
        },
    ];

    return (
        <>
            <ol className="relative border-s-1 border-primary">
                {events.map((event, index) => (
                    <li key={index} className="ml-4 pb-7">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-[6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                        <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {event.date}
                        </div>
                        <div className="text-lg font-semibold text-foreground ">
                            {event.title}
                        </div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                            {event.description}
                        </div>

                    </li>
                ))}
            </ol>
        </>
    );
};

export default Timeline;
