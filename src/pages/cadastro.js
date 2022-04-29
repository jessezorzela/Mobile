import React from 'react'
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import logo from '../assets/logo.png'

export default function Cadastro({navigation}){
    function goToLogin(){
        navigation.navigate('Login')
    }
    return <View style={style.container}>
         <Image source={logo} style={style.image} />
         <Text style={style.label}>nome</Text>
         <View style={style.form}>
            <TextInput
            style={style.input}
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize='words'
            ></TextInput>
        <Text style={style.label}>Email</Text>
            <TextInput
            style={style.input}
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            ></TextInput>
            <Text style={style.label}>Registro Academico</Text>
            

            <View style={style.contai}>
            <TextInput
            style={style.input}
            keyboardType="number-pad"
            placeholder="CPF"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            ></TextInput>
            <TextInput 
            style={style.input}
            secureTextEntry = {true}
            keyboardType="number-pad"
            placeholder="RG"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            ></TextInput>
            </View>

            <Text style={style.label}>Redigite sua Senha</Text>
            <TextInput
            style={style.input}
            placeholder="Cargo"
            placeholderTextColor="#999"
            autoCapitalize='words'
            ></TextInput>
        
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <View>
               <TouchableOpacity onPress={goToLogin}>
                <Text style = {style.cadastre}>Voltar para o Login</Text>
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
  contai:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 50,
      heigth:50,
      display:'flex',
      flexDirection: "row",
     
      
   },
   label:{
       fontWeight: 'bold',
       color: '#fff',
       marginTop: 10,
       marginBottom: 10,

   },
   image:{
       width:120,
       height:100,
       borderRadius:50,
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