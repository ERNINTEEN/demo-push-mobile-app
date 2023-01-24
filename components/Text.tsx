import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface TokenTextProps {
  text: string;
}

const getTrimmedText = (text: string): string => {
  const len = text.length;
  const num = 10;
  return len > 20 ? `${text.slice(0, num)}.....${text.slice(len - num)}` : text;
};

const TokenText: React.FC<TokenTextProps> = ({text}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPress = () => {
    console.log('pressing');
    Clipboard.setString(text);
    setIsCopied(true);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 16}]}>Token:</Text>
      <Text style={styles.text}>{getTrimmedText(text)}</Text>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopyPress}>
        <Text style={styles.copyButtonText}>
          {isCopied ? 'Copied' : 'Copy'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyButton: {
    backgroundColor: '#4da6ff',
    borderRadius: 5,
  },
  copyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    width: 70,
    textAlign: 'center',
    paddingVertical: 6,
  },
});

export default TokenText;
