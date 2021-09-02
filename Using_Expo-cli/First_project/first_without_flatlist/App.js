import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, TextInput, ScrollView} from 'react-native';
export default function App() {

  const[entered_text,set_text]=useState('')
  const[existing_items, set_item]=useState([])

  const text_handler =(entered_text)=>{
    set_text(entered_text);
  }
  const button_handler=()=>{
    set_item(existing_items=>[...existing_items,entered_text])
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TextInput placeholder="Enter here...!!!!!!" style={styles.container2} onChangeText={text_handler} />
          <Button title="add" onPress={button_handler} />
        </View>
        <View>
        {existing_items.map((item)=>
        <View key={Math.random().toString()} style={styles.itemlist}>
          <Text>{item}</Text>
        </View>
        )}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:90
  },
  container2:
  {padding: 10, 
    borderColor: 'black', 
    borderWidth:2
  },
    itemlist:{
      padding:10,
      backgroundColor:"#ccc",
      marginVertical:1,
      borderColor:'black',
      borderWidth:1,
    }
});
