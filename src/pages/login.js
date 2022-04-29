import React from 'react'
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'


export default function Login({navigation}){
    function goToRegister(){
        navigation.navigate('Register')
    }

    return <View style={style.container}>
        <Image source={require('../assets/logo.png')} />
        <View style={style.form}>
            <Text style={style.label}>Login</Text>
            <TextInput
            style={style.input}
            keyboardType="email-address"
            placeholder="Digite seu email:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            ></TextInput>
            <Text  style={style.label}>Senha</Text>
            <TextInput 
            style={style.input}
            secureTextEntry = {true}
            keyboardType="visible-password"
            placeholder="Digite sua Senha:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            ></TextInput>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Logar</Text>
            </TouchableOpacity>
            <View>
               <TouchableOpacity onPress={goToRegister}>
                <Text style = {style.cadastre}>Faça Seu Cadastro Aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
} 


const style = StyleSheet.create({
   container : {
       backgroundColor: '#fff',
       justifyContent: 'center',
       alignItems: 'center',
   },
   form:{
       alignSelf:'stretch',
       paddingHorizontal: 50,
       marginTop:10,
   },
   label:{
       fontWeight: 'bold',
       color: '#fff',
       marginTop: 10,
       marginBottom: 10,

   },
   input:{
       borderWidth: 1,
       borderColor: '#ddd',
       paddingHorizontal:20,
       fontSize:14,
       height:45,
       marginBottom:20,
       borderRadius:5,
   },
   button:{
       height: 45,
       backgroundColor: '#3ec46d',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 5,
   },
   textButton:{
       color: '#FFF',
       fontWeight: 'bold',
       fontSize: 16,
   },
   cadastre:{
       textAlign:"center",
       paddingVertical: 20   
    }

});