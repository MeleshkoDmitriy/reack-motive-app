import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routesStack, routesTabs } from "./routes";
import { CharactersScreen } from "@/screens/CharactersScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SettingsScreen } from "@/screens/SettingsScreen";
import { TProfileParams } from "@/types/ProfileScreenTypes";
import { styleVariables } from "@/styles/variables";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        const { name } = route.params as TProfileParams;
        return {
          title: name || "Character Profile",
          headerStyle: {
            backgroundColor: styleVariables.colors.secondaryDark,
          },
          headerTintColor: styleVariables.colors.white,
          headerTitleStyle: {
            color: styleVariables.colors.primary,
            fontWeight: "bold",
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
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: styleVariables.colors.primary,
          tabBarInactiveTintColor: styleVariables.colors.secondaryDark,
          tabBarStyle: {
            backgroundColor: styleVariables.colors.secondaryLight,
            borderTopColor: styleVariables.colors.primary,
          },
        }}
      >
        <Tab.Screen
          name={routesTabs.CHARACTERS}
          component={CharacterStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto
                name="persons"
                size={size}
                color={color}
                style={{ marginTop: 15, paddingBottom: 30 }}
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
                style={{ marginTop: 15, paddingBottom: 30 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};