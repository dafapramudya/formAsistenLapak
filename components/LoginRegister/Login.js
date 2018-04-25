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
export default class Login extends Component {
  state = {
    form: {}
  };

  componentDidMount() {
    AsyncStorage.getItem("userToken", (err, result) => {
      if (result) {
        this.props.navigation.navigate("HomeLogin");
      }
    });
  }

  handleLogin() {
    console.log(this.state.form);
    axios
      .post(`${uri}/users/login`, this.state.form)
      .then(result => {
        //console.log(result.data["user-token"])
        AsyncStorage.setItem("userToken", result.data["user-token"]);
        this.props.navigation.navigate("HomeLogin");
      })
      .catch(e => console.log(e));
  }

  render() {
    AsyncStorage.getItem("userToken", (err, result) => console.log(result));
    return (
      <Container>
        <Header>
          <Title>Login</Title>
        </Header>
        <Content>
          <Form style={styles.form}>
            <Label>Username</Label>
            <Item rounded>
              <Input
                placeholder="Username"
                onChangeText={login =>
                  this.setState({ form: { ...this.state.form, login } })
                }
              />
            </Item>
            <Label>Password</Label>
            <Item rounded>
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={password =>
                  this.setState({ form: { ...this.state.form, password } })
                }
              />
            </Item>
            <Button
              full
              rounded
              style={styles.button}
              onPress={() => this.handleLogin()}
            >
              <Text>LOGIN</Text>
            </Button>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RouteSignUp')}
              style={styles.touchable}
            >
              <Text style={{ color: "blue" }}>
                Don't have account? Register
              </Text>
            </TouchableOpacity>
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