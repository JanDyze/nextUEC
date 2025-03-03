import { motion } from "framer-motion";
import { useState } from "react";

const SomeCard = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const tabs = [
        { id: "mission", label: "😍", content: "We are a Christ-centered community, loving and discipling people to worship God." },
        { id: "vision", label: "🦘", content: "To see a transformed generation, passionately following Christ and impacting the world." },
        // { id: "values", label: "Values", content: "We uphold integrity, faith, and love as our core values." },
    ];

    return (
        <div className="bg-card rounded-lg p-4 w-80 text-foreground">
            {/* Tabs */}
            <div className="flex relative">
                {/* Animated background */}
                <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 h-full bg-main rounded-t-3xl "
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                        width: `${100 / tabs.length}%`, // Adjust width dynamically
                        left: `${(tabs.findIndex((tab) => tab.id === activeTab) * 100) / tabs.length}%`,
                    }}
                />
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={` 
                            cursor-pointer
                            relative flex-1 text-center py-2 font-semibold transition-colors z-10 ${activeTab === tab.id ? "text-foreground" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div key={activeTab} className="text-foreground bg-main p-4">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default SomeCard;
