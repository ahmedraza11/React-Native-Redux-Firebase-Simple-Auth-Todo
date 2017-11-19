import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { COUNTER_ADD, COUNTER_MIN } from '../../Store/Actions/counter.Action';

function mapStateToProps(state) {
    return {
        counter: state.CounterReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incre: () => dispatch({type: COUNTER_ADD}),
        decre: () => dispatch({type: COUNTER_MIN}),
    }
}

class HomeComponent extends Component {
    static navigationOptions = {
        title: 'Counter'
    }
    render() {
        return (
            <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>{this.props.counter}</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Counter</Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: 70, justifyContent: 'space-between', marginTop: 20 }}>
                    <Button title="+" onPress={()=>this.props.incre()}/>
                    <Button title="-" color="orange" onPress={()=>this.props.decre()} />
                </View>
            </View>
        )
    }
}
export let Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);