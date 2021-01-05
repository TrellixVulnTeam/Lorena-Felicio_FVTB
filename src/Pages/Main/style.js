import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e8cbbb;
`;

export const Login = styled.View`
  width: 95%;
  flex: 2;
  background-color: white;
  align-items: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const Title = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 30px;
  color: #e8cbbb;
`;

export const GoogleBtn = styled.View`
  border-radius: 20px;
  height: 50px;
  width: 160px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-width: 1px;
  border-radius: 20px;
  border-color: #ddd;
`;

export const FacebookBtn = styled.View`
  border-radius: 20px;
  height: 50px;
  width: 160px;
  align-items: center;
  justify-content: center;
  background-color: #1877f2;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 50px;
  margin: 10px;
  font-family: "Poppins_500Medium";
  font-size: 18px;
  align-items: center;
  padding-left: 5px;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #e8cbbb;
`;


export const Text = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 16px;
  line-height: 20px;
  color: #e8cbbb;
  margin: 10px;
  margin-bottom: 40px;
  margin-top: 0px;
  margin-left: 20px;
`;

export const TextBox = styled.View`
  margin: auto;
  width: 100%;
  justify-content: center;
  flexDirection: row;
`;