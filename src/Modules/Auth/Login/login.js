import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { LoginStyles } from './loginStyles';
import { LoginMiddleware } from './../../../Store/Middlewares/loginMiddleware';

import {
    FormInput,
    FormLabel,
    Button,
    Header
} from 'react-native-elements';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        isProccessing: state.LoginReducer.isProccessing
    }
}
function mapDispachToProps(dispatch) {
    return {
        login: (cred, navigate) => dispatch(LoginMiddleware.login(cred, navigate))
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    static navigationOptions = {
        header: null
    }
    handleLogin() {
        const { navigate } = this.props.navigation;
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log("data ********", data);
        this.props.login(data, navigate);
    }
    static navigationOptions = {
        header: null
    }
    render() {
        console.log("Login props *************", this.props);
        const { navigate } = this.props.navigation;
        return (
            <View style={LoginStyles.Main_Container}>
                <Header
                    centerComponent={{ text: 'Login', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: "#FC90AA" }}
                />
                <View>
                    <View style={LoginStyles.Login_Container}>
                        <FormLabel>Email</FormLabel>
                        <FormInput keyboardTyp="email-address" onChangeText={(txt) => this.setState({ email: txt })} />

                        <FormLabel>Password</FormLabel>
                        <FormInput secureTextEntry={true} onChangeText={(txt) => this.setState({ password: txt })} />
                        {this.props.isProccessing ? <ActivityIndicator />
                            : <Button raised backgroundColor="#FC90AA" title="Login" onPress={() => this.handleLogin()} />
                        }
                        <View style={LoginStyles.Note}>
                            <Text>Don't have an account? </Text><TouchableOpacity onPress={() => navigate('SignupScreen')}><Text style={{ color: "#00BCD4" }}>Signup here.</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Login);