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
import { StyleSheet, View, TouchableOpacity, StatusBar, Image, PixelRatio, AppRegistry } from 'react-native';

import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const uri = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100/data";
const uri2 = "https://api.backendless.com/A54546E5-6846-C9D4-FFAD-EFA9CB9E8A00/241A72A5-2C8A-1DB8-FFAF-0F46BA4A8100/data";

export default class TambahLapakToko extends Component{

    state = {
        checkedName: "",
        checkedName2: "",
        selectedName: "",
        selectedName2: "",
        selectedName3: "",
        imageSource: null,

        items: [{
            id: 1,
            name: "Fashion Wanita"
        },
        {
            id: 2,
            name: "Fashion Pria"
        },
        {
            id: 3,
            name: "Fashion Muslim"
        },
        {
            id: 4,
            name: "Fashion Anak",
            
        },
        {
            id: 5,
            name: "Handphone dan Tablet",
            
        },
        {
            id: 6,
            name: "Elektronik",
            
        },
        {
            id: 7,
            name: "Kecantikan",
            
        },
        {
            id: 8,
            name: "Kesehatan",
            
        },
        {
            id: 9,
            name: "Ibu dan bayi",
            
        },
        {
            id: 10,
            name: "Perawatan tubuh",
            
        },
        {
            id: 11,
            name: "Rumah Tangga",
            
        },
        {
            id: 12,
            name: "Gaming",
            
        },
        {
            id: 13,
            name: "Laptop dan Aksesoris",
            
        },
        {
            id: 14,
            name: "Komputer dan Aksesoris",
            
        },
        {
            id: 15,
            name: "Kamera",
            
        },
        {
            id: 16,
            name: "Otomotif",
            
        },
        {
            id: 17,
            name: "Olahraga",
            
        },
        {
            id: 18,
            name: "Film dan Musik",
            
        },
        {
            id: 19,
            name: "Dapur",
            
        },
        {
            id: 20,
            name: "Office dan Stationeri",
            
        },
        {
            id: 21,
            name: "Sofenir dan Kado",
            
        },
        {
            id: 22,
            name: "Mainan dan Hobi",
            
        },
        {
            id: 23,
            name: "Makanan dan Minuman",
            
        },
        {
            id: 24,
            name: "Buku",
            
        },
        {
            id: 25,
            name: "Software",
            
        },
        {
            id: 26,
            name: "Produk Lainya",
            
        },
        ],

        check: [],
        checkk: [],

        items2: [{
            id: 1,
            name: "JNE"
        },
        {
            id: 2,
            name: "TIKI"
        },
        {
            id: 3,
            name: "WAHANA"
        },
        {
            id: 4,
            name: "GO-JEK"
        },
        {
            id: 5,
            name: "POS Indonesia"
        },
        {
            id: 6,
            name: "First"
        },
        {
            id: 7,
            name: "SiCepat"
        },
        {
            id: 8,
            name: "J&T"
        }
        ],

        items3: [{
            id: 1,
            name: "Selalu Tersedia"
        },
        {
            id: 2,
            name: "Stock Terbatas"
        },
        {
            id: 3,
            name: "Stock Kosong"
        }],

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

        // marketName: "",
        // slogan: "",
        // description: "",
        // fullAddress: "",
        // city: "",
        // postCode: "",
        // website: "",
        // phone: "",
        // email: "",
        // bankName: "",
        // radio1: "",

        data:{},
        dS:[{}],

        check1: [],
        check2: []

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
            fetch(`${uri}/files/images/logoToko.png?overwrite=true`, {
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

    addCheck(set, categories) {

        if (!this.state.check.includes(set)) {
          getCheck = this.state.check
          getCheck.push(set)
          this.setState({
            check: getCheck,
            check1: getCheck,
            data: {...this.state.data, categories}
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

        if (!this.state.checkk.includes(set)) {
          getCheck = this.state.checkk
          getCheck.push(set)
          this.setState({
            checkk: getCheck,
            check2: getCheck,
          })
        }
    
        else{
            geCheck = this.state.checkk
            geCheck = geCheck.filter(item => item !== set)
            this.setState({
                checkk: geCheck
            })
        }
    
      }

      allStores(){
          axios.get(`${uri}/stores?sortBy=created%20desc`).then(result => {
              this.setState({
                  data: result.data
              })
          })    
      }

      allDeliveryServices(){
          axios.get(`${uri2}/delivery_services?sortBy=created%20desc`).then(result => {
              dS: result.data
          })
      }

      handleSubmit(){
          axios.post(`${uri}/stores`, this.state.data).then(result => {
              if(result.data){
                  this.allStores()
                  alert("Success!")
              }
          })
      }

      componentDidMount(){
          this.allDeliveryServices()
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
                <Content padder>
                <Form>
                    <Label>Nama Toko</Label>
                    <Item regular>
                        <Input onChangeText={(name) => this.setState({data: {...this.state.data, name}})} />
                    </Item>

                    <Label style={styles.batasAtas}>Slogan</Label>
                    <Item regular>
                        <Input onChangeText={(slogan) => this.setState({data: {...this.state.data, slogan}})} />
                    </Item>
                    
                    <Label style={styles.batasAtas}>Logo Toko</Label>
                        
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

                    <Label style={styles.batasAtas}>Deskripsi</Label>
                    <Textarea rowSpan={5} bordered onChangeText={(description) => this.setState({data: {...this.state.data, description}})}/>

                    <Label style={styles.batasAtas}>Alamat Lengkap</Label>
                    <Textarea rowSpan={5} bordered onChangeText={(address) => this.setState({data: {...this.state.data, address}})}/>

                    <Label style={styles.batasAtas}>Kota</Label>
                    <Item regular>
                        <Input onChangeText={(city) => this.setState({data: {...this.state.data, city}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Kode Pos</Label>
                    <Item regular>
                        <Input onChangeText={(postal_code) => this.setState({data: {...this.state.data, postal_code}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Situs Web</Label>
                    <Item regular>
                        <Input onChangeText={(website) => this.setState({data: {...this.state.data, website}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>No Telp</Label>
                    <Item regular>
                        <Input onChangeText={(mobile_phone) => this.setState({data: {...this.state.data, mobile_phone}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Alamat Email</Label>
                    <Item regular>
                        <Input onChangeText={(email) => this.setState({data: {...this.state.data, email}})}/>
                    </Item>

                    <Label style={styles.batasAtas}>Nama Bank</Label>
                    <Item regular>
                    <Input onChangeText={(bank) => this.setState({ data: {...this.state.data, bank} })} />
                    </Item>

                    <Label style={styles.batasAtas}>Nomor Rekening</Label>
                    <Item regular>
                    <Input onChangeText={(bank_account) => this.setState({ data: {...this.state.data, bank_account} })} />
                    </Item>

                    <Label style={styles.batasAtas}>Nama Pemilik Akun Bank</Label>
                    <Item regular>
                    <Input onChangeText={(bank_account_owner) => this.setState({ data: {...this.state.data, bank_account_owner} })} />
                    </Item>

                    <Label style={styles.batasAtas}>Jenis barang (Kategori)</Label>

                    {this.state.items.map((item, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck(item.id, item.name)} checked={this.state.check.includes(item.id) ? true : false} color="#dd5453" />
                        <Body>
                            <Label style={styles.labelSelect}>{item.name}</Label>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}


                    <Label style={styles.batasAtas}>Status Produk (Kategori)</Label>
                    
                    {this.state.items3.map((item, index)=> {
                        return(
                            <ListItem key={item.id} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name, item.id)} />
                                <Body>
                                    <Label style={styles.labelSelect}>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}
                    
                    <Label style={styles.batasAtas}>Jasa Pengiriman</Label>

                    {this.state.items2.map((item, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck2(item.id, item.name)} checked={this.state.checkk.includes(item.id) ? true : false} color="#dd5453"/>
                        <Body>
                            <Label style={styles.labelSelect}>{item.name}</Label>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button block style={styles.buttone} onPress={()=> this.handleSubmit()}>
                            <Text>Submit</Text>
                        </Button> 
                    </ListItem>
                </Form>
                </Content>

                <Footer style={styles.mainColor}>
                    <FooterTab style={styles.mainColor}>
                        <Button>
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
        flex: 1,
        backgroundColor: "#b4424b"
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

    iteme:{
        marginLeft: -0.1
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -15
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