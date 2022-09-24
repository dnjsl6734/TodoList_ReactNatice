import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Content = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
  border: 1px solid #ff0000;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  flex: 1;
  font-size: 20px;
`;
const TodoItemButton = styled.Button``;

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Button = styled.Button``;

export default function App() {
  return (
    <Container>
      <Content>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제" onPress={() => {}}></TodoItemButton>
        </TodoItem>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제" onPress={() => {}}></TodoItemButton>
        </TodoItem>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제" onPress={() => {}}></TodoItemButton>
        </TodoItem>
      </Content>
      <InputContainer>
        <Input />
        <Button title="전송" onPress={() => {}}></Button>
      </InputContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
