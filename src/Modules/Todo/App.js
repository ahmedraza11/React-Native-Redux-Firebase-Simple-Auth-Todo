import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

export default class Todo extends Component {
  static navigationOptions = {
    title: 'Todo App'
  }
  constructor(props) {
    super(props);
    this.state = {
      items: ['Hello'],
      text: '',
      updateMode: false,
      selectedItem: null
    }
  }

  add() {
    this.setState({
      items: this.state.items.concat(this.state.text),
      text: ''
    });
  }

  update() {
    const todoList = this.state.items;
    const updatedText = this.state.text;
    const i = this.state.selectedItem;
    todoList.splice(i, 1, updatedText);
    this.setState({
      items: todoList,
      text: ''
    })
  }

  delete(i) {
    const todoList = this.state.items;
    todoList.splice(i, 1);
    this.setState({
      items: todoList
    })
  }

  render() {
    return (
      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextInput value={this.state.text} style={{ width: '100%' }} onChangeText={(e) => { this.setState({ text: e }) }} />
        {this.state.updateMode ?
          <Button title="Update" buttonStyle={{ width: '100%' }} backgroundColor="orange" onPress={() => this.update()} />
          : <Button title="Add" buttonStyle={{ width: '100%' }} backgroundColor="green" onPress={() => this.add()} />
        }
        <View style={{ width: '80%', padding: 10, borderWidth: 1 }}>
          {this.state.items.map((v, i) => (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={i}>
              <Text>{v}</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.delete(i)}>
                  <Text style={{ color: 'red', marginRight: 10 }}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ selectedItem: i, updateMode: !this.state.updateMode })}>
                  <Text style={{ color: 'orange' }}>Upd</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
