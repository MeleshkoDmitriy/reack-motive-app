import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routesStack, routesTabs } from "./routes";
import { CharactersScreen } from "@/screens/CharactersScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SettingsScreen } from "@/screens/SettingsScreen";
import { styleVariables } from "@/styles/variables";
import { Ionicons } from "@expo/vector-icons";
import { tabsStyles } from "@/styles/styles";
import { TCharacter } from "@/types/CharacterTypes";
import { FavoritesScreen } from "@/screens/FavoritesScreen";

export type CharacterStackParamList = {
  CHARACTERS: undefined;
  PROFILE: TCharacter;
};

const Stack = createNativeStackNavigator();

const CharacterStack = () => (
  <Stack.Navigator initialRouteName={routesStack.CHARACTERS}>
    <Stack.Screen
      name={routesStack.CHARACTERS}
      component={CharactersScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routesStack.PROFILE}
      component={ProfileScreen}
      options={({ route }) => {
        const { name } = route.params as TCharacter;
        return {
          title: name || "Character Profile",
          headerTintColor: styleVariables.colors.white,
          headerTitleStyle: {
            color: styleVariables.colors.white,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: styleVariables.colors.primary,
          },
        };
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={routesTabs.CHARACTERS}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: styleVariables.colors.white,
          tabBarInactiveTintColor: styleVariables.colors.secondaryDark,
          tabBarStyle: {
            backgroundColor: styleVariables.colors.primary,
            borderTopColor: styleVariables.colors.primary,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: styleVariables.colors.white,
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: styleVariables.colors.primary,
          },
        }}
      >
        <Tab.Screen
          name={routesTabs.FAVORITES}
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="heart"
                size={size}
                color={color}
                style={tabsStyles}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routesTabs.CHARACTERS}
          component={CharacterStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="people"
                size={size}
                color={color}
                style={tabsStyles}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routesTabs.SETTINGS}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="settings"
                size={size}
                color={color}
                style={tabsStyles}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
