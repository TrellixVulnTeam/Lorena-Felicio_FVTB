import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Button, ButtonText } from "../style";
import {
  Login,
  Input,
  Title,
  GoogleBtn,
  FacebookBtn,
  Container,
  Text,
  TextBox,
} from "./style";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default function Registro({ navigation }) {
  return (
    <Container>
      <Container>
        <Image source={require("@assets/main_logo.png")} />
      </Container>
      <Login>
        <View style={styles.titleContainer}>
          <Title>Registrar</Title>
        </View>
        <Input placeholder="Usuário" placeholderTextColor="#e8cbbb" />
        <Input placeholder="Email" placeholderTextColor="#e8cbbb" />
        <Input placeholder="Senha" placeholderTextColor="#e8cbbb" />
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate("Second")}
        >
          <Button>
            <ButtonText>Criar Conta</ButtonText>
          </Button>
        </TouchableOpacity>
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
    marginTop: 50,
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
