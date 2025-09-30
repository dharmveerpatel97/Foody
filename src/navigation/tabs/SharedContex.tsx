import { createContext, FC, ReactNode, useContext } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

interface SharedStateContextType {
    scrollY: Animated.SharedValue<number>;
    scrollYGloabal: Animated.SharedValue<number>;
    scrollToTop: () => void;
}

export const ShareStateContext = createContext<SharedStateContextType | undefined>(undefined);

export const ShareStateContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const scrollY = useSharedValue(0);
    const scrollYGloabal = useSharedValue(0);

    const scrollToTop = () => {
        scrollY.value = withTiming(0, { duration: 300 });
        scrollYGloabal.value = withTiming(0, { duration: 300 });
    };

    return (
        <ShareStateContext.Provider value={{ scrollY, scrollYGloabal, scrollToTop }}>
            {children}
        </ShareStateContext.Provider>
    );
};

export const useShareState = () => {
    const context = useContext(ShareStateContext);
    if (context === undefined) throw new Error("Wrap with provier 1st");
    return context
}