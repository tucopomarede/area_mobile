import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AppRegistry, Image, Animated, ScrollView } from 'react-native';

export default class AddArea extends React.Component {

    constructor() {
        super();
    
        this.state = { valueArray: [], disabled: false }
        this.index = 0;
        this.animatedValue = new Animated.Value(0);
    }

    addMore = () => {
        console.log("addMore Call ----")
        this.animatedValue.setValue(0);
        let newlyAddedValue = { index: this.index }
        this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start(() => {
                this.index = this.index + 1;
                this.setState({ disabled: false });
            });
        });
    }


    checkPlusContact = () => {
        console.log('ok')
    }


    render() {
        const animationValue = this.animatedValue.interpolate(
            {
              inputRange: [0, 1],
              outputRange: [-59, 0]
            });

          let newArray = this.state.valueArray.map((item, key) => {

              return (
                <View>
                    <View key={key} style={styles.twitchButton}>
                    <ImageBackground
                    resizeMode={'contain'} // or cover
                    style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                    source={require('../assets/twitch_icon.png')}>
                        <Text style={styles.textButton}>Suscribe to twitch service</Text>
                        </ImageBackground>
                    </View>
                    {/* <View key={key+1} style={styles.twitchButton}>
                    <ImageBackground
                    resizeMode={'contain'} // or cover
                    style={{ flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                    source={require('../assets/twitch_icon.png')}>
                        <Text style={styles.textButton}>Twitch 'streamer' just started live</Text>
                        <Text style={styles.textButton}>Send notification to ...</Text>
                        </ImageBackground>
                    </View> */}
                    <View key={key+2} style={styles.twitchButton}>
                    <ImageBackground
                    resizeMode={'contain'} // or cover
                    style={{ flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                    source={require('../assets/yammer_icon.png')}>
                        <Text style={styles.textButton}>Subscribe to yammer service</Text>
                        </ImageBackground>
                    </View>
                </View>
              );
          });
        return (
            
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}>Welcome to Add AREA Screen</Text>
                        <Text style={styles.subText}>Click "+" icon to choose wich service you want to add</Text>
                    </View>
                    <TouchableOpacity style={styles.plusButton}
                        onPress={this.addMore}
                    >
                        <FontAwesome5 name="plus" size={24} color="#161924" />
                    </TouchableOpacity>
                </SafeAreaView>
                <ScrollView style={{ height: 200 }}>
                    <View style={{ flex: 1, padding: 4 }}>
                        {
                        newArray
                        }
                    </View>
                </ScrollView>

                <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} disabled={this.state.disabled} onPress={this.addMore}>
                    {/* <Image source={require('../assets/addButton.png')} style={styles.buttonImage} /> */}
                </TouchableOpacity>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontWeight: 'bold',
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    textButton: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    plusButton: {
        borderRadius: 5,
        borderWidth: 3,
        width: 60,
        alignItems: "center",
        marginTop: 20,
        marginLeft: 150
    },
    subText: {
        color: "#807776",
        fontSize: 13,
        fontWeight: "500"
    },
    viewHolder: {
      height: 55,
      backgroundColor: '#ff4081',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4
    },
    timeButton: {
        borderRadius: 10,
        height: 55,
        backgroundColor: '#A5A5A5',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
    twitchButton: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
        height: 55,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
    headerText: {
      color: 'black',
      fontSize: 25
    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    }
});
