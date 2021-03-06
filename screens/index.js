import React from "react";
import Screen from "./Screen";
import AddArea from "./Addarea";
import Home from './Home'

export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />;
export const AddAreaScreen = ({ navigation }) => <AddArea navigation={navigation} name="AddArea" />;
// export const ActivityScreen = ({ navigation }) => <Screen navigation={navigation} name="Activity" />;
// export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="Lists" />;
// export const ReportScreen = ({ navigation }) => <Screen navigation={navigation} name="Reports" />;
// export const StatisticScreen = ({ navigation }) => <Screen navigation={navigation} name="Statistics" />;
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="SignOut" />;
export const HomeScreen = ({ navigation }) => <Home navigation={navigation} name="Home" />;
