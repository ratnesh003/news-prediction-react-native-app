import React from "react";

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import FakeNews from "../../components/fake-news";
import RealNews from "../../components/real-news";
import styles from "../../styles/predictionPage";

const PredictionScreen = () => {
  const param = useLocalSearchParams();
  const { result } = param

  return (
    <View style={styles.container}>
      {result === "1" ? <FakeNews />: <RealNews />}
    </View>
  );
};

export default PredictionScreen;