import { StyleSheet } from "react-native";
import { ThemeType } from "@utils/theme/ThemeContext";

const CategoryListStyles = (
    theme: ThemeType,
) => {
    const { size,colors} = theme;
    return StyleSheet.create({
        itemContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: size.SW(10),
            backgroundColor: colors.white,
            paddingVertical: size.SH(10),
            paddingHorizontal: size.SW(20),
            borderRadius: size.SW(10),
        },
        image: {
            width:size.SW(30),
            height: size.SW(30),
            marginBottom: 5,
        },
        contentContainer: {
            paddingVertical:size.SH(15),
        },
    });
};
export default CategoryListStyles;