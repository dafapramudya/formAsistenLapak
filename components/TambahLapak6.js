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
    FooterTab,
    Body,
    Title,
    ListItem, 
    CheckBox,
    Radio,
    Right,
    Left,
    Picker,
    Icon,
    Card,
    CardItem,
    List } from 'native-base';
import { StyleSheet, View,  Image } from 'react-native';
import axios from 'axios';

const uri = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100/data";

export default class TambahLapak6 extends Component {

    state = {
        checkedName: "",
        conditione: false,
        checkedName2: "",
        selectedName: "",
        selectedName2: "",
        value: null,
        items4: [{
            id: 1,
            name: "Baru",
            value: true
        },
        {
            id: 2,
            name: "Bekas",
            value: false
        },
        ],

        items5: [{
            id: 1,
            name: "Ya",
            value: true
        },
        {
            id: 2,
            name: "Tidak",
            value: false
        },
        ],

        data: {}
    }

    allProduct(){
        axios.get(`${uri}/products?sortBy=created%20desc`).then(result => {
            this.setState({
                data: result.data
            })
        })
    }

    handleSubmit(){ 
        const data = {
            ...this.state.data, 
            price: Number(this.state.data.price),
            weight: Number(this.state.data.weight),
            processing_days: Number(this.state.data.processing_days)
        }

        // alert(JSON.stringify(data));

        axios.post(`${uri}/products`, data).then(result => {
            if(result.data){
                this.allProduct,
                alert("Succes!")
            }
        })

    }



    checkRadio(name, is_new){
        this.setState({
            selectedName: name,
            data: {...this.state.data, is_new}
        })
    }

    checkRadio2(name, is_preorder){
        this.setState({
            selectedName2: name,
            data: {...this.state.data, is_preorder}
        })
    }

    render() {
    return (
        <Container>
            <Header style={styles.mainColor} androidStatusBarColor="#b4424b">
                <Body>
                    <Title>
                        Tambah Produk
                    </Title>
                </Body>
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Image style={{ width: 50, height: 50 }}
                                        source={require('./images/logo.png')}
                                    />
                                </View>
                                <View style={{ flex: 3 }}>
                                    <Label style={styles.cardHeader}>Toko 4</Label>
                                    <Label style={styles.cardContent}>Jln Wadepuk Jakarta</Label>    
                                    <Label style={styles.cardDate}>21 Maret 2018</Label>
                                </View>
                                
                                <View style={{flex:1}}>
                                    <Label style={{marginTop:5}}>08.00</Label>
                                    <Label style={{marginTop:5}}>JNE</Label>
                                </View>
                            
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Form>
                    <View style={{width: '95%', alignSelf:'center'}}>
                        <Label style={styles.batasAtas}>Nama Produk (max 70 karakter)</Label>
                        <Item regular>
                            <Input onChangeText={(name) => this.setState({data: {...this.state.data, name}})}/>
                        </Item>

                        <Label style={styles.batasAtas}>Gambar Produk</Label>
                        <Button transparent onPress={()=> {alert("Coming Soon")}}>
                            <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                        </Button>

                        <Label style={styles.batasAtas}>Harga</Label>
                        <Item regular>
                            <Input onChangeText={(price) => this.setState({ data: {...this.state.data, price}})} keyboardType = 'numeric'/>
                        </Item>

                        <Label style={styles.batasAtas}>Pemesanan minimun/buah</Label>
                        <Item regular>
                            <Input />
                        </Item>

                        <Label style={styles.batasAtas}>Kondisi</Label>
                        
                        {this.state.items4.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.iteme}>
                                    <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name, item.value)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
                                    </Body>
                                </ListItem>
                            )
                        } )}

                        <Label style={styles.batasAtas}>Deskripsi Produk</Label>
                        <Item regular>
                            <Input onChangeText={(description) => this.setState({data: {...this.state.data, description}})}/>
                        </Item>

                        <Label style={styles.batasAtas}>Berat (kg)</Label>
                        <Item regular>
                            <Input onChangeText={(weight) => this.setState({data: {...this.state.data, weight}})}/>
                        </Item>

                        <Label style={styles.batasAtas}>Aktifkan preorder untuk waktu proses produksi yang lebih lama</Label>

                        {this.state.items5.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.iteme}>
                                    <Radio selected = {item.name == this.state.selectedName2 ? true : false} onPress={()=> this.checkRadio2(item.name, item.value)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
                                    </Body>
                                </ListItem>
                            )
                        } )}

                        <Label style={styles.batasAtas}>Waktu Proses (wajib diisi untuk mengetahui lama produk diproses)</Label>
                        <Item regular>
                            <Input onChangeText={(processing_days) => this.setState({data: {...this.state.data, processing_days}})}/>
                        </Item>
                    </View>

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.buttone} onPress={()=> this.handleSubmit()}>
                            <Text style={{marginLeft: 45}}>Submit</Text>
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
    );
  }
}

const styles = StyleSheet.create({
    buttone:{
        width: '60%',
        backgroundColor: "#b4424b"
    },

    iteme:{
        marginLeft: -0.1
    },

    batasAtas:{
        marginTop: 10
    },

    labelBtn:{
        marginLeft: 55
    },

    labelSelect:{
        marginLeft: 20
    },

    label:{
        margin: 20
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -17
    },

    cardHeader: {
        fontSize: 20,
        marginBottom: 5,
        color: '#0c0c0c'
    },
    cardContent: {
        color: '#424242'
    },
    cardDate: {
        marginTop: 5
    },

    mainColor:{
        backgroundColor: '#dd5453'
    }
})