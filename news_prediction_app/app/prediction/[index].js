import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import React from "react";

import { Text, View } from "react-native";

const PredictionScreen = async () => {

  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Author: {params.index}</Text>
    </View>
  );
};

export default PredictionScreen;