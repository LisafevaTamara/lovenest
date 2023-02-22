import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import CompletionTimeInput from './CompletionTimeInput';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const close = require('../images/popup-close-btn.png');
const addbtn = require('../images/add-input-btn.png');
const applybtn = require('../images/apply-btn.png');
const inpttime = require('../images/input-time.png');
const remove = require('../images/input-remove-btn.png');

export default class CompletionTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInput: [],
      timeVariants: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
      ],
    };
  }

  closeModal = () => {
    this.changeModalVisible(false);
  };

  addTextInput = key => {
    let timeInput = this.state.timeInput;
    timeInput.push(
      <View key={key} style={styles.timeInput}>
        <Text>Уведомление #{key + 1}</Text>
        <CompletionTimeInput></CompletionTimeInput>
        <TouchableOpacity onPress={this.deleteTextInput}>
          <Image source={remove} />
        </TouchableOpacity>
      </View>,
    );
    this.setState({timeInput});
  };

  deleteTextInput = (key) => {
    let timeInput = this.state.timeInput;
    timeInput.pop(key);
    this.setState({timeInput});
  };

  render() {
    return (
      <View style={[styles.modal, styles.elevation]}>
        <View style={styles.closebtn}>
          <TouchableOpacity onPress={() => this.closeModal()}>
            <Image source={close} />
          </TouchableOpacity>
        </View>

        <View style={styles.choosetime}>
          <Text style={styles.txt}>
            Укажите, когда вы можете пройти практику
          </Text>
        </View>

        <View style={styles.body}>
          <View style={{height: 149}}>
            <ScrollView>
              <View>
                {this.state.timeInput.map((value, index) => {
                  return value;
                })}
              </View>
            </ScrollView>
          </View>

          <View style={styles.addapply}>
            <TouchableOpacity
              onPress={() => this.addTextInput(this.state.timeInput.length)}>
              <Image source={addbtn} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={applybtn} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 23,
    paddingHorizontal: 25,
    marginHorizontal: WIDTH / 12,
    marginVertical: HEIGHT / 5,
    width: 319,
    height: 422,
    backgroundColor: '#B394E7',
    borderRadius: 37,
  },
  body: {
    width: 234,
    height: 253,
    marginTop: 90,
    justifyContent: 'space-evenly',
  },
  addapply: {
    height: 94,
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24.2,
    fontWeight: '600',
    width: 189,
    height: 72,
  },
  closebtn: {
    marginLeft: 247,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  choosetime: {
    marginTop: '1%',
    flex: 0.15,
  },
  closetxt: {
    flex: 0.07,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  timeInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
});
