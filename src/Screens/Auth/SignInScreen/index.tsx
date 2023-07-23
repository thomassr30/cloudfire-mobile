import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useContext, useEffect} from 'react';

import * as Yup from 'yup';
import {Formik} from 'formik';

import styles from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {COLORS} from '../../../constant/colors';
import {AuthContext} from '../../../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un correo electronico valido')
    .required('Debes ingresar un correo electronico'),
  password: Yup.string().required('Debes ingresar la contraseña'),
});

const SignInScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Error', errorMessage, [{text: 'Ok', onPress: removeError}]);
  }, [errorMessage]);

  const handleFormSubmit = (values: any, {resetForm}: any) => {
    const {email, password} = values;
    signIn({correo: email, contrasena: password});
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>Ingrese sus datos para ingresar</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid = false,
        }) => (
          <View style={styles.containerForm}>
            <View style={{marginBottom: 30}}>
              <Text style={styles.label}>Correo</Text>
              <TextInput
                style={styles.input}
                placeholder="nombre@ejemplo.cl"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                selectionColor={COLORS.green}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.textError}>{errors.email}</Text>
              )}
            </View>

            <View>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su contraseña"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                selectionColor={COLORS.green}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.textError}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => navigation.navigate('RecoverPassScreen')}>
                <Text style={styles.forgotPass}>¿Olvidaste tú contraseña?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.btnLogIn}>
                <Text style={styles.btnText}>Ingresar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.newAcount}
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.newAcountText}>
                ¿Aún no tienes una cuenta?
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SignInScreen);
