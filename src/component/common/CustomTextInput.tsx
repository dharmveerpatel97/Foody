import { View, Text, TextInput, ImageSourcePropType, TextInputProps, Image, TouchableOpacity, KeyboardTypeOptions } from 'react-native'
import React, { useMemo } from 'react'
import { CustomTextInputStyles } from 'src/styles/components/common';
import { useThemeContext } from '@utils';
import CustomText from './CustomText';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  isEditable?: boolean,
  errortext?: string,
  keyboardType?: KeyboardTypeOptions,
  maxLength?: number | undefined;
  marginTop?: number | undefined
}
export default function CustomTextInput({ marginTop = 15, placeholder = '', secureTextEntry = false, value, onChangeText, leftIcon, rightIcon, onRightIconPress, isEditable = true, errortext, keyboardType = "default", maxLength }: CustomTextInputProps) {
  const theme = useThemeContext();
  const styles = CustomTextInputStyles(theme, !isEditable);
  return (
    <View style={[styles.container, { marginTop }]}>
      <View style={styles.inputContainer}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        )}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={theme.colors.placeHolderColor}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          editable={isEditable}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            disabled={isEditable}
          >
            <Image
              source={rightIcon}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {
        errortext && <CustomText variant='h7' color={theme.colors.errorText} style={styles.errorText}>errorText</CustomText>
      }
    </View>
  )
}