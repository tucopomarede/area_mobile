import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
    ProfileScreen,
    AddAreaScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    SignOutScreen, HomeScreen
} from "./screens";

import SideBar from "./components/SideBar";

const DrawerNavigator = createDrawerNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Home",
                drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
            }
        },
        AddArea: {
            screen: AddAreaScreen,
            navigationOptions: {
                title: "Add Area",
                drawerIcon: ({ tintColor }) => <Feather name="plus" size={16} color={tintColor} />
            }
        },
        // Activity: {
        //     screen: ActivityScreen,
        //     navigationOptions: {
        //         drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
        //     }
        // },
        // List: {
        //     screen: ListScreen,
        //     navigationOptions: {
        //         title: "Lists",
        //         drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
        //     }
        // },
        // Report: {
        //     screen: ReportScreen,
        //     navigationOptions: {
        //         title: "Reports",
        //         drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
        //     }
        // },
        // Statistic: {
        //     screen: StatisticScreen,
        //     navigationOptions: {
        //         title: "Statistics",
        //         drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
        //     }
        // },
        SignOut: {
            screen: SignOutScreen,
            navigationOptions: {
                title: "Sign Out",
                drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
            }
        }
    },
    {
        contentComponent: props => <SideBar {...props} />,

        drawerWidth: Dimensions.get("window").width * 0.85,
        hideStatusBar: true,

        contentOptions: {
            activeBackgroundColor: "rgba(212,118,207, 0.2)",
            activeTintColor: "#53115B",
            itemsContainerStyle: {
                marginTop: 16,
                marginHorizontal: 8
            },
            itemStyle: {
                borderRadius: 4
            }
        }
    }
);

export default createAppContainer(DrawerNavigator);
