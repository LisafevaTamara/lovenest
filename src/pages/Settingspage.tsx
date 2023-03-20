/* eslint-disable prettier/prettier */
import React, {
  SafeAreaView,
  View,
  TextInput,
  Button,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import moment from 'moment';
import {useEffect, useState} from 'react';
import { ToDoItemComponent } from './Settings';
import {
  getDBConnection,
  createTable,
  SaveFile,
  getFileByID,
  getFileByURL,
  getFileByIDfTime,
} from '../file_storage/filestorage';
import { file_types } from '../file_storage/filestorage_type';

//export default function ({navigation}: Props) {};
 export const Neww = async () => { //работа с бд
  const [newName, setNewName] = useState('');
  const [newURL, setNewURL] = useState('');
  const [newID, setNewId] = useState('');
  const [todos, setTodos] = useState<file_types[]>([]);
  const [intodos, setInTodos] = useState<file_types[]>([]);

  const time = async (now: string, then: string) => {//доделать Нужно добавить дату загрузки из базы данных в функцию для сравнения текущей и загрузочной даты
    var ms = moment(now,'MM/DD/YYYY HH:mm:ss').diff(moment(then,'MM/DD/YYYY HH:mm:ss'));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss');
    s.split(':')[0];
    let x = Number(s);

    return x;
  };


  const testtt = async () => {
    let dirs = ReactNativeBlobUtil.fs.dirs;
    let filecreate = dirs.DocumentDir + '/' + newName;

    ReactNativeBlobUtil
        .config({
            // response data will be saved to this path if it has access right.
            path: filecreate,
        })
        .fetch('GET', newURL, {
            //some headers ..
        })
        .then((res) => {
            // the path should be dirs.DocumentDir + 'path-to-file.anything'
            console.log('The file saved to ', res.path());
        });
  };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const Settingspage = async () => {
    const db = await getDBConnection(); //Подключение к БД
    await createTable(db); //Создание таблиц
  };
  useEffect(() => {
    Settingspage();
  }, [Settingspage]);
  const selectItem = async (id: string) => {
    try {
      const db = await getDBConnection();
      const storedTodoItems = await getFileByID(db,id);
      setTodos(storedTodoItems);
    } catch (error) {
      console.error(error);
    }
  };


  const loadFile = async (name: string, url: string ) => {
    const db = await getDBConnection();
    let noww = moment().format('L'); // задаём настоящее время
    let b = moment().format('LTS');  //...
    b = b.slice(0,-3);               //...
    noww = noww + ' 0' + b;          //...
    const storedTodoSel = await getFileByURL(db,url); // Нужно получить id
    if (storedTodoSel.length){
      const storedTime = getFileByIDfTime(db, '6');
      const modtime = JSON.stringify(storedTime);
      const mew = await time(noww,modtime);
      if (mew >= 1){
        console.log('ewh');
      } else {
        setInTodos(storedTodoSel);
        return;
      }
    }
    await testtt();
    await SaveFile(db, name, url, noww);
  };
  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder= "FILENAME" value={newName} onChangeText={text => setNewName(text)}/>
        <TextInput placeholder="URL" value={newURL} onChangeText={text => setNewURL(text)}/>
        <Button
        onPress={() => loadFile(newName,newURL)}
        title="Add user"
        accessibilityLabel="add todo item"/>
        {intodos.map((todo) => (
             <ToDoItemComponent key={todo.id} todo={todo} /*deleteItem={deleteItem}*/ />
          ))}
      </View>
      <View>
      <TextInput placeholder="ID" value={newID} onChangeText={text => setNewId(text) } keyboardType="numeric"/>
          <Button
            onPress={() => selectItem(newID)}
            title="Add ToDo"
            color="#841584"
            accessibilityLabel="add todo item"
          />
          {todos.map((todo) => (
             <ToDoItemComponent key={todo.id} todo={todo} /*deleteItem={deleteItem}*/ />
          ))}
      </View>
    </SafeAreaView>
  );
};



