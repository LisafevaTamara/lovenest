export const updateTodoItem = async (db: SQLiteDatabase, todoItem: Practic) => {
    const updateQuery =
      `UPDATE ${tableName} SET ` +
      Object.entries(todoItem)
        .map(entry => {
          const [key, value] = entry;
          if (key !== '_id') {
            return `${key} = ${value} `;
          } else {
            return '';
          }
        })
        .join(',') +
      ` WHERE _id = '${todoItem._id}'`;
    return db.executeSql(updateQuery);
  };