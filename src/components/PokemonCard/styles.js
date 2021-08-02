import styled from "styled-components";
import { RFValue } from 'react-native-responsive-fontsize';

export const CardContainer = styled.TouchableOpacity`
  align-items: center;
  width: ${RFValue(100)}px;
  margin: 12px 1% 0px 1%;
  
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};
  border-radius: 8px;
`;

export const PokemonId = styled.Text`
  align-self: flex-end;

  margin-right: ${RFValue(8)}px;
  margin-top: ${RFValue(4)}px;
`;

export const PokemonImage = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(72)}px;
`;

export const PokemonNameBackground = styled.View`
  padding: 4px 8px 4px 8px;
  
  width: 100%;

  border-radius: 7px;
  
  background-color: ${({ theme }) => theme.colors.medium_gray};
`;

export const PokemonName = styled.Text`
  align-self: center;
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;