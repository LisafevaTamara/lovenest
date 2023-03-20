/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import moment from 'moment';
import { useEffect, useState } from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { file_types } from './filestorage_type';
//import { getFiles } from './funct.js';
// import RNFS from 'react-native-fs';


const tableName = 'todoFiles';

enablePromise(true);

export const getDBConnection = async () => { //создание бд
  return openDatabase({ name: 'filestorage10.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => { //создание таблицы
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        name TEXT NOT NULL ,
        path TEXT NOT NULL,
        cdate TEXT NOT NULL
    );`;

  await db.executeSql(query);
};
//Вывод по ID
export const getFileByID = async (db: SQLiteDatabase, id: string): Promise<file_types[]> => {
  try {
    const todoItems: file_types[] = [];
    const results = await db.executeSql(`SELECT rowid as id, name, path, cdate FROM ${tableName} WHERE id =${id}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};
// вывод по URL
export const getFileByURL = async (db: SQLiteDatabase, url: string): Promise<file_types[]> => {
  try {
    const todoItems: file_types[] = [];
    const results = await db.executeSql(`SELECT rowid as id FROM ${tableName} WHERE path = "${url}" `);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};
//Нужно для времени
export const getFileByIDfTime = async (db: SQLiteDatabase, id: string): Promise<file_types[]> => {
  try {
    const todoItems: file_types[] = [];
    const results = await db.executeSql(`SELECT cdate FROM ${tableName} WHERE id = "${id}" `);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const SaveFile = async (db: SQLiteDatabase,x: string, url: string, z:string) => { //разбивка файлов
  const insertQuery =
  `INSERT OR REPLACE INTO ${tableName}(name, path, cdate) values ('${x}', '${url}', '${z}')`;    //${RNFS.DocumentDirectoryPath}
  return db.executeSql(insertQuery);
};

export const updateTodoItem = async (db: SQLiteDatabase, todoItem: file_types) => {
  const updateQuery =
    `UPDATE ${tableName} SET ` +
    Object.entries(todoItem)
      .map(entry => {
        const [key, value] = entry;
        if (key !== 'id') {
          return `${key} = ${value} `;
        } else {
          return '';
        }
      })
      .join(' ') +
    ` WHERE rowid = ${todoItem.id}`;
  return db.executeSql(updateQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
};

export const Neww = async () => { //работа с бд
  const [todos, setTodos] = useState<file_types[]>([]);
  const [Intodos, setInTodos] = useState<file_types[]>([]);

  const time = async (now: string, then: string) => {//доделать Нужно добавить дату загрузки из базы данных в функцию для сравнения текущей и загрузочной даты
    var ms = moment(now,'MM/DD/YYYY HH:mm:ss').diff(moment(then,'MM/DD/YYYY HH:mm:ss'));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss');
    s.split(':')[0];
    let x = Number(s);
    return x;
  };

  const fileLoad = async () => { //указания, какой файл нужно загружать
    let dirs = ReactNativeBlobUtil.fs.dirs;
    //let filecreate = dirs.DocumentDir + '/' + newName;
    ReactNativeBlobUtil
        .config({
            path: dirs.DocumentDir + '/' + 'anyfile.jpg',
            // название файла
        })
        .fetch('GET', '', { // ссылка,которую надо вставить
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

  const selectItem = async (id: string) => { //вывод по id
    try {
      const db = await getDBConnection();
      const storedTodoItems = await getFileByID(db, ''); // второе значение - id, value которого нужно вывести
      setTodos(storedTodoItems);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFile = async (name: string, url: string ) => { // загрузка файла
    const db = await getDBConnection();
    let noww = moment().format('L'); // задаём настоящее время
    let b = moment().format('LTS');  //...
    b = b.slice(0,-3);               //...
    noww = noww + ' 0' + b;          //...
    const storedTodoSel = await getFileByURL(db,url); // Нужно получить id
    if (storedTodoSel.length){ // проверка на существование файла с таким же url
      const storedTime = getFileByIDfTime(db, '6');
      const modtime = JSON.stringify(storedTime);
      const mew = await time(noww,modtime);
      if (mew >= 336){ // проверка на двухнедельную давность
        console.log('ewh');
      } else {
        setInTodos(storedTodoSel);
        return;
      }
    }
    await fileLoad();
    await SaveFile(db, name, url, noww);
  };
};
