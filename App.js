import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task from './kuan';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (task) {
      if (editingIndex !== null) {
        let itemsCopy = [...taskItems];
        itemsCopy[editingIndex] = task;
        setTaskItems(itemsCopy);
        setEditingIndex(null);
      } else {
        setTaskItems([...taskItems, task]);
      }
      setTask('');
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleEditTask = (index) => {
    if (editingIndex !== null) {
      let itemsCopy = [...taskItems];
      itemsCopy[editingIndex] = task;
      setTaskItems(itemsCopy);
      setEditingIndex(null);
    } else {
      setTask(taskItems[index]);
      setEditingIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.Title}>omcm.list</Text>
        <Text style={styles.desc}>
          A simple to-do-list program that can add, edit, and delete tasks. Tap the item to delete.
        </Text>
        <Text style={styles.boxgradientkuno}>.</Text>
        <ScrollView style={styles.itemsContainer}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} onEdit={() => handleEditTask(index)} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{ flex: 1 }}
        style={styles.addsomethingbox}
      >
        <TextInput
          style={styles.input}
          placeholder={'Add Something...'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addboxSettings}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc6c85',
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  taskWrapper: {
    paddingTop: 5,
  },
  Title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    color: 'white',
  },
  boxgradientkuno: {
    backgroundColor: '#e63d4d',
    position: 'absolute',
    marginTop: 160,
    marginLeft: -30,
    width: 500,
    height: 1000,
  },
  itemsContainer: {
    bottom:0,
    marginTop: 80,
    maxHeight: 999,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 250,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  addsomethingbox: {
    marginLeft: 18,
    position: 'absolute',
    top: 170,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addboxSettings: {
    width: 60,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'black',
  },
});
