import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View, FlatList} from 'react-native';
const App = () => {
  const [data, setData] = useState([]);
  const call = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(result => {
        setData(result);
      })
      .catch(err => {
        Alert.alert('Error', String(err));
        console.log(err);
      });
  };
  useEffect(() => {
    call();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'orange',
        height: '90%',
      }}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>USERS</Text>
      <FlatList
        data={data}
        key={1}
        renderItem={({item}) => {
          return (
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: 25,
                //borderRadius: 30,
                borderColor: 'black',
                borderWidth: 0.6,
              }}>
              <Text style={styles.textstyle}>" userId ": {item.userId}</Text>
              <Text style={styles.textstyle}>" id" : {item.id}</Text>
              <Text style={styles.textstyle}>" title ": {item.title}</Text>
              <Text style={styles.textstyle}>" body ": {item.body}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black',
    fontSize: 16,
  },
});

export default App;
