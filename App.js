import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, SafeAreaView, Platform, Modal, Button, TextInput, KeyboardAvoidingView, Alert, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons
// import AppNavigator from './AppNavigator.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeafCommunityScreen from './DeafCommunityScreen';
import { useNavigation } from '@react-navigation/native';
import LearnSignLanguageScreen from './LearnSignLanguageScreen';

const Stack = createStackNavigator();

const youtubePlaylistLink = 'https://youtube.com/playlist?list=PLMN7QCuj6dfYD8DfG1rN6rEo1b1RyvgKF&si=wqO5-vXNrwSC3fLh';



function HomeScreen() {
  const navigation= useNavigation();
  const [showDescription, setShowDescription] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleYouTubePress = () => {
    Linking.openURL(youtubePlaylistLink);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
  };

  const handleCreateAccount = () => {
    toggleProfileOptions(); // Close profile options modal
    toggleCreateAccountForm(); // Open create account form
  };

  const handleAccountCreation = () => {
    //This Section contains the creating account 
    console.log('Creating account with email:', email, 'and password:', password);
    //For closimg the Create Account form
    toggleCreateAccountForm();
    //Below line shows creating account success alert
    Alert.alert('Account Created', 'Your account has been successfully created!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search Query:', searchQuery);
    // You can implement search logic here, such as filtering data based on the search query
  };

    const handlesign = () => {
    Linking.openURL("https://master--signlanguageconverter.netlify.app/");
  };

  const fetchDataFromAPI = async () => {
    try {
      console.log("idhar api me jaa rha hai")
      const response = await fetch('http://172.20.10.3:5000/process_frame', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Optionally, you can pass your video frame data here
      });
      console.log("idhar bhi aaya api ke baad")
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Convert the response to JSON
      const data = await response.json();
      
      // Use the data returned by the API
      console.log(data);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }
  
  // Call the function to fetch data from the Flask API




  

  return (
    <SafeAreaView style={styles.container}>

      {/* First section: Motionscript title and profile */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.appName}>MotionScript</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleProfileOptions}>
          <Image
            source={require('./profile.png')} 
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>
      {/* Second section: Description */}
      {showDescription && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Motionscript is an app that helps you convert sign language gestures into spoken words. 
            It provides a user-friendly interface for capturing sign language gestures, converting them into text, 
            and providing voice playback of the converted text.
          </Text>
        </View>
      )}

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >

        {/* First section: Demo video on Motion Script */}
        <View>
          <Text style={styles.demotext}>Demo Video On Motion Script</Text>
        </View>

        {/* Second section: YouTube symbol */}
        <View style={styles.youtubeSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Individual video items */}
            <View style={styles.videoItem}>
              <Image
                source={require('./demosign1.jpg')}
                style={styles.videoThumbnail}
              />
              <Text style={styles.videoTitle}>Video Title 1</Text>
            </View>
            <View style={styles.videoItem}>
              <Image
                source={require('./demosign2.jpg')}
                style={styles.videoThumbnail}
              />
              <Text style={styles.videoTitle}>Video Title 2</Text>
            </View>
            <View style={styles.videoItem}>
              <Image
                source={require('./demosign3.jpg')}
                style={styles.videoThumbnail}
              />
              <Text style={styles.videoTitle}>Video Title 3</Text>
            </View>
            {/* Add more video items here */}
          </ScrollView>
        </View>

        {/* Third section: Features */}
        <View>
          <Text style={styles.featurestext}>Features</Text>
        </View>

        {/* Fourth section: Single big image */}
        <View style={styles.imagesSection}>
          <TouchableOpacity style={styles.imageContainer}  onPress={()=>navigation.navigate("DeafCommunity")} >
          <View style={styles.imageContainer}>
            <Image
              source={require('./deaf_community.jpg')} 
              style={styles.bigImage}
            />
            <Text>Learn about deaf community</Text>
          </View>
          </TouchableOpacity>
        </View>

        {/* Fifth section: Single big image */}
        <View style={styles.imagesSection}>
  <TouchableOpacity style={styles.imageContainer} onPress={handlesign}>
    <Image
      source={require('./video3.jpg')} 
      style={styles.bigImage}
    />
    <Text>Sign to Voice converter</Text>
  </TouchableOpacity>
</View>

        {/* Sixth section: Single big image */}
        <View style={styles.imagesSection}>
        <TouchableOpacity style={styles.imageContainer}  onPress={()=>navigation.navigate("LearnSignLanguage")} >
          <View style={styles.imageContainer}>
            <Image
              source={require('./video2.jpg')} 
              style={styles.learnImage}
            />
            <Text>Learn sign language</Text>
          </View>
          </TouchableOpacity>
        </View>
        
        {/* Seventh section: Single big image */}
        <View style={styles.imagesSection}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./video1.jpg')} 
              style={styles.bigImage}
            />
            <Text>Text to Sign language</Text>
          </View>
        </View>
      </ScrollView>
        
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Ionicons name="home-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notifications pressed')}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Settings pressed')}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('More pressed')}>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile options modal */}
      <Modal
        visible={showProfileOptions}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleProfileOptions}
      >
        <View style={styles.modalContainer}>
          <View style={styles.profileOptionsContainer}>
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text style={styles.profileOption}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.profileOption}>Login</Text>
            <Button title="Close" onPress={toggleProfileOptions} />
          </View>
        </View>
      </Modal>

      {/* Create account form */}
      <Modal
        visible={showCreateAccountForm}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleCreateAccountForm}
      >
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={styles.modalContainer}>
            <View style={styles.createAccountContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityButton}>
                  {showPassword ? (
                    <Ionicons name="eye-off" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
              <Button title="Create Account" onPress={handleAccountCreation} />
              <Button title="Cancel" onPress={toggleCreateAccountForm} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      
      {/* Your app content goes here */}
           {/* <AppNavigator /> */}
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DeafCommunity" component={DeafCommunityScreen} />
        <Stack.Screen name="LearnSignLanguage" component={LearnSignLanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  demotext:{
    fontSize:15,
    fontWeight: 'bold',
    paddingLeft:20,
    marginTop:20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  descriptionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionText: {
    fontSize: 16,
  },
  youtubeSection: {
    alignItems: 'center',
    marginTop: 20, 
    height: 200,
    justifyContent:"center",
    paddingHorizontal:20
  },
  youtubeBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtubeIcon: {
    width: 60, 
    height: 60,
  },
  youtubeText: {
    fontSize: 16,
    marginTop: 10, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  profileOptionsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileOption: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  createAccountContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1,
  },
  passwordVisibilityButton: {
    padding: 10,
  },
  imagesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    width:'100%',
    alignItems:"center"
  },
  bigImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  learnImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height:70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'black', // Background color of the navbar
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Border color at the top of the navbar
  },
  videoItem: {
    marginRight: 10,
    width:280,
    height:180
  },
  videoThumbnail: {
    width: 280,
    height: 180,
    borderRadius: 10,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  featurestext:{
    fontSize:15,
    fontWeight: 'bold',
    paddingLeft:40,
    marginTop:20,
  },
})