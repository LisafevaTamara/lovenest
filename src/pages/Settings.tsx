/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { file_types } from '../file_storage/filestorage_type';

export const ToDoItemComponent: React.FC<{
  todo: file_types;
}> = ({ todo: {id, name, path, cdate}}) => {
  return (
    <View>
      <View>
        <Text>
          {id} + {path} + {name} + {cdate};
        </Text>
      </View>
    </View>
  );
};

