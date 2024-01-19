import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import colors from '../utils/colors';

const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const [millis, setMillis] = useState(minutes * 60 * 1000);
  const intervalRef = useRef();

  useEffect(() => {
    setMillis(minutes * 60 * 1000);
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / (minutes * 60 * 1000));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setMillis((time) => {
        if (time === 0) {
          clearInterval(intervalRef.current);
          onEnd();
          return 0;
        }
        return time - 1000;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]); // Intervals exe a function after a current time interval (1000ms).

  const formattedTime = (time) => (time < 10 ? `0${time}` : time);

  const minutesLeft = Math.floor(millis / 1000 / 60);
  const secondsLeft = Math.floor((millis / 1000) % 60);

  return (
    <Text style={styles.text}>
      {formattedTime(minutesLeft)}:{formattedTime(secondsLeft)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});

export default Countdown;
