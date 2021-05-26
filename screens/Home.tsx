import React, { useState, useEffect } from "react";
import { View, ImageBackground, StatusBar, Text } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
// import data from "../assets/data/demo";
import firebase from "../firebase.config"
import { DataT } from "../types";
require("firebase/firestore");

const db = firebase.firestore();
const IMAGE_01 = "https://gonatour.vn/vnt_upload/news/05_2020/hinh_anh_cac_dia_danh_tren_dong_tien_viet_nam_1.jpg";

const Home = () =>  {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [data, setData] = useState<DataT[]>
    ([
      {
        id: 1,
        name: "Loading...",
        isOnline: true,
        match: "100",
        description:
          "Loading...",
        message:
          "",
        image: IMAGE_01,
      },
    ])

  useEffect(()=>{
                  db.collection('users')
                  .onSnapshot((snapshot)=>setData(snapshot.docs.map((doc)=>doc.data())))
                },[])


  return (
    <View>
      <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>
        <CardStack
          loop
          verticalSwipe={true}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
          onSwipedLeft={()=>console.log("left")}
          onSwipedRight={()=>console.log("Right")}
          onSwipedTop={()=>console.log("Top")}
          onSwipedBottom={()=>console.log("Bottom")}
          >
          {
            data.map((abc) =>
             <Card key={abc.id}>
             <CardItem
              hasActions
              image={abc.image}
              name={abc.name}
              description={abc.description}
              matches={abc.match}
             />
            </Card>)
           }
         </CardStack>
      </View>
    </View>
  );
};
export default Home;
