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

export default class TambahLapak2 extends Component{

    state = {
        checkedName: "",
        checkedName2: "",
        selectedName: "",
        selectedName2: "",
        selectedName3: "",
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
        ]
    }

    onValueChange(value) {
        this.setState({
          selected1: value
        });
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

    checkRadio3(name){
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
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Slogan</Label>
                    <Item regular>
                        <Input />
                    </Item>
                    
                    <Label style={styles.batasAtas}>Logo Toko</Label>
                    <Button transparent onPress={()=> {alert("Coming Soon")}}>
                        <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                    </Button>

                    <Label style={styles.batasAtas}>Deskripsi</Label>
                    <Textarea rowSpan={5} bordered/>

                    <Label style={styles.batasAtas}>Alamat Lengkap</Label>
                    <Textarea rowSpan={5} bordered/>

                    <Label style={styles.batasAtas}>Kota</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Kode Pos</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Situs Web</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>No Telp</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Alamat Email</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Nama Bank dan No Rek.</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Jenis barang (Kategori)</Label>

                    {this.state.items.map((items, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck(items.id)} checked={this.state.check.includes(items.id) ? true : false} color="#dd5453" />
                        <Body>
                            <Label>{item.name}</Label>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}


                    
                    
                    <Label style={styles.batasAtas}>Status Produk (Kategori)</Label>
                    
                    {this.state.items3.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name)} />
                                <Body>
                                    <Label>{item.name}</Label>
                                </Body>
                            </ListItem>
                        )
                    } )}
                    
                    <Label style={styles.batasAtas}>Jasa Pengiriman</Label>

                    {this.state.items2.map((items, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck2(items.id)} checked={this.state.check.includes(items.id) ? true : false} color="#dd5453"/>
                        <Body>
                            <Label>{item.name}</Label>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}

                    <Label style={styles.batasAtas}>Nama Produk (max 70 karakter)</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Gambar Produk</Label>
                    <Button transparent onPress={()=> {alert("Coming Soon")}}>
                        <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                    </Button>

                    <Label style={styles.batasAtas}>Harga</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Pemesanan minimun/buah</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Kondisi</Label>
                    
                    {this.state.items4.map((item, index)=> {
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
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Berat (kg)</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Aktifkan preorder untuk waktu proses produksi yang lebih lama</Label>

                    {this.state.items5.map((item, index)=> {
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
                        <Input />
                    </Item>

                    <ListItem style={{alignSelf:'center', justifyContent:'center'}}>
                        <Button style={styles.buttone}>
                            <Text style={{marginLeft: 40}}>Submit</Text>
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