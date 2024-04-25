import React from "react";

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { WifiOff } from "lucide-react-native";
import styles from "../../styles/errorPage";

const ErrorPage = () => {
  const params = useLocalSearchParams();
  const { author, title, description } = params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <WifiOff color={"#5a5a5a"} size={48} />
        <Text style={styles.text}>
          Please Enter {!author ? "Author," : ""}
          {!title ? " Title," : ""}
          {!description ? " Description" : ""} to find prediction
        </Text>
      </View>
    </View>
  );
};

export default ErrorPage;
