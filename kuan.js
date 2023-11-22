import react from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.listBox}>
      <View style={styles.textArrange}>
        <Text style={styles.listText}>{props.text}</Text>
        {props.onEdit && (
          <TouchableOpacity onPress={props.onEdit}>
            <Text style={styles.editButton}>(edit)</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    listBox:{
        backgroundColor: '#fc6c85',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: -10,
        marginTop:30,
    },
    editButton: {
        color: 'white',
        marginLeft: 10,
    },
    textArrange:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        color:'red',
    }, 
    listText:{
        maxWidth: '80&',
        color:'white'
             
    },
});

export default Task;
