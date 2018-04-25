import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Title
} from "native-base";
import axios from "axios";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";
export default class MainSignIn extends Component {
  state = {
    form: {}
  };

  handleLogout() {
    AsyncStorage.getItem("userToken", (err, result) => {
      if (result) {
        axios({
          method: "get",
          url: `${uri}/users/logout`,
          headers: {
            "user-token": result
          }
        }).then(response => {
          AsyncStorage.removeItem("userToken", err => {
            if (!err) {
              this.props.navigation.navigate("Login");
            } else {
              alert("logout gagal");
            }
          });
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Home Menu</Title>
        </Header>
        <Content>
          <Form style={styles.form}>
            <Text style={{ textAlign: "center" }}>Hi Rehanchrl</Text>
            <Button
              full
              rounded
              style={styles.button}
              onPress={() => this.handleLogout()}
            >
              <Text>LOGOUT</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  touchable: {
    alignItems: "center"
  }
});