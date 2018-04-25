import React, { Component } from 'react';
import { Content, Text, Header, Container, Form,
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
    List,} from 'native-base';
import { StyleSheet, View,  Image, PixelRatio, TouchableOpacity, AppRegistry} from 'react-native';

import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const uri = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100";

export default class TambahLapak6 extends Component {

    state = {
        checkedName: "",
        imageSource: null,
        conditione: false,
        checkedName2: "",
        conditionChoice: "",
        preOrderChoice: "",
        value: null,
        conditionItems: [{
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

        preOrderItems: [{
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

    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
  
              imageSource: source
  
            });

            const data = new FormData();
            data.append("photo", {
                uri: source.uri,
                type: "image/jpeg",
                name: "Photo"
            });
            fetch(`${uri}/files/images/logoProduct.png?overwrite=true`, {
                method: "post",
                body: data
            }).then(result => {
                this.setState({
                    data: {...this.state.data, image: result.url}
                })
            })
          }
        });
      }

    allProduct(){
        axios.get(`${uri}/data/products?sortBy=created%20desc`).then(result => {
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

        axios.post(`${uri}/data/products`, data).then(result => {
            if(result.data){
                this.allProduct,
                alert("Succes!")
            }
        })

    }



    radioCondition(name, is_new){
        this.setState({
            conditionChoice: name,
            data: {...this.state.data, is_new}
        })
    }

    preOrderRadio(name, is_preorder){
        this.setState({
            preOrderChoice: name,
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
                        <Label style={styles.upperLimit}>Nama Produk (max 70 karakter)</Label>
                        <Item regular>
                            <Input onChangeText={(name) => this.setState({data: {...this.state.data, name}})}/>
                        </Item>
                        
                        <Label style={styles.upperLimit}>Gambar Produk</Label>
                        
                            { this.state.imageSource === null ? (
                                <Button transparent onPress={ this.selectPhotoTapped.bind(this)}>
                                    <Text style={styles.fileChooser}>TAMBAHKAN FOTO</Text>
                                </Button>
                            )
                            :
                            (
                            <View>
                                <View>
                                <Button transparent onPress={ this.selectPhotoTapped.bind(this)}>
                                    <Text style={styles.fileChooser}>GANTI FOTO</Text>
                                </Button>
                                </View>
                                <View
                                    style={[
                                    styles.avatar,
                                    styles.avatarContainer,
                                    { marginBottom: 20 }
                                    ]}
                                >
                                    <Image style={styles.avatar} source={this.state.imageSource} />
                                </View>
                            </View>
                            )
                            }
                        

                        <Label style={styles.upperLimit}>Harga</Label>
                        <Item regular>
                            <Input onChangeText={(price) => this.setState({ data: {...this.state.data, price}})} keyboardType = 'numeric'/>
                        </Item>

                        <Label style={styles.upperLimit}>Pemesanan minimun/buah</Label>
                        <Item regular>
                            <Input />
                        </Item>

                        <Label style={styles.upperLimit}>Kondisi</Label>
                        
                        {this.state.conditionItems.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.items}>
                                    <Radio selected = {item.name == this.state.conditionChoice ? true : false} onPress={()=> this.radioCondition(item.name, item.value)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
                                    </Body>
                                </ListItem>
                            )
                        } )}

                        <Label style={styles.upperLimit}>Deskripsi Produk</Label>
                        <Item regular>
                            <Input onChangeText={(description) => this.setState({data: {...this.state.data, description}})}/>
                        </Item>

                        <Label style={styles.upperLimit}>Berat (kg)</Label>
                        <Item regular>
                            <Input onChangeText={(weight) => this.setState({data: {...this.state.data, weight}})}/>
                        </Item>

                        <Label style={styles.upperLimit}>Aktifkan preorder untuk waktu proses produksi yang lebih lama</Label>

                        {this.state.preOrderItems.map((item, index)=> {
                            return(
                                <ListItem key={item.name} style={styles.items}>
                                    <Radio selected = {item.name == this.state.preOrderChoice ? true : false} onPress={()=> this.preOrderRadio(item.name, item.value)} />
                                    <Body>
                                        <Label style={styles.labelSelect}>{item.name}</Label>
                                    </Body>
                                </ListItem>
                            )
                        } )}

                        <Label style={styles.upperLimit}>Waktu Proses (wajib diisi untuk mengetahui lama produk diproses)</Label>
                        <Item regular>
                            <Input onChangeText={(processing_days) => this.setState({data: {...this.state.data, processing_days}})}/>
                        </Item>
                    </View>

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button block style={styles.submitBtn} onPress={()=> this.handleSubmit()}>
                            <Text>Submit</Text>
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
    submitBtn:{
        flex: 1,
        backgroundColor: "#b4424b"
    },

    items:{
        marginLeft: -0.1
    },

    upperLimit:{
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
        marginLeft: -15
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
    },

    avatarContainer: {
        borderColor: "#9B9B9B",
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    }
})