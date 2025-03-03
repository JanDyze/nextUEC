import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";
import Button from "@/components/Button";
import { RefreshCcw } from "lucide-react";

const PurposeCard = () => {
    const { isCollapsed } = useSidebarStore();

    const missionText = "  We are a Christ-centered community, loving and discipling people to worship God.";
    const visionText = "  To see a transformed generation, passionately following Christ and impacting the world.";

    const [isMission, setIsMission] = useState(true);
    const [displayText, setDisplayText] = useState("");

    const text = isMission ? missionText : visionText;
    useEffect(() => {
        setDisplayText("");
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 50);
    
        return () => clearInterval(interval);
    }, [isMission, isCollapsed, text]); // Added 'text' as a dependency
    

    return (
        <div
            className={`absolute bg-sky-400/10 w-full h-30 rounded-lg flex flex-col gap-1 p-3 justify-center transition-all duration-300 
            ${isCollapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
        >
            <div className="flex gap-1 justify-center w-full h-[20%] mb-2 items-start">
                <div className="flex-1 font-bold text-foreground text-center" />
                <div className="flex-1 font-bold text-foreground justify-center flex">
                    {isMission ? "Mission" : "Vision"}
                </div>
                <div className="flex-1">
                    <Button
                        variant="plain"
                        color="text-foreground"
                        icon={<RefreshCcw className="w-4 h-4" />}
                        className="max-h-5 max-w-5"
                        onClick={() => setIsMission((prev) => !prev)} // Toggle Mission/Vision
                    />
                </div>
            </div>
            <motion.div
                className="flex-1 text-xs text-center max-w-xs overflow-hidden whitespace-pre-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {displayText}
            </motion.div>
        </div>
    );
};

export default PurposeCard;
