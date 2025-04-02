import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, allExercises } = route.params;
  const [count, setCount] = useState(0);

  const suggested = allExercises.find(e => e.name === exercise.suggested);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text h4 style={{ textAlign: 'center' }}>{exercise.name}</Text>
      <Text style={{ fontSize: 28, textAlign: 'center', marginVertical: 20 }}>{count} reps</Text>

      <Button title="Add Rep" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} containerStyle={{ marginTop: 10 }} />
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
