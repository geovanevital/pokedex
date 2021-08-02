import styled from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const StatusBar = styled.StatusBar.attrs((props) => ({
  barStyle: props.type
    ? 'light-content'
    : 'dark-content'
}))`
`;

export const Container = styled.View`
  height: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + 10
    : StatusBar.currentHeight
  }px;
  
  background-color: ${({ theme, type }) => type
    ? colorByType(type, theme.colors)
    : theme.colors.background};
`;