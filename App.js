import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";
import React, { useState } from "react";
import _ from "lodash";
const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;
const Content = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
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
  flex: 1;
  border: 1px solid #e5e5e5;
`;
const Button = styled.Button``;

export default function App() {
  const [list, setList] = React.useState([
    { key: "1", todo: "할 일 1" },
    { key: "2", todo: "할 일 2" },
    { key: "3", todo: "할 일 3" },
    { key: "4", todo: "할 일 4" },
    { key: "5", todo: "할 일 5" },
    { key: "6", todo: "할 일 6" },
  ]);

  const [inputTodo, setInputTodo] = useState("할 일 입력");
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Content>
          {list.map((item) => {
            return (
              <TodoItem key={item.key}>
                <TodoItemText>{item.todo}</TodoItemText>
                <TodoItemButton
                  title="삭제"
                  onPress={() => {
                    const rejectedList = _.reject(
                      list,
                      (element) => element.key === item.key
                    );
                    setList(rejectedList);
                  }}
                ></TodoItemButton>
              </TodoItem>
            );
          })}
        </Content>
        <InputContainer>
          <Input
            value={inputTodo}
            onChangeText={(value) => setInputTodo(value)}
          />
          <Button
            title="전송"
            onPress={() => {
              if (inputTodo === "") {
                alert("할 일을 작성해주세요");
                return;
              }
              const newItem = {
                key: new Date().getTime().toString(),
                todo: inputTodo,
              };
              setList([...list, newItem]);
              setInputTodo("");
            }}
          ></Button>
        </InputContainer>
      </KeyboardAvoidingView>
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
