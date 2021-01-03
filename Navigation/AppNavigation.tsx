import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AppStackParamList } from "../Constants/RouteParams";
import Add from "../Screens/Add";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import AnimatedTabBar, { FlashyTabBarItemConfig, TabsConfig } from "@gorhom/animated-tabbar";
import HomeIcon from "../Icons/HomeIcon";
import AddIcon from "../Icons/AddIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import { DARKBLUE, LIGHTBLUE, MIDBLUE } from "../Styles/Colours";

const Tab = createBottomTabNavigator<AppStackParamList>();

export default function AppNavigation() {
    return (
        // @ts-ignore
        <Tab.Navigator tabBar={(props) => <AnimatedTabBar preset="flashy" tabs={tabs} {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "My Trips" }} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const tabs: TabsConfig<FlashyTabBarItemConfig, AppStackParamList> = {
    Home: {
        labelStyle: {
            color: LIGHTBLUE,
        },
        icon: {
            component: HomeIcon,
            color: "rgba(91,55,183,0.5)",
        },
    },
    Add: {
        labelStyle: {
            color: DARKBLUE,
        },
        icon: {
            component: AddIcon,
            color: "rgba(201,55,157,0.5)",
        },
    },
    Profile: {
        labelStyle: {
            color: LIGHTBLUE,
        },
        icon: {
            component: ProfileIcon,
            color: "rgba(230,169,25,0.5)",
        },
    },
};
