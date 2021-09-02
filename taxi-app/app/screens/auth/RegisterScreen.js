import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import uniqid from 'uniqid';
import humanparser from 'humanparser';
import { tokenRequest, register } from '../../actions/authActions';
import LoadingIndicator from '../../components/LoadingIndicator';

class RegisterScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  submit = async values => {
    const { firstName, lastName } = humanparser.parseName(values.fullname);
    const userData = {
      username: uniqid(firstName + '_'),
      password: values.password,
      phone_number: values.phone_number,
      email: values.email,
      first_name: firstName,
      last_name: lastName,
    };
    console.log(userData);

    this.props.tokenRequest();
    this.props.register(userData)
  };

  componentWillMount() {
    this.setState({
      isLoading: false,
    });
  }

  renderInput = ({
    placeholder,
    returnKeyType,
    keyboardType,
    label,
    type,
    autoCorrect,
    secureTextEntry,
    input: { onSubmitEditing, ref, ...restInput },
    meta: { touched, error, warning },
  }) => {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="rgba(225,225,225,0.7)"
        autoCorrect={autoCorrect}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        style={styles.input}
        ref={ref}
        {...restInput}
      />
    );
  };

  render() {
    const {
      error,
      handleSubmit,
      pristine,
      reset,
      submitting,
      isLoading,
    } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <LoadingIndicator visible={isLoading} />
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../assets/snack-icon.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formInputcontainer}>
            <StatusBar barStyle="light-content" />
            <Field
              secureTextEntry={false}
              placeholder="Full Name"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              name="fullname"
              component={this.renderInput}
            />
            <Field
              secureTextEntry={false}
              placeholder="Mobile Number"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="number"
              returnKeyType="next"
              autoCorrect={false}
              name="phone_number"
              component={this.renderInput}
            />
            <Field
              secureTextEntry={false}
              placeholder="email"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              name="email"
              component={this.renderInput}
            />
            <Field
              secureTextEntry
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              placeholder="Password"
              name="password"
              component={this.renderInput}
            />
            <TouchableOpacity
              disabled={submitting}
              style={styles.buttonContainer}
              onPress={handleSubmit(this.submit)}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fb9403',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },
  formInputcontainer: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    isLoading: state.auth.isLoading,
  };
};
const mapActionToProps = { register, tokenRequest };

export default reduxForm({
  form: 'register',
  //validate,
})(
  connect(
    mapStateToProps,
    mapActionToProps
  )(RegisterScreen)
);
