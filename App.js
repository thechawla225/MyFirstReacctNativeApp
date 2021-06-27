import React, { Component } from "react";

import icon from "./assets/icon.png";
import blue from "./assets/blue.png";
import red from "./assets/red.png";
import green from "./assets/green.png";
import yellow from "./assets/yellow.png";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

import Carousel from "react-native-snap-carousel";

class App extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "Tab 1",
      },
      {
        id: 2,
        name: "Tab 2",
      },
      {
        id: 3,
        name: "Tab 3",
      },
      {
        id: 4,
        name: "Tab 4",
      },
      {
        id: 5,
        name: "Tab 5",
      },
    ],
    cards: [
      {
        image: yellow,
        id: 1,
        title: "walking like a king down the hallways",
      },
      {
        image: blue,
        id: 2,
        title: "blue oil paint",
      },
      {
        image: green,
        id: 3,
        title: "green artist paint",
      },
      {
        image: red,
        id: 4,
        title: "red blood",
      },
    ],
  };

  _renderItem({ item, index }) {
    return (
      <View style={{ width: 300, height: 415 }}>
        <ImageBackground
          source={item.image}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          style={{ paddingTop: StatusBar.currentHeight, paddingHorizontal: 15 }}
        >
          <View style={{ paddinTop: 24 }}>
            <View
              style={{
                paddingTop: 12,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                AWESOME PROJECT
              </Text>
              <View>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 40 / 2,
                    borderColor: "red",
                    borderWidth: 2,
                  }}
                />
              </View>
            </View>
            <ScrollView
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ paddingTop: 30 }}
            >
              <View style={{ paddinTop: 10, flexDirection: "row" }}>
                {this.state.categories.map((category) => (
                  <View
                    style={{
                      height: 32,
                      width: 89,
                      borderColor: "black",
                      borderRadius: 10,
                      borderWidth: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 5,
                    }}
                  >
                    <Text style={{ justifyContent: "center", fontSize: 17 }}>
                      {category.name}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={{ paddingTop: 35 }}>
              <View>
                <Carousel
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  renderItem={this._renderItem}
                  sliderWidth={350}
                  itemWidth={350}
                  layout={"stack"}
                  data={this.state.cards}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 292,
    height: 411,
    borderRadius: 15,
  },
});
