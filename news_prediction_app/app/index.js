import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight, Newspaper } from 'lucide-react-native';

import styles from '../styles/homePage';
import { fetchPrediction } from '../action/prediction';

export default function MyForm() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async () => {
    const data = {
      Author: author,
      Title: title,
      Description: description
    }

    const result = await fetchPrediction(data);
    router.push({ pathname: "/prediction", params:{ result } });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Text style={styles.appTitle}>
        News Prediction App
      </Text>
      <View style={styles.container}>
        <Newspaper color="#333" size={40} style={{
          marginBottom: 20,
        }} />
        <TextInput
          style={styles.input}
          placeholder="Author"
          onChangeText={text => setAuthor(text)}
          value={author}
        />
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={text => setDescription(text)}
          value={description}
        />
        <Pressable
          title="Submit"
          onPress={handleSubmit}
          style={styles.buttonWraper}
        >
          <View style={styles.buttonText}>
            <Text>
              Predict
            </Text>
            <ChevronRight size={16} color="#555" />
          </View>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};