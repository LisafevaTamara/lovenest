/* eslint-disable prettier/prettier */
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { ToDoItem } from './Practic';



const tableName = 'todoData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'memess2.db', location: 'default' });
};
 //createFromLocation: '~data/data/com.reformapp/databases/garbaged.DBConnection'
export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value2 TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
  try {
    const todoItems: ToDoItem[] = [];
    const results = await db.executeSql(`SELECT rowid as id,value2 FROM ${tableName}`);
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

export const saveTodoItems = async (db: SQLiteDatabase, todoItems: ToDoItem[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value2) values` +
    todoItems.map(i => `(${i.id}, '${i.value2}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};


export const updateTodoItem = async (db: SQLiteDatabase, todoItem: ToDoItem) => {
  // обновление данных
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
