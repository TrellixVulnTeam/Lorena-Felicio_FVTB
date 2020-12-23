import * as React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Button, ButtonText } from "../style";
import { Login, Input, Title, GoogleBtn, FacebookBtn } from "./style";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <Container>
      <Container>
        <Image source={require("@assets/main_logo.png")} />
      </Container>
      <Login>
        <View style={styles.titleContainer}>
          <Title>Login</Title>
        </View>
        <Input placeholder="Usuário" placeholderTextColor="#e8cbbb" />
        <Input placeholder="Senha" placeholderTextColor="#e8cbbb" />
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate("Second")}
        >
          <Button>
            <ButtonText>Fazer Login</ButtonText>
          </Button>
        </TouchableOpacity>
        <View style={styles.fastContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Second")}>
            <GoogleBtn>
              <Image source={require("@assets/google.png")} />
            </GoogleBtn>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Second")}>
            <FacebookBtn>
            <FontAwesome5 name="facebook" size={30} color="white" />
            </FacebookBtn>
          </TouchableOpacity>
        </View>
      </Login>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    width: "100%",
    alignItems: "center",
    height: 50,
    margin: 25,
    marginBottom: 10,
    marginTop: 50
  },
  titleContainer: {
    width: "85%",
    margin: 30,
  },
  fastContainer: {
    width: "85%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
