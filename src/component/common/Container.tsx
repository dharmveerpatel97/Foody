import React, { ReactNode } from 'react';
import { View, StatusBar, StyleSheet, ViewStyle, StatusBarStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: ReactNode;
  fullScreen?: boolean;
  paddingHorizontal?: number;
  backgroundColor?: string;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fullScreen = false,
  paddingHorizontal = 16,
  backgroundColor = '#FFFFFF',
  statusBarColor = '#FFFFFF',
  barStyle = 'dark-content',
  style,
}) => {
  const Wrapper = fullScreen ? View : SafeAreaView;

  return (
    <Wrapper
      style={[
        styles.container,
        { backgroundColor, paddingHorizontal },
        style,
      ]}
    >
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
