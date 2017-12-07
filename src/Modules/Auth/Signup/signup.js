import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { SignupStyles } from './signupStyles';
import { SignupMiddleware } from '../../../Store/Middlewares/signupMiddleware';

import {
    FormInput,
    FormLabel,
    Button,
    Header
} from 'react-native-elements';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        isProccessing: state.SignupReducer.isProccessing
    }
}
function mapDispachToProps(dispatch) {
    return {
        signup: (cred) => dispatch(SignupMiddleware.signup(cred))
    }
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    static navigationOptions = {
        header: null
    }
    handleSignup() {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        console.log("data ********", data);
        this.props.signup(data);
    }
    render() {
        const { navigate } = this.props.navigation;
        // console.log("Signup Props ********", this.props);

        return (
            <View style={SignupStyles.Main_Container}>
                <Header
                    centerComponent={{ text: 'Sign-up', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: "#FC90AA" }}
                />
                <View>
                    <View style={SignupStyles.Signup_Container}>
                        <FormLabel>Name</FormLabel>
                        <FormInput onChangeText={(txt) => this.setState({ name: txt })} />

                        <FormLabel>Email</FormLabel>
                        <FormInput onChangeText={(txt) => this.setState({ email: txt })} keyboardTyp="email-address" />

                        <FormLabel>Password</FormLabel>
                        <FormInput onChangeText={(txt) => this.setState({ password: txt })} secureTextEntry={true} />

                        {(this.props.isProccessing) ? <ActivityIndicator /> :
                            <Button raised backgroundColor="#FC90AA" title="Signup" onPress={() => this.handleSignup()} />
                        }
                        <View style={SignupStyles.Note}>
                            <Text>Already have a account? </Text><TouchableOpacity onPress={() => navigate('LoginScreen')}><Text style={{ color: "#00BCD4" }}>Login here.</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Signup);