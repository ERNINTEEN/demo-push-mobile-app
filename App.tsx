import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Alert} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import {Input} from './components/InputBox';
import {SendButton} from './components/Button';
import TokenText from './components/Text';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (!enabled) {
    console.warn('Authorization status:', authStatus);
  }
}

const getCAIPAddress = (ethAddress: string) => {
  return `eip155:${ethAddress}`;
};

const platform = Platform.OS;

const App = () => {
  const [deviceToken, setDeviceToken] = useState('');
  const [nodeURL, setNodeURL] = useState('https://delivery-staging.epns.io');
  const [wallet, setWallet] = useState('');

  const setInfo = async () => {
    const endpoint = `${nodeURL}/apis/v1/pushtokens/register`;
    const body = JSON.stringify({
      device_token: deviceToken,
      wallet: getCAIPAddress(wallet),
      platform: platform,
    });

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    }).catch(err => {
      Alert.alert('Error', err);
      console.log(err);
    });

    console.log('reg got success ✅', res);
    Alert.alert('', 'Device token successfully registered');
  };

  // request notification permission
  useEffect(() => {
    (async () => {
      await requestUserPermission();
    })();
  }, []);

  // handle incoming message
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // device token
  useEffect(() => {
    (async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      setDeviceToken(token);
      console.log('device token', token);
    })();
  }, []);

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.header}>Demo App</Text>
        <TokenText text={deviceToken} />
        <View style={style.divider} />
        <Input
          label="Enter wallet address"
          onChangeText={setWallet}
          value={wallet}
        />
        <View style={style.divider} />
        <Input
          label="Enter delivery node url"
          onChangeText={setNodeURL}
          value={nodeURL}
        />
        <View style={style.divider} />
        <SendButton label="Submit" onPress={setInfo} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {paddingHorizontal: 20},
  header: {marginVertical: '30%', fontSize: 28, textAlign: 'center'},
  divider: {padding: 6},
});

export default App;
