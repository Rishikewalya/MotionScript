import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const videos = [
  {
    id: 'video1',
    title: 'Learn ASL letters A to Z',
    thumbnail: require('./LearnAtoZ.jpg'),
    link: 'https://youtu.be/cGavOVNDj1s?si=p-z4EbjEwm6AjZQV',
  },
  {
    id: 'video2',
    title: 'Basic Sign Language Phrases in ASL',
    thumbnail: require('./25ASLPhrases.jpg'),
    link: 'https://youtu.be/3or8QRuQXhI?si=ADyqrg4LlhhwAuTf',
  },
  {
    id: 'video3',
    title: 'Learn Colors in ASL',
    thumbnail: require('./LearnColors.jpg'),
    link: 'https://youtu.be/U9KnRdcWL7Y?si=9TEN0GYXzBELhEhe',
  },
  {
    id: 'video4',
    title: 'ASL Sentence Structure',
    thumbnail: require('./ASLSentence.jpg'),
    link: 'https://youtu.be/fDV9Al8Fgjk?si=Lt_fD_DFX2pwwIop',
  },
  {
    id: 'video5',
    title: 'Greetings and Farewell in ASL',
    thumbnail: require('./GreetASL.jpg'),
    link: 'https://youtu.be/y9Rj_X0IsKY?si=vSllk7XNG-o6foGe',
  },
];


const LearnSignLanguageScreen = () => {
  const navigation = useNavigation();

  const handleVideoPress = (link) => {
    // Open YouTube video link using Linking
    Linking.openURL(link).catch((err) => {
      console.error('Failed to open link:', err);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.videoList}>
        {videos.map((video) => (
          <TouchableOpacity 
            key={video.id} 
            style={styles.videoItem} 
            onPress={() => handleVideoPress(video.link)}
          >
            <Image 
              source={video.thumbnail} 
              style={styles.videoThumbnail} 
            />
            <Text style={styles.videoTitle}>{video.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoList: {
    padding: 20,
  },
  videoItem: {
    marginBottom: 20,
  },
  videoThumbnail: {
    width: '100%',
    height: 200,  // Adjust the height as needed
    borderRadius: 10,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LearnSignLanguageScreen;
