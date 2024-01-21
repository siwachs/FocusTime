import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';
import colors from '../utils/colors';
import { spacing } from '../utils/sizes';

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={subject}
          onChangeText={(text) => setSubject(text)}
          label="What would you like to focus on?"
        />
        <RoundedButton
          title="+"
          size={42}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xxl,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    height: 50,
    marginRight: spacing.md,
  },
});

export default Focus;
