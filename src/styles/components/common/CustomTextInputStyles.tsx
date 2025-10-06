import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BOTTOM_TAB_HEIGHT } from "@utils/theme/constants";
import { ThemeType } from "@utils/theme/ThemeContext";

const CustomTextInputStyles = (theme: ThemeType,isDisabled:boolean) => {
    const { colors, fonts, size, SF, fontSize, margins } = theme;
    return StyleSheet.create({
        container: {
            width: "100%",
        },
        label: {
            fontSize: size.SF(14),
            fontFamily: fonts.Medium,
            marginBottom: size.SH(7),
            color: colors.text,
        },
        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            // alignItems: multiline ? "flex-start" : "center",
            borderWidth: 1,
            // borderColor:
            //     status === "error"
            //         ? Colors.red
            //         : status === "success"
            //             ? Colors.green
            //             : Colors.gray,
            borderColor: colors.textInputBorderColor,
            borderRadius: size.SF(10),
            paddingHorizontal: size.SF(10),
            paddingVertical: margins.sm,
            backgroundColor: "transparent",
            // backgroundColor: withBackground ? Colors.white : "transparent",
            opacity: isDisabled ? 0.6 : 1,
        },
        inputStyle: {
            flex: 1,
            paddingVertical: Platform.OS === "ios" ? SF(10) : SF(8),
            color: colors.text,
            fontSize: fontSize.sm,
            paddingLeft: SF(10),
            fontFamily: fonts.Regular,
        },
        iconStyle: {
            width: SF(20),
            height: SF(20)
        },
        errorText:{
            marginLeft:margins.md,
            marginTop:margins.sm
        }
    });
};
export default CustomTextInputStyles