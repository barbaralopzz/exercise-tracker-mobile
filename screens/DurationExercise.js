import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function DurationExercise({ route, navigation }) {
  const { exercise, allExercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const suggested = allExercises.find(e => e.name === exercise.suggested);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text h4 style={{ textAlign: 'center' }}>{exercise.name}</Text>
      <Text style={{ fontSize: 28, textAlign: 'center', marginVertical: 20 }}>{seconds} seconds</Text>

      <Button title={running ? "Pause" : "Start"} onPress={() => setRunning(!running)} />
      <Button title="Reset" onPress={() => { setRunning(false); setSeconds(0); }} containerStyle={{ marginTop: 10 }} />
      <Button
        title={`Go to Suggested: ${suggested.name}`}
        onPress={() => navigation.push(
          suggested.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise',
          { exercise: suggested, allExercises }
        )}
        containerStyle={{ marginTop: 10 }}
      />
      <Button title="Back to Home" onPress={() => navigation.popToTop()} containerStyle={{ marginTop: 10 }} />
    </View>
  );
}
