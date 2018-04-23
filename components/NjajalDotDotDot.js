import React, { Component } from 'react';
import {
    Content,
    Text,
    Header,
    Container,
    Form,
    Item,
    Input,
    Textarea,
    Label,
    Button,
    Footer,
    Body,
    Title,
    ListItem, 
    CheckBox,
    Radio,
    Right,
    Left,
    Picker,
    FooterTab,
    Icon,
    List
} from 'native-base'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

const uriProduct = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100/data";
const uriDeliveryServ = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100/data";

export default class NjajalDotDotDot extends Component{

    state = {
        selectedName: "",
        selectedName2: "",

        // items: [{
        //     id: 1,
        //     name: "JNE-Reguler"
        // },
        // {
        //     id: 2,
        //     name: "JNE-Yes"
        // },
        // {
        //     id: 3,
        //     name: "JNE-Oke"
        // },
        // {
        //     id: 4,
        //     name: "JTE"
        // },
        // {
        //     id: 5,
        //     name: "Gojek"
        // },
        // {
        //     id: 6,
        //     name: "Others"
        // }
        // ],

        dS: [],

        items2: [{
            id: 1,
            name: "Electronic"
        },
        {
            id: 2,
            name: "Non Electronic"
        },
        {
            id: 3,
            name: "Other"
        }
        ],

        dataProduct: {
            reqProduct: "",
            stock: "",
            specialReq: "",
            orderNum: "",
            nameOfCustomer: "",
            customerPhone: "",
            customerAdd: "",
            nearCourier: "",
            radio1: "",
            radio2: ""
        }
    }

    componentDidMount(){
        this.allDeliveryService()
    }

    checkRadio(name, id){
        this.setState({
            selectedName: name,
            radio1: id
        })

        if(this.state.selectedName == name)
        {
            this.setState({
                selectedName: ""
            })
        }
    }

    allDeliveryService(){
        axios.get(`${uri}/delivery_services`).then((result) => {
            this.setState({
                dS: result.data
            })
        })
    }

    njajalInput(){
        alert(this.state.dataProduct);
    }

    checkRadio2(name, id){
        this.setState({
            selectedName2: name,
            radio2: id
        })

        if(this.state.selectedName2 == name)
        {
            this.setState({
                selectedName2: ""
            })
        }
    }

    render(){
        return(
            <Container>
                <Header style={styles.mainColor} androidStatusBarColor="#b4424b">
                    <Body>
                        <Title>
                            DOT DOT
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                <Form>
                    <Label style={styles.batasAtas}>Produk Pesanan</Label>
                    <Item regular>
                        <Input onChangeText={(reqProduct)=> this.setState({dataProduct: {...this.state.dataProduct, reqProduct}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Stock Availability</Label>
                    <Item regular>
                        <Input onChangeText={(stock) => this.setState({dataProduct: {...this.state.dataProduct, stock}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Special Request</Label>
                    <Item regular>
                        <Input onChangeText={(specialReq) => this.setState({dataProduct: {...this.state.dataProduct, specialReq}})}/>
                    </Item>
                    
                    <Label style={styles.batasAtas}>Order Number</Label>
                    <Item regular>
                        <Input onChangeText={(orderNum) => this.setState({dataProduct: {...this.state.dataProduct, orderNum}})}/>
                    </Item>
                    
                    <Label style={styles.batasAtas}>Type of Shipping</Label>
                    
                    {this.state.dS.map((deliveryS) => {
                        return(
                            <ListItem key={deliveryS.objectId}>
                                <Radio selected = {dS.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(deliveryS.name, deliveryS.id)} />
                                <Body>
                                    <Label style={styles.labelSelect}>{deliveryS.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    })}

                    <Label style={styles.batasAtas}>Type of Packing</Label>
                    
                    {this.state.items2.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.items}>
                                <Radio selected = {item.name == this.state.selectedName2 ? true : false} onPress={()=> this.checkRadio2(item.name, item.id)} />
                                <Body>
                                    <Label style={styles.labelSelect}>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.batasAtas}>Name of Customer</Label>
                    <Item regular>
                        <Input onChangeText={(nameOfCustomer) => this.setState({dataProduct: {...this.state.dataProduct, nameOfCustomer}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Customer Phone Number</Label>
                    <Item regular>
                        <Input onChangeText={(customerPhone) => this.setState({dataProduct: {...this.state.dataProduct, customerPhone}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Customer Address</Label>
                    <Textarea rowSpan={5} bordered onChangeText={(customerAdd) => this.setState({dataProduct: {...this.state.dataProduct, customerAdd}})}/>

                    <Label style={styles.batasAtas}>Nearest Courier Location</Label>
                    <Item regular>
                        <Input onChangeText={(nearCourier) => this.setState({dataProduct: {...this.state.dataProduct, nearCourier}})} />
                    </Item>
                    
                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.submitBtn} onPress={()=> this.njajalInput()}>
                            <Text>Kirim</Text>
                        </Button>
                    </ListItem>
                </Form>
                </Content>

                <Footer style={styles.mainColor}>
                    <FooterTab style={styles.mainColor}>
                        <Button >
                            <Icon name="home" />
                        </Button>
                        <Button>
                            <Icon name="cart" />
                        </Button>
                        <Button>
                            <Icon name="settings" />
                        </Button>
                    </FooterTab>
              </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    submitBtn:{
        flex: 1,
        backgroundColor: "#b4424b"
    },

    batasAtas:{
        marginTop: 10
    },

    labelBtn:{
        marginLeft: 55
    },

    items:{
        marginLeft: -0.1
    },

    label:{
        margin: 20
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -17
    },

    labelSelect:{
        marginLeft: 20
    },

    mainColor:{
        backgroundColor: '#dd5453'
    }
})