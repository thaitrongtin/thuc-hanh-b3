/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#C7F4F6',
  };

  return (
    <View style={{backgroundColor: '#C7F4F6'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text
          style={{
            fontSize: 50,
            color: 'black',
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          CODE
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          VERIFICAITON
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={{color: 'black', marginTop: 80, fontWeight: 'bold'}}>
          Enter ontime password sent on
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>+84036432942</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          marginTop: 30,
          margin: 30,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 2,
            borderColor: 'red',
          }}></View>
      </View>

      <View style={{margin: 20}}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#E3C000',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            VERYFI CODE
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: '#C7F4F6', height: '100%'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#C7F4F6',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
