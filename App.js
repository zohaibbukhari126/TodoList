import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';


export default function App() {

  const [addGoal, setaddGoal] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);


  // for Scroll view without Flatlist
  // const goalList = () => {
  //   setaddGoal(currentgoal => [...currentgoal, inputGoals]);
  // }

  const goalList = goalTitle => {
    setaddGoal(currentgoal => [...currentgoal, { id: Math.random().toString(), value: goalTitle }]);
    setisAddMode(false);
  }

  const removeGoal = (goalId) => {
    setaddGoal(currentgoal => {
      return currentgoal.filter((goal) => goal.id !== goalId);
    })
  }




  return (
    <View style={styles.container}>

      <StatusBar style="light" />
      <Button title='Add Goal' onPress={() => setisAddMode(true)} />
      <GoalInput visible={isAddMode} OnAddGoal={goalList} onCancel={() => setisAddMode(false)} />
      <FlatList
        style={styles.goalContainer}
        keyExtractor={(item, data) => item.id}
        data={addGoal}
        renderItem={itemData => (<GoalItem

          id={itemData.item.id}
          onDelete={removeGoal}
          title={itemData.item.value} />)}
      />


      {/* {addGoal.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
      ))} */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  goalContainer: {
    marginTop: 20,
  },

});