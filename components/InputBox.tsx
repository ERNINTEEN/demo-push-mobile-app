import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}
const Input: React.FC<Props> = ({label, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={label}
      />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3F51B5',
    padding: 8,
    flex: 1,
    borderRadius: 5,
  },
});
