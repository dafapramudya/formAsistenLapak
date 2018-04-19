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
    Icon,
    FooterTab,
    List
} from 'native-base'
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';

export default class TambahLapakToko extends Component{

    state = {
        selectedName: "",
        selectedName2: "",
        selectedName3: "",

        items: [{
            id: 1,
            name: "Baru"
        },
        {
            id: 2,
            name: "Bekas"
        },
        ],

        items2: [{
            id: 1,
            name: "Ya"
        },
        {
            id: 2,
            name: "Tidak"
        },
        ],

        productName: "",
        price: "",
        request: "",
        descProduct: "",
        weight: "",
        time: ""
    }

    checkRadio(name){
        this.setState({
            selectedName: name
        })

        if(this.state.selectedName == name)
        {
            this.setState({
                selectedName: ""
            })
        }
    }

    checkRadio2(name){
        this.setState({
            selectedName: name
        })

        if(this.state.selectedName == name)
        {
            this.setState({
                selectedName: ""
            })
        }
    }

    render(){
        return(
            <Container>
                <Header style={styles.mainColor} androidStatusBarColor="#b4424b">
                    <Body>
                        <Title>
                            Tambah Lapak
                        </Title>
                    </Body>
                </Header>

                <Content padder style={styles.mainColor}>
                <Form>
                    <Label style={styles.batasAtas}>Nama Produk (max 70 karakter)</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({productName: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Gambar Produk</Label>
                    <Button transparent onPress={()=> {alert("Coming Soon")}}>
                        <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                    </Button>

                    <Label style={styles.batasAtas}>Harga</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({price: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Pemesanan minimun/buah</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({request: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Kondisi</Label>
                    
                    {this.state.items.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio2(item.name)} />
                                <Body>
                                <Label>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.batasAtas}>Deskripsi Produk</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({descProduct: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Berat (kg)</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({weight: text})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Aktifkan preorder untuk waktu proses produksi yang lebih lama</Label>

                    {this.state.items2.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio3(item.name)} />
                                <Body>
                                <Label>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.batasAtas}>Waktu Proses (wajib diisi untuk mengetahui lama produk diproses)</Label>
                    <Item regular>
                        <Input onChangeText={(text) => this.setState({time: text})}/>
                    </Item>

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.buttone} onPress={()=> this.props.navigation.navigate('RouteNjajalPassingProduk', {data: {
                                productName: this.state.productName,
                                price: this.state.price,
                                request: this.state.request,
                                descProduct: this.state.descProduct,
                                weight: this.state.weight,
                                time: this.state.time
                            }})}>
                            <Text style={{marginLeft: 40}}>Submit</Text>
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

    label:{
        margin: 20
    },

    iteme:{
        marginLeft: -0.1
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -17
    },

    mainColor:{
        backgroundColor: '#dd5453'
    }
})