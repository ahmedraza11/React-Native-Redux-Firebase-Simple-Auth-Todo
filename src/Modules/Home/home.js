import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { COUNTER_ADD, COUNTER_MIN } from '../../Store/Actions/counter.Action';

function mapStateToProps(state) {
    return {
        counter: state.CounterReducer.counter,
        username: state.LoginReducer.authUser.name,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incre: () => dispatch({ type: COUNTER_ADD }),
        decre: () => dispatch({ type: COUNTER_MIN }),
    }
}

class HomeComponent extends Component {
    static navigationOptions = {
        title: 'Counter',
        header: null
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                    rightComponent={<TouchableOpacity><Icon name="power-settings-new" onPress={()=>navigate('LoginScreen')}/></TouchableOpacity>}
                />
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{this.props.username}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>{this.props.counter}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Counter</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', width: 70, marginBottom: 50, justifyContent: 'space-between', marginTop: 20 }}>
                        <Button title="+" onPress={() => this.props.incre()} />
                        <Button title="-" color="orange" onPress={() => this.props.decre()} />
                    </View>
                    <Button title="Todo App" onPress={() => navigate('TodoScreen')} />
                </View>
            </View>
        )
    }
}
export let Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);