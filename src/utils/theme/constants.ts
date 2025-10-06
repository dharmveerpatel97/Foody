import { Dimensions } from "react-native";

export const BOTTOM_TAB_HEIGHT = 80
export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width
export const isBannerHeight = screenHeight * 0.4

export const Colors = {
    primary: '#ff751f',
    primary_light: '#EF4F5F',
    active_light:'#ECFAF1',
    secondary: '#2D2D2D',
    tertiary: '#F4F4F2',
    background: '#fff',
    background_light:'#F4F6FC',
    border: '#E5E9EF',
    lightText: '#9197A6',
    active: '#019A51',
    dark: '#18171C',
    inactiveTab:'#B3B3B3',
    placeHolderColor:'##9a897d',
    textInputBorderColor:'#eeede8',
    text:'rgba(24,7,0)',
    l1:'#bf392a',
    l2:'rgba(211,80,48)',
    l3:'#ff751f',
    errorText:'#f50000',
    white:'#ffffff',
    gradientColor:[
        '#bf392a','#ff751f'
    ]
}

export enum Fonts {
    Regular = 'Okra-Regular',
    Medium = 'Okra-Medium',
    Light = 'Okra-MediumLight',
    SemiBold = 'Okra-Bold',
    Bold = 'Okra-ExtraBold',
}

export const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.003)',
];

export const darkWeatherColors = [
    'rgba(54, 67, 92, 1)',
    'rgba(54, 67, 92, 0.9)',
    'rgba(54, 67, 92, 0.8)',
    'rgba(54, 67, 92, 0.2)',
    'rgba(54, 67, 92, 0.0)',
];