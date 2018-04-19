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
export default class TambahLapak6 extends Component {

    state = {
        checkedName: "",
        conditione: false,
        checkedName2: "",
        selectedName: "",
        items4: [{
            id: 1,
            name: "Baru"
        },
        {
            id: 2,
            name: "Bekas"
        },
        ],

        items5: [{
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

    handleButtonPress() {
        this.setState({checkBoxStatus: !this.state.checkBoxStatus});
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

    addCheck(set) {

        if (!this.state.check.includes(set)) {
          getCheck = this.state.check
          getCheck.push(set)
          this.setState({
            check: getCheck
          })
        }
    
        else{
            geCheck = this.state.check
            geCheck = geCheck.filter(item => item !== set)
            this.setState({
              check: geCheck
            })
        }
    
      }

      addCheck2(set) {

        if (!this.state.check.includes(set)) {
          getCheck = this.state.check
          getCheck.push(set)
          this.setState({
            check: getCheck
          })
        }
    
        else{
            geCheck = this.state.check
            geCheck = geCheck.filter(item => item !== set)
            this.setState({
              check: geCheck
            })
        }
    
      }

    render() {
    return (
        <Container>
            <Header style={styles.mainColor} androidStatusBarColor="#b4424b">
                <Body>
                    <Title>
                        Tambah Lapak
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
                        
                        {this.state.items4.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.iteme}>
                                    <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio2(item.name)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
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

                        {this.state.items5.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.iteme}>
                                    <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio3(item.name)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
                                    </Body>
                                </ListItem>
                            )
                        } )}

                        <Label style={styles.batasAtas}>Waktu Proses (wajib diisi untuk mengetahui lama produk diproses)</Label>
                        <Item regular>
                            <Input onChangeText={(text) => this.setState({time: text})}/>
                        </Item>
                    </View>

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.buttone} onPress={()=> this.props.navigation.navigate('RouteNjajalPassingProduk', {data: {
                                productName: this.state.productName,
                                price: this.state.price,
                                request: this.state.request,
                                descProduct: this.state.descProduct,
                                weight: this.state.weight,
                                time: this.state.time
                            }})}>
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