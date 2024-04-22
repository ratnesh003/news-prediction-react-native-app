import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import React from 'react'

import { Text } from 'react-native'

const PredictionScreen = () => {
    const params = useLocalSearchParams();
    const { author } = params;

  return (
    <Text>This I Print: {JSON.stringify(author)}</Text>
  )
}

export default PredictionScreen