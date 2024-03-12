import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
import ToDoItem from "./src/components/ToDoItem/ToDoItem";

const dummyData = [
  {
    id: "01",
    title: "Wash car",
    isDone: false,
  },
  {
    id:"02",
    title: "Read a book",
    isDone: false,
  }
]

export default function App() {

  const [toDo , setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddToDo = () => {
    //structure od a single todo item { id:  ,  title:  }
    setToDoList([...toDoList,{id: Date.now().toString() , title: toDo , isDone: false}]);  //... spread operatörünü kullanarak önce dizinin kopyasını alıyoruz yoksa nceki değerlerimiz silinir
    setToDo("");
  }


  //render ToDoList
  const renderItem  = ({item,index}) =>{
    return (
      <ToDoItem task = {item} />
    )    
  } 

  useEffect(() => {
    let count = toDoList.filter((todo) => !todo.isDone).length;
    setCounter(count);
  },[renderItem,ToDoItem.onPress])
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.header_text}>Yapılacaklar</Text>
        <Text style={styles.todo_counter}>{counter}</Text>
      </View>

      <View  style = {styles.list_container}>
        <FlatList
          keyExtractor={item => item.id}
          data={toDoList}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.input_container}>
        <TextInput
          placeholder="Yapılacak..."
          style={styles.todo_input}
          value={toDo}
          onChangeText={(userText) => setToDo(userText)}
        />

        <Pressable style={styles.btn_save} 
        onPress={() => handleAddToDo()}
        >
          <Text style={styles.btn_text}>Kaydet</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  info_container: {
    margin: 10,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    fontSize: 40,
    color: "#ffa500",
    fontWeight: "bold",
  },
  todo_counter: {
    fontSize: 40,
    color: "#ffa500",
  },
  list_container: {
    flex: 1,
  },
  input_container: {
    margin: 10,
    marginBottom: 25,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#37474f',
  },
  todo_input: {
    borderBottomWidth: 1,
    borderColor: "#738a96",
    margin: 10,
    paddingHorizontal: 6,
    paddingVertical: 6,
    fontSize: 20,
    color: "#d1d1d1",
  },
  btn_save: {
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#808080",
    fontSize: 20,
    color: "#d1d1d1",
  },
  btn_text: {
    color: "#d1d1d1",
    fontSize: 18,
  },
});
