import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";



export default function GoalItem(props) {
  return (
    <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}
     style={styles.goalItem}>
      <Text style={styles.goalText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#2D2D2D',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#72DDF7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  goalText: {
    color: '#ffffff',
    fontSize: 16,
  },
})