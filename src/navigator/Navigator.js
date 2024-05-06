import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../views/Home";
import { User } from "../views/User";
import { Setting } from "../views/Setting";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "#e91e63" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
