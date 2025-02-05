import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routesStack, routesTabs } from "./routes";
import { CharactersScreen } from "@/screens/CharactersScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SettingsScreen } from "@/screens/SettingsScreen";
import { TProfileParams } from "@/types/ProfileScreenTypes";

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
        const { name } = (route.params as TProfileParams) || {};
        return {
          title: name || "Character Profile",
        };
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={routesTabs.CHARACTERS} component={CharacterStack} />
        <Tab.Screen name={routesTabs.SETTINGS} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
