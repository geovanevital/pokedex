import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pokedex } from './screens/Pokedex';
import { PokemonDetails } from './screens/PokemonDetails';
import routes from './navigation/routes';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.pokedex} component={Pokedex} />
      <Stack.Screen name={routes.pokemonDetails} component={PokemonDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
