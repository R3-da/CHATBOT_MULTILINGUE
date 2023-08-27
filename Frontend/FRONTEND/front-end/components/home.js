import React from 'react';
import {Button, View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements'

export default function Home( props ) {
    console.log(props.data.component);
    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            
                <View style={{backgroundColor:"#9c0001",paddingVertical:"2%",marginHorizontal:"10%",borderRadius:20,shadowColor: "#000",shadowOffset: {width: 0,height: 10,},shadowOpacity: 0.7,shadowRadius: 13.97, elevation: 30,}}><Text style={{color:"#fff",fontSize:20,paddingLeft:"5%",textAlign:"center"}}>YOUR GUIDES : </Text></View>
                {props.data.component.map((c,i)=>{
                    console.log(c["name"]);
                    return <TouchableOpacity style={styles.shadow} key={i} onPress={()=>{ props.data.loadModel(c["name"]);props.navigation.navigate(c["name"])}}>
                        
                        
                        <View style={{width:'90%', height: '90%', marginVertical:'-50%',marginLeft:'5%',borderRadius:"50%",marginTop:"20%",paddingTop:-8}}>
                            <Image
                                style={{width:'100%',height:"100%",resizeMode:'cover',borderRadius:100,paddingVertical:-15}}
                                source={{uri:c["uri"]}}
                            />
                        </View>
                    </TouchableOpacity>
                })}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor:'white',
        marginVertical:"10%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        borderRadius: 100,
        height: 130,
        width: '55%',
        marginHorizontal: '25%',
        marginBottom:-30,
        flexDirection: 'row',
        height:"28%"
    }
});

// <ListItem
//     key={i}
//     leftAvatar={{ source: { uri: c["uri"] } }}
//     title={c["name"]}
//     subtitle={c["describtion"]}
//     bottomDivider
//     onPress={()=>{
//         props.data.loadModel(c["name"])
//         props.navigation.navigate(c["name"])
//     }}
// />
