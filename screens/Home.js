import React from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';

const exercises = [
  { name: 'Push-ups', type: 'repetition', suggested: 'Squats' },
  { name: 'Squats', type: 'repetition', suggested: 'Jump Rope' },
  { name: 'Jump Rope', type: 'duration', suggested: 'Push-ups' },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() =>
        navigation.navigate(
          item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise',
          { exercise: item, allExercises: exercises }
        )
      }
      containerStyle={{ marginVertical: 10 }}
    />
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text h3 style={{ textAlign: 'center', marginBottom: 20 }}>Exercise Tracker</Text>
      <FlatList data={exercises} keyExtractor={(item) => item.name} renderItem={renderItem} />
    </View>
  );
}
