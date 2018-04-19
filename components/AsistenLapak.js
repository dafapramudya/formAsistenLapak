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

export default class AsistenLapak extends Component{

    state = {
        selectedName: "",
        selectedName2: "",

        items: [{
            id: 1,
            name: "JNE-Reguler"
        },
        {
            id: 2,
            name: "JNE-Yes"
        },
        {
            id: 3,
            name: "JNE-Oke"
        },
        {
            id: 4,
            name: "JTE"
        },
        {
            id: 5,
            name: "Gojek"
        },
        {
            id: 6,
            name: "Others"
        }
        ],
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
                            Buat Transaksi
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                <Form>
                    <Label style={styles.batasAtas}>Produk Pesanan</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({reqProduct: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Stock Availability</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({stock: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Special Request</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({specialReq: text})}/>
                    </Item>
                    
                    <Label style={styles.batasAtas}>Order Number</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({orderNum: text})}/>
                    </Item>
                    
                    <Label style={styles.batasAtas}>Type of Shipping</Label>
                    
                    {this.state.items.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name, item.id)} />
                                <Body>
                                    <Label style={styles.labelSelect}>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.batasAtas}>Type of Packing</Label>
                    
                    {this.state.items2.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName2 ? true : false} onPress={()=> this.checkRadio2(item.name, item.id)} />
                                <Body>
                                    <Label style={styles.labelSelect}>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.batasAtas}>Name of Customer</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({nameOfCustomer: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Customer Phone Number</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({customerPhone: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Customer Address</Label>
                    <Textarea rowSpan={5} bordered onChangeText={(text) => this.setState({customerAdd: text})}/>

                    <Label style={styles.batasAtas}>Nearest Courier Location</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({nearCourier: text})} />
                    </Item>
                    
                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.buttone} onPress={()=> this.props.navigation.navigate('RoutePassingAsisten', {data: {
                                reqProduct: this.state.reqProduct,
                                stock: this.state.stock,
                                specialReq: this.state.specialReq,
                                orderNum: this.state.orderNum,
                                nameOfCustomer: this.state.nameOfCustomer,
                                customerPhone: this.state.customerPhone,
                                customerAdd: this.state.customerAdd,
                                nearCourier: this.state.nearCourier,
                                radio1: this.state.radio1,
                                radio2: this.state.radio2
                            }})}>
                            <Text style={{marginLeft: 45}}>Kirim</Text>
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
    buttone:{
        width: '60%',
        backgroundColor: "#b4424b"
    },

    batasAtas:{
        marginTop: 10
    },

    labelBtn:{
        marginLeft: 55
    },

    iteme:{
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