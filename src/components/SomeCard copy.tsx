import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SomeCard = () => {
    const [activeTab, setActiveTab] = useState("mission");
    const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", left: "0px" });
    const tabRefs = useRef({});

    const tabs = [
        { id: "mission", label: "Mission", content: "We are a Christ-centered community, loving and discipling people to worship God." },
        { id: "vision", label: "Vision", content: "To see a transformed generation, passionately following Christ and impacting the world." },
        // { id: "values", label: "Values", content: "We value love, integrity, and discipleship in all we do." },
    ];

    useEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            setIndicatorStyle({
                width: `${activeTabElement.offsetWidth}px`,
                left: `${activeTabElement.offsetLeft}px`,
            });
        }
    }, [activeTab]);

    return (
        <div className="bg-card shadow-lg rounded-lg p-4 w-80 text-foreground">
            {/* Tabs */}
            <div className="flex relative pb-2">
                {/* Animated background */}
                <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 h-full bg-main rounded-t-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, width: indicatorStyle.width, left: indicatorStyle.left }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => (tabRefs.current[tab.id] = el)}
                        className={`relative px-4 py-2 text-center font-semibold transition-colors z-10 ${activeTab === tab.id ? "text-foreground" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="relative flex flex-col items-center">
                {/* Head */}
                <div className="w-16 h-16 bg-white rounded-full shadow-lg relative z-10">
                    {/* Eyes */}
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-black rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-black rounded-full"></div>
                </div>

                {/* Dress */}
                <div className="w-20 h-28 bg-white rounded-t-full relative mt-[-8px] flex justify-between overflow-hidden shadow-lg">
                    {/* Wavy Bottom */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between">
                        <div className="w-6 h-6 bg-background rounded-full translate-y-1/2"></div>
                        <div className="w-6 h-6 bg-background rounded-full translate-y-1/2"></div>
                        <div className="w-6 h-6 bg-background rounded-full translate-y-1/2"></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div key={activeTab} className="text-foreground bg-main p-4">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default SomeCard;
