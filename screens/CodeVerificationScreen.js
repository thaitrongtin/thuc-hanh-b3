import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const CodeVerificationScreen = () => {
  const [code, setCode] = React.useState('');

  const handleSubmit = () => {
    // Verify the code and log the user in
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>CODE VERIFICATION</Text>
      <Text style={{fontSize: 16, marginTop: 20}}>
        Enter the code sent to your phone number
      </Text>
      {/* <TextInput
        style={{
          width: 300,
          height: 40,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
        }}
        placeholder="Code"
        value={code}
        onChangeText={text => setCode(text)}
      /> */}
      <Button
        title="VERIFY"
        style={{backgroundColor: '#000', width: 300, height: 40, marginTop: 20}}
      />
    </View>
  );
};

export default CodeVerificationScreen;
