import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Modal, Text, TextInput, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE }  from 'react-native-maps';
import axios from 'axios';




export default function Users() {

    
const initialStation = {
    latitude: null,
   longitude: null,
  latitudeDelta: 0.0922,
 longitudeDelta: 0.0421,
}
    let myMap;
    const [curentPosition, setCurentPosition] = useState(initialStation);
    const [ user, setUser] = useState({ });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
         /* alert(JSON.stringify(position))*/
        //  console.log(position)
          const   {longitude, latitude } = position.coords;
         
           
    
          setCurentPosition({
            ...curentPosition,
            latitude,
            longitude, 
          })
    
          
    
    
        }, error =>alert(error.message),
          {  timeout: 20000, maximumAge: 1000 }
        )
        
        axios.get('http://192.168.1.7:4000/api/user')
        .then(data => {
            console.log(data.data)
            setUser(data.data)
            console.log(user)
        }).catch(error =>{
           console.log(error) 
        })

      }, [])



      return curentPosition.latitude ? (
        <View style={{flex: 1}}>
        <MapView  
            ref={ref => myMap = ref}
           provider={PROVIDER_GOOGLE}
           style={{ flex:1 }}
           showsUserLocation
           initialRegion={curentPosition}
           >
          {  Object.values(user).map((items)=>(
              <View key={items._id}>
            <Marker
            coordinate={{
              latitude: Number(items.latitude),
              longitude: Number(items.longitude)
              }}
              title={items.name}
              
         />
         </View>
          ))

            }
           
     
           
     </MapView>
     
     
     
     </View>
         
       
     
           
         
         
           
         
       ) : <ActivityIndicator style={{flex: 1}} animating size="small" />  
     
     
     };

     const styles = StyleSheet.create({




    });
    