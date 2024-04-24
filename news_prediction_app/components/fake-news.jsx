import React from 'react'

import { Ban } from 'lucide-react-native';

import { View, Text } from 'react-native'
import styles from '../styles/predictionPage';

const FakeNews = () => {
  return (
    <View style={styles.fakecontent}>
      <Ban color={"#ff0000"} size={"48px"}/>
      <Text style={styles.faketext}>
        The News is Fake
      </Text>
    </View>
  );
};

export default FakeNews;