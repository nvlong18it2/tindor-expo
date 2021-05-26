import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  age,
  image,
  info1,
  info2,
  info3,
  info4,
  location,
  match,
  name,
  setLogin
}: ProfileItemT) => (
  <ImageBackground
  source={require("../assets/images/bg.png")}
  style={styles.bg}
>
  <ScrollView style={styles.containerProfile}>
    <ImageBackground source={{uri:image,}} style={styles.photo}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Icon
            name="chevron-back"
            size={20}
            color={WHITE}
            style={styles.topIconLeft}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setLogin(false)}}>
          <Icon
            name="ellipsis-vertical"
            size={20}
            color={WHITE}
            style={styles.topIconRight}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>

    <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="heart" size={13} color={WHITE} /> {match}% Match!
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="pizza" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="airplane" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info3}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="calendar" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info4}</Text>
    </View>
</View>

    <View style={styles.actionsProfile}>
      <TouchableOpacity style={styles.circledButton}>
        <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.roundedButton}>
        <Icon name="chatbubble" size={20} color={WHITE} />
        <Text style={styles.textButton}>Start chatting</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
</ImageBackground>
);
export default ProfileItem;
