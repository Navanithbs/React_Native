import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import isEqual from 'is-equal';
import watch from 'redux-watch';
import {
  Container,
  Item,
  Input,
  Header,
  Body,
  Content,
  Title,
  Button,
  Text,
} from 'native-base';
import LoadingIndicator from '../../components/LoadingIndicator';
import store from '../../store';
import { login, tokenRequest } from '../../actions/authActions';
import axios from 'axios';

const validate = values => {
  const error = {};
  error.email = '';
  error.name = '';
  var ema = values.email;
  var nm = values.name;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.name === undefined) {
    nm = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (nm.length > 8) {
    error.name = 'max 8 characters';
  }
  return error;
};

class SignInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  submit = async values => {
    this.props.tokenRequest();
    this.props.login(values);
  };

  componentWillMount() {
    console.log(this.props.isLoading);
    let w = watch(store.getState, 'auth.token', isEqual);
    this.unsubscribe = store.subscribe(
      w((newVal, oldVal, objectPath) => {
        AsyncStorage.setItem('authToken', newVal).then(() => {
          this.props.navigation.navigate('GCL');
        });
      })
    );
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
              placeholder="Username"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              name="username"
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
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

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
const mapActionToProps = { login, tokenRequest };

export default reduxForm({
  form: 'signin',
  //validate,
})(
  connect(
    mapStateToProps,
    mapActionToProps
  )(SignInScreen)
);
