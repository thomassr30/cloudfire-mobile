import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useContext} from 'react';

import * as Yup from 'yup';
import {Formik} from 'formik';

import styles from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {COLORS} from '../../../constant/colors';
import {AuthContext} from '../../../context/AuthContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Debes ingresar tú nombre'),
  lastName: Yup.string().required('Debes ingresar tú apellido'),
  email: Yup.string()
    .email('Ingresa un correo electronico valido')
    .required('Debes ingresar un correo electronico'),
  password: Yup.string().required('Debes ingresar la contraseña'),
});

interface Props extends StackScreenProps<any, any> {}

const SignUpScreen = ({navigation}: Props) => {
  const {signUp} = useContext(AuthContext);

  const handleFormSubmit = (values: any, {resetForm}: any) => {
    const {name, lastName, email, password} = values;
    signUp({
      nombre: name,
      apellPat: lastName,
      correo: email,
      contrasena: password,
    });
    resetForm();
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Nueva cuenta</Text>
      </View>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
        }}
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
            <View style={{marginBottom: 15}}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                autoCapitalize="words"
                autoCorrect={false}
                keyboardType="default"
                selectionColor={COLORS.green}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>

            <View style={{marginBottom: 15}}>
              <Text style={styles.label}>Apellido</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su apellido"
                autoCapitalize="words"
                autoCorrect={false}
                keyboardType="default"
                selectionColor={COLORS.green}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
            </View>

            <View style={{marginBottom: 15}}>
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
            </View>

            <TouchableOpacity
              style={styles.btnRegister}
              onPress={() => handleSubmit()}>
              <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.newAcount}
              onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.newAcountText}>¿Ya tienes una cuenta?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SignUpScreen);
