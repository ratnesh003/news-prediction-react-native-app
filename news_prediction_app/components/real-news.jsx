import React from 'react'

import { Check } from 'lucide-react-native';

import { View, Text } from 'react-native'
import styles from '../styles/predictionPage';

const RealNews = () => {
  return (
    <View style={styles.realcontent}>
      <Check color={"#00ff00"} size={"48px"} />
      <Text style={styles.realtext}>
        The News is Real
      </Text>
    </View>
  );
};

export default RealNews;