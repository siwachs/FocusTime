import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Countdown from '../components/Countdown';
import RoundedButton from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => {}}
        />
      </View>

      <View style={{ paddingTop: spacing.xxl }}>
      <Text></Text>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15, //Dimnsion Pixel
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Timer;
