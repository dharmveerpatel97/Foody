import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  TextInputProps,
  Image,
  ImageSourcePropType,
  DimensionValue,
  I18nManager,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors, Fonts, SF, SH, SW } from "../utils";
import AppText from "./AppText";

type StatusType = "default" | "error" | "success" | "disabled";

interface InputFieldProps extends TextInputProps {
  label?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;

  // styling
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;

  // flexible options
  status?: StatusType;
  helperText?: string; // replaces errorMessage
  textColor?: string;
  marginBottom?: DimensionValue;
  marginTop?: DimensionValue;
  withBackground?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = "",
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  onRightIconPress,

  containerStyle,
  inputStyle,
  labelStyle,
  inputContainerStyle,

  status = "default",
  helperText = "",
  secureTextEntry = false,
  keyboardType = "default",
  autoFocus = false,
  multiline = false,
  maxLength,
  withBackground = false,
  textColor = Colors.white,
  marginBottom = SH(10),
  marginTop = SH(10),
  editable = true,
  ...props
}) => {
  const isDisabled = status === "disabled";

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: "100%",
          marginVertical: 5,
          marginBottom,
          marginTop,
          ...containerStyle,
        },
        label: {
          fontSize: SF(14),
          fontFamily: Fonts.MEDIUM,
          marginBottom: SH(7),
          color: textColor,
          ...labelStyle,
        },
        inputContainer: {
          flexDirection: "row",
          alignItems: multiline ? "flex-start" : "center",
          borderWidth: 1,
          borderColor:
            status === "error"
              ? Colors.red
              : status === "success"
              ? Colors.green
              : Colors.gray,
          borderRadius: SF(10),
          paddingHorizontal: SF(10),
          paddingVertical: SH(3.6),
          backgroundColor: withBackground ? Colors.white : "transparent",
          opacity: isDisabled ? 0.6 : 1,
          ...inputContainerStyle,
        },
        input: {
          flex: 1,
          paddingVertical: Platform.OS === "ios" ? SF(10) : SF(8),
          color: textColor,
          fontSize: SF(14.5),
          paddingLeft: SF(10),
          textAlign: I18nManager.isRTL ? "right" : "left",
          fontFamily: Fonts.REGULAR,
          ...inputStyle,
        },
        helperText: {
          marginTop: 3,
          color: status === "error" ? Colors.red : Colors.gray,
          fontSize: SF(12),
          fontFamily: Fonts.REGULAR,
          paddingLeft: SW(4),
        },
      }),
    [status, textColor, multiline, marginBottom, marginTop]
  );

  return (
    <View style={styles.container}>
      {label && <AppText style={styles.label}>{label}</AppText>}

      <View style={styles.inputContainer}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={{ width: SF(20), height: SF(20), tintColor: textColor }}
            resizeMode="contain"
          />
        )}

        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          multiline={multiline}
          maxLength={maxLength}
          value={value}
          editable={editable && !isDisabled}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            disabled={isDisabled}
          >
            <Image
              source={rightIcon}
              style={{ width: SF(20), height: SF(20), tintColor: textColor }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      {helperText ? <AppText style={styles.helperText}>{helperText}</AppText> : null}
    </View>
  );
};

export default InputField;
