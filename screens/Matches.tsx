import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import firebase from "../firebase.config"
require("firebase/firestore");
const db = firebase.firestore();

function Matches(){
  const [data, setData] = useState([]);

     db.collection('users')
     .onSnapshot(function(snapshot)
      {setData(snapshot.docs.map((doc)=>doc.data()))
     }    
     )

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>
  
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardItem
                image={item.image}
                name={item.name}
                isOnline={item.isOnline}
                hasVariant
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default Matches;
