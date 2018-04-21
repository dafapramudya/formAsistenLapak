import React, {Component} from 'react'
import {StyleSheet, Image, KeyboardAvoidingView, Left} from 'react-native'
import { Content, Text, View, Header, Container, Form, Item, Icon, Input, Button, Body } from 'native-base'
import {} from 'react-navigation'

export default class FormSignUp extends Component{

    state ={
        Username:'',
        validUsername:'',
        UsernameColor:'red',

        Email:'',
        validEmail:'',
        EmailColor:'red',

        Password:'',
        validPass:'',
        PassColor:'red',
    }

    validateUsername(Username){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Username)
    }

    validateEmail(Email){
        const regexs = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexs.test(Email);
    }

    validatePassword(Password){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Password)

        if(Password.lenght >= 6 || Password >= 16)
        {
            return true
        }else{
            return false
        }
    }



    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#dd5453'}} androidStatusBarColor="#b4424b">
                    <Left>
                        <Button name="back" onPress={()=> this.props.navigation.goBack()}/>
                    </Left>
                    <Body>
                        <Text style={{color: "#ffffff"}}>Sign Up</Text>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.row}>
                        <Image source={require('./images/logoLog.png')} style={styles.logo}/>
                    </View>
                    <KeyboardAvoidingView>
                        <Form style={styles.input}>
                            <Item>
                                <Icon name="person" style={styles.icons}/>
                                <Input 
                                    placeholder="Username"
                                    onChangeText=
                                    {
                                        (text)=>this.validateUsername(text)?
                                        this.setState({validUsername:'checkmark-circle',UsernameColor:'green',Username:text}):
                                        this.setState({validUsername:'close-circle',UsernameColor:'red',Username:text})
                                    }
                                    
                                />
                                { <Icon name={this.state.validUsername} style={{color:this.state.UsernameColor}}/> }
                            </Item>
                            <Item>
                                <Icon name="lock" style={styles.icons}/>
                                <Input 
                                    placeholder="Password" 
                                    secureTextEntry={true}
                                    onChangeText=
                                        {
                                            (text)=>this.validateEmail(text)?
                                            this.setState({validEmail:'checkmark-circle',EmailColor:'color',Email:text}):
                                            this.setState({validEmail:'close-circle',EmailColor:'red',Email:text})
                                        }
                                    />
                                    {<Icon name={this.state.validEmail} style={{color:this.state.EmailColor}}/>}
                            </Item>
                            <Item last>
                                <Icon name="mail" style={styles.icons}/>
                                <Input 
                                    style={this.state.emailValidate? styles.error:null}
                                    placeholder="E-mail" 
                                    keyboardType="email-address"
                                    onChangeText=
                                    {
                                        (text)=>this.validatePassword(text)?
                                        this.setState({validPass:'checkmark-circle',PassColor:'green',Password:text}):
                                        this.setState({validPass:'close-circle',PassColor:'red',Email:text})
                                    }
                                />
                                {<Icon name={this.state.validPass} style={{color:this.state.PassColor}}/>}
                            </Item>
                            <Button full style={styles.btnSigUp}><Text>Sign Up</Text></Button>
                            <Button full transparent onPress={()=>this.props.navigation.navigate('RouteMain')}><Text>Have an account ? Log In</Text></Button>
                        </Form>
                    </KeyboardAvoidingView>           
                </Content>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    logo:{
        height:150,
        width:300,
        resizeMode:'contain'
    },
    row:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    input:{
        marginTop:50,
        padding:20
    },
    icons:{
        color:'#595959'
    },
    btnSigUp:{
        backgroundColor:"#dd5453",
        marginTop:30  
    },
    error:{
        borderWidth:3,
        backgroundColor:'red'
    }
})