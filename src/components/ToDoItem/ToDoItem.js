import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import styles from "./ToDoItem.styles";

const ToDoItem = (props) => {
  const [active, setActive] = useState(props.task.isDone);

  const onPress = () => {
    setActive(!active);
  }

  const doneButtonStyle = {
      backgroundColor: active ? '#738a96' : '#7da453',
    };
    const doneTextStyle = {
        textDecorationLine: active ? 'line-through' : 'none',
        color: active ? '#808080' : '#d1d1d1',
    }


  return (
    <Pressable
      style={[styles.container,doneButtonStyle ]}
      onPress={onPress}
    >
      <Text style={[styles.item_text, doneTextStyle]}>{props.task.title}</Text>
    </Pressable>
  );
};

export default ToDoItem;
