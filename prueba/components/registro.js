import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Modal, Text, TextInput, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE }  from 'react-native-maps';
import axios from 'axios';





export default function Registro({ navigation }) {

    const initialStation = {
        latitude: null,
       longitude: null,
      latitudeDelta: 0.0922,
     longitudeDelta: 0.0421,
}


  let myMap;
  const [curentPosition, setCurentPosition] = useState(initialStation);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState('');


  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
     /* alert(JSON.stringify(position))*/
    //  console.log(position)
      const {longitude, latitude } = position.coords;
     
    


      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude, 
      })

      


    }, error =>alert(error.message),
      {  timeout: 20000, maximumAge: 1000 }
    )
   /* setCurentPosition({
      ...curentPosition,
      latitude: -0.3027731,
      longitude: -78.5628873, 
    })*/
  }, [])
  
  function CloseModal(){
    setModalVisible(!modalVisible)
  } 

   function ModalEjemploPrueba2(){
    return(
    <View style={{flex: 1,
      justifyContent: 'center',}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={CloseModal}
        >
          <View style={{flex: 1,
    justifyContent: 'center',}}>
            <View style={{ margin: 15,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: 'column',
    padding: 15,
    shadowColor: "#000",
    elevation: 60}}>

    <Text >Localización</Text>
    <TextInput
   
    onChangeText={text => onChangeText(text)}
    value={value}
  />
  <Button
  title="Registrar"
  color="#f194ff"
  onPress={() => {
    let data = {
     
        latitude: curentPosition.latitude,
       longitude: curentPosition.longitude,
       name: value  
      
      

    }
    setModalVisible(!modalVisible)
    navigation.navigate('List');
    //console.log(data)
 
    axios.post('http://192.168.1.7:4000/api/user',  data 
    ).then(res => {
      console.log(res);
    }).catch(error =>{
      console.log(error)
    })

  }}
/>

<Button
  title="Lista"
  color="#de1f"
  onPress={() => {
   
    setModalVisible(!modalVisible)
    navigation.navigate('List');
    //console.log(data)
 
  

  }}
/>
            </View>
              
            </View>
        </Modal>
    </View>
    );
};



  return curentPosition.latitude ? (
   <View style={{flex: 1}}>
   <MapView  
       ref={ref => myMap = ref}
      provider={PROVIDER_GOOGLE}
      style={{ flex:1 }}
      showsUserLocation
      initialRegion={curentPosition}
      >
     
      <Marker
        coordinate={{
          latitude:  curentPosition.latitude,
          longitude: curentPosition.longitude
          }}
          title={'Usuario'}
          onPress={e => {
         setModalVisible(true)
         }}
     />

      
</MapView>

<View>
<ModalEjemploPrueba2 />

</View>

</View>
    
  

      
    
    
      
    
  ) : <ActivityIndicator style={{flex: 1}} animating size="small" />  


};

const styles = StyleSheet.create({




});
