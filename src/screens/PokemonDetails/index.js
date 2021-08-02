import React from 'react';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StatusBar } from '../../components/StatusBar/styles';
import {
  Container,
  HeaderContainer,
  BackButton,
  BackIcon,
  PokemonName,
  PokemonId,
  PokeballBackground,
  PokemonImage,
  PokemonInformationsContainer,
  LabelsContainer,
  TypeLabelContainer,
  TypeLabelText,
  AboutTitle,
  IconValueContainer,
  InformationContainer,
  ScaleIcon,
  InformationText,
  InformationLabel,
  RuleIcon,
  PokemonInfoContainer,
  Separator,
  StatsContainer,
  BaseStatTitle,
  BaseStatContainer,
  BaseStatLabel,
  BaseStat
} from './styles';

export function PokemonDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { pokemonDetails } = useSelector(({ pokemonReducer }) => pokemonReducer);
  const pokemonName = route?.params?.pokemonName;
  const pokemonId = route?.params?.pokemonId;
  const pokemonImageUrl = route?.params?.pokemonImageUrl;
  const type = pokemonDetails?.types[0]?.type?.name;
  const weight = pokemonDetails?.weight / 10;
  const height = pokemonDetails?.height / 10;
  const move1 = pokemonDetails?.moves[0]?.move?.name;
  const move2 = pokemonDetails?.moves[1]?.move?.name;
  const hp = pokemonDetails?.stats[0].base_stat;
  const attack = pokemonDetails?.stats[1].base_stat;
  const defense = pokemonDetails?.stats[2].base_stat;
  const specialAttack = pokemonDetails?.stats[3].base_stat;
  const specialDefense = pokemonDetails?.stats[4].base_stat;
  const speed = pokemonDetails?.stats[5].base_stat;
  const stats = [
    { label: 'HP', stat: hp },
    { label: 'Attack', stat: attack },
    { label: 'Defense', stat: defense },
    { label: 'Special Attack', stat: specialAttack },
    { label: 'Special Defense', stat: specialDefense },
    { label: 'Speed', stat: speed },
  ];

  const goBack = () => {
    navigation.goBack();
  };

  const TypeLabel = () => (
    <LabelsContainer>
      {
        pokemonDetails?.types?.map((pokemon, index) => {
          return (
            <TypeLabelContainer
              key={index}
              type={pokemon.type.name}
            >
              <TypeLabelText>
                {pokemon.type.name}
              </TypeLabelText>
            </TypeLabelContainer>
          );
        })
      }
    </LabelsContainer>
  );

  const Stats = () => (
    <StatsContainer>
      <BaseStatTitle type={type}>
        Base Stats
      </BaseStatTitle>
      {
        stats.map((stat, index) => {
          return (
            <BaseStatContainer key={index}>
              <BaseStatLabel type={type}>
                {stat.label}
              </BaseStatLabel>
              <BaseStat key={index}>
                {stat.stat}
              </BaseStat>
            </BaseStatContainer>
          );
        })
      }
    </StatsContainer>
  );

  return (
    <Container type={type}>
      <StatusBar type={type} />
      <HeaderContainer>
        <BackButton onPress={goBack}>
          <BackIcon />
        </BackButton>
        <PokemonName>
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </PokemonName>
        <PokemonId>
          {`#${pokemonId}`}
        </PokemonId>
      </HeaderContainer>
      <PokeballBackground />
      <PokemonImage
        source={{ uri: pokemonImageUrl }}
      />
      <PokemonInformationsContainer>
        <TypeLabel />
        <AboutTitle type={type}>
          About
        </AboutTitle>
        <PokemonInfoContainer>
          <InformationContainer>
            <IconValueContainer>
              <ScaleIcon />
              <InformationText>
                {`${weight} kg`}
              </InformationText>
            </IconValueContainer>
            <InformationLabel>
              Weight
            </InformationLabel>
          </InformationContainer>
          <Separator />
          <InformationContainer>
            <IconValueContainer>
              <RuleIcon />
              <InformationText>
                {`${height} m`}
              </InformationText>
            </IconValueContainer>
            <InformationLabel>
              Height
            </InformationLabel>
          </InformationContainer>
        </PokemonInfoContainer>
        <InformationContainer>
          <IconValueContainer>
            <InformationText>
              {move1.charAt(0).toUpperCase() + move1.slice(1)}
            </InformationText>
            <InformationText>
              {` | ${move2.charAt(0).toUpperCase() + move2.slice(1)}`}
            </InformationText>
          </IconValueContainer>
          <InformationLabel>
            Moves
          </InformationLabel>
        </InformationContainer>
        <Stats />
      </PokemonInformationsContainer>
    </Container>
  )
}