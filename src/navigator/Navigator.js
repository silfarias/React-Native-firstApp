import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../views/Home";
import { Prueba } from "../views/Prueba";
import { Setting } from "../views/Setting";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Prueba" component={Prueba} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}