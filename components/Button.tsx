import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface SendButtonProps {
  onPress: () => void;
  label: string;
}

const SendButton: React.FC<SendButtonProps> = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
});

export {SendButton};
