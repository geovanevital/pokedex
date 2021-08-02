import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import colorByType from "../../global/styles/colorByType";
import Back from '../../assets/icons/back.png';
import Pokeball from '../../assets/images/pokeballBackground.png';
import Scale from '../../assets/icons/scale.png';
import Rule from '../../assets/icons/rule.png';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  padding: 24px 8px 8px 8px;
  padding-top: ${getStatusBarHeight() + 24}px;
  
  background-color: ${({ theme, type }) => colorByType(type, theme.colors)};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled.Image.attrs({
  source: Back
})`
  margin-left: ${RFValue(8)}px;

  width: ${RFValue(17)}px;
  height: ${RFValue(17)}px;
`;

export const PokemonName = styled.Text`
  margin-left: 20px;
  
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PokemonId = styled.Text`
  margin-right: ${RFValue(8)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PokeballBackground = styled.Image.attrs({
  source: Pokeball
})`
  position: absolute;
  top: ${RFValue(8)}px;
  left: 50%;

  width: ${RFValue(175)}px;
  height: ${RFValue(175)}px;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  top: ${RFValue(80)}px;
  left: 33%;
  z-index: 999;

  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;

export const PokemonInformationsContainer = styled.ScrollView`
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
  
  margin-top: ${RFValue(25)}%;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const LabelsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${RFValue(15)}%;
`;

export const TypeLabelContainer = styled.View`
  padding: 2px 8px 2px 8px;
  margin: 0 8px 0 8px;

  border-radius: 10px;

  background-color: ${({ theme, type }) => colorByType(type, theme.colors)};
`;

export const TypeLabelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const AboutTitle = styled.Text`
  align-self: center;

  margin-top: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => colorByType(type, theme.colors)};
`;

export const InformationContainer = styled.View`
  align-items: center;
`;

export const IconValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonInfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const Separator = styled.View`
  margin: 0 15px 0 15px;

  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.light_gray};
`;

export const InformationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark_gray};
`;

export const InformationLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.medium_gray};
`;

export const ScaleIcon = styled.Image.attrs({
  source: Scale
})`
  margin-right: ${RFValue(8)}px;

  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
`;

export const RuleIcon = styled.Image.attrs({
  source: Rule
})`
  margin-right: ${RFValue(8)}px;

  width: ${RFValue(8)}px;
  height: ${RFValue(16)}px;
`;

export const StatsContainer = styled.View`
  margin: 16px 0 16px 0;
`;

export const BaseStatTitle = styled.Text`
  align-self: center;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, type }) => colorByType(type, theme.colors)};
`;

export const BaseStatLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => colorByType(type, theme.colors)};
`;

export const BaseStat = styled.Text`
  margin-left: 8px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark_gray};
`;

export const BaseStatContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 8px 0 0 12px;
`;
