import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importing FontAwesome5 for icons

const { width } = Dimensions.get('window');

const DeafCommunityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: width * 0.1 }}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Deaf Community</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./sign_langauge.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.sectionTitle}>How do we speak with the 18 million Indians who are deaf?</Text>
          <Text style={styles.sectionContent}>
            India is home to the largest deaf community in the world. If data points by several welfare organisations working for the benefit of the deaf community are to be believed, there are an estimated 18 million deaf people in India. Ayush was born deaf. He can pass off as a regular guy who works at a popular coffee chain, serving coffee and snacks to waiting for customers with a smile. He hides many stories behind that smile and wishes to tell it all, one day. He ponders, 
            <Text style={styles.quoteText}>
              “I don't regret being born deaf, yes there are complexities and challenges I must face on a daily basis but what I actually regret, is not having the infrastructure to tell what I want to say or to prove myself. I just wish someone had the patience to sit with me and talk, instead of looking at me with pity.”
            </Text>
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./indiandeaf_community3.jpg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.sectionTitle}>Culture and Identity</Text>
          <Text style={styles.sectionContent}>
            Deaf culture encompasses various aspects such as shared values, traditions, literature, and arts. Many members of the deaf community view deafness not as a disability but as a unique cultural and linguistic identity.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./indiandeaf_community2.jpeg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.sectionTitle}>Challenges and Advocacy</Text>
          <Text style={styles.sectionContent}>
            Despite significant strides in accessibility and inclusion, deaf individuals still face challenges in areas such as education, employment, and healthcare. Advocacy efforts seek to address these barriers and promote equal opportunities for the deaf community.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./indiandeaf_community.jpeg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.sectionTitle}>Why making Indian Sign Language official is important?</Text>
          <Text style={styles.sectionContent}>
            Till 2012, the deaf community in India used American Sign Language as it did not have its own. The American Sign Language is worldwide accepted as a universal sign language but the Indian community still felt something amiss. {'\n\n'}
            <Text style={styles.highlightedText}>
              Almost every country has its own sign language and we realized that we didn’t have our own even though we have the highest deaf population in the world. We lacked a language that is culturally fitting in our environment, signs that we would be able to relate with.
            </Text>
            {'\n\n'}
            Smriti says, “Like how they would sign mother and father in American Sign Language makes no sense in the Indian context. We have a very different sign for mother and father in Indian Sign Language, something relatable for an Indian user. “I feel language also evolves, and then comes together in a standard form. Language has a lot to do with our culture, where we grow up, they are a reflection of our rituals. There is a huge cultural difference in how we use our hands, gestures in the South India or East India. But the Indian Sign Language thus formed is standard in India--just how we have different accents in every region--similarly there are tweaks in the signs according to regions.” The Indian Sign Language is today used by a large part of the deaf community due to several campaigns by activists and scholars, however, the language does not have an official status in the country. Smriti says, “We have been struggling to make it an official language. We are still waiting for the Indian government to recognise it and make it a part of the languages.” Just like there are different dialects in oral language, sign language has a lot of variations. Unless the Indian Sign Language is made official, one form or structure cannot be mainstreamed. This impacts its further teachings. As a multilingual nation, the government needs to realize the need to officialize Indian Sign Language, for an inclusive growth of the community.
          </Text>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="hands-helping" size={24} color="#4A90E2" />
            <Text style={styles.iconText}>Support the Deaf Community</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    maxWidth: width,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#333333',
  },
  sectionContent: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
    color: '#666666',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
    marginBottom: 10,
  },
  quoteText: {
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    maxWidth: width - 40,
    height: 220,
    borderRadius: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#4A90E2',
  },
});

export default DeafCommunityScreen;