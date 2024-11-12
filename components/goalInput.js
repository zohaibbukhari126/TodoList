import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
import App from "../App";

export default function GoalInput(props) {
    const [inputGoals, setInputGoals] = useState('');

    const enterGoal = (inputGoals) => {
        setInputGoals(inputGoals);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    placeholderTextColor="#8a8a8a"
                    onChangeText={enterGoal}
                    value={inputGoals}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={() => {
                        if (inputGoals.trim().length === 0) {
                            alert("Please enter a goal before adding.");
                            return;
                        }
                        props.OnAddGoal(inputGoals);

                        // Reset the input field to empty when the goal is added
                        // so you don't have to manually remove the already written text
                        setInputGoals('');
                    }} color="#72DDF7" />
                    <Button title='CANCEL' color='red' onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        backgroundColor: '#1c1c1c',
        padding: 20,
    },
    input: {
        width: '80%', // Center input field with a controlled width
        borderColor: '#72DDF7',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        color: '#ffffff',
        backgroundColor: '#333333',
        marginBottom: 20, // Spacing below input field
    },
    buttonContainer: {
        flexDirection: 'row', // Align buttons side by side
        justifyContent: 'space-between', // Space out the buttons
        width: '60%', // Control width for better button alignment
    },
});
