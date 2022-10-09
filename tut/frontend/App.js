import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { render } from 'react-dom';
import { Button, StyleSheet, Text, View , ActivityIndicator, TextInput} from 'react-native';
import {WebView} from 'react-native-webview'

export default  function App() {
  const [Loading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState([]);
  const [text, setText] = useState('');
  const [reffresh, setRefresh] =useState(false)
 

  const post = () => {
    
  fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({colorcode: text}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  }).then(()=> setRefresh(true)).finally(()=> setText(''));
    
  }
  

  const url = "http://127.0.0.1:8000/api/colors/"
  useEffect(() => {
     fetch(url)
      .then((res) => res.json())
      .then((json)=>setResponse(json))
      .catch((error)=>console.error(error))
      .finally(()=> setIsLoading(false));
        
  }, [response]);

  
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button title ='Submit' onPress={()=> post() }/>
      {Loading ? ( <Text>Loading...</Text>) : (
        response.map((item)=>(
          <View>
            <Text>Submission {item.id}.{item.colorcode}</Text>
            </View>

        ))
      ) }
      
    </View>
    )
  
}


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});