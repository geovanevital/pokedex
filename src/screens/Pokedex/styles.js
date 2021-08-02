import styled from 'styled-components';
import Pokeball from '../../assets/icons/pokeball.png';
import Search from '../../assets/icons/search.png';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  padding: 24px 16px 0 16px;

  background-color: ${({ theme }) => theme.colors.background};
  opacity: ${({ loading }) => loading ? 0.8 : 1};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PokeballIcon = styled.Image.attrs({
  source: Pokeball
})`
  padding: 0 8px 0 8px;
  margin-right: ${RFValue(16)}px;

  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px 8px 4px 8px;
  margin-top: ${RFValue(8)}px;

  border: 1px solid ${({ theme }) => theme.colors.light_gray};
  border-radius: 8px;
`;

export const SearchIcon = styled.Image.attrs({
  source: Search
})`
  position: absolute;
  left: 0;
  
  margin-left: ${RFValue(8)}px;

  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.medium_gray,
}))`
  flex: 1;

  padding-left: ${RFValue(20)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.medium_gray};
`;

export const PokemonListContainer = styled.View`
  flex: 1;
  align-items: center;

  margin-top: 8px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large'
})`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const NotFound = styled.Text`
  margin-top: ${RFValue(20)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.dark_gray};
`;