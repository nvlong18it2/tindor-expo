import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const Filters = () => (
  <TouchableOpacity style={styles.filters}>
    <Text style={styles.filtersText}>
      <Icon name="search" size={13} color={DARK_GRAY} /> Search
    </Text>
  </TouchableOpacity>
);

export default Filters;
