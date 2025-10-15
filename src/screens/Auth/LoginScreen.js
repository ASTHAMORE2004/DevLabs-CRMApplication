import React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Title, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email required'),
  password: Yup.string().required('Password required'),
});

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((s) => s.auth);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title>Login</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const res = await dispatch(loginUser(values));
          if (res.type === 'auth/loginUser/fulfilled') {
            navigation.replace('Customers');
          }
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput label="Email" value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} style={{ marginBottom: 8 }} />
            {touched.email && errors.email && <HelperText type="error">{errors.email}</HelperText>}
            <TextInput label="Password" secureTextEntry value={values.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')} style={{ marginBottom: 8 }} />
            {touched.password && errors.password && <HelperText type="error">{errors.password}</HelperText>}
            {error && <HelperText type="error">{error}</HelperText>}
            <Button mode="contained" onPress={handleSubmit} loading={loading} disabled={loading}>
              Sign In
            </Button>
          </>
        )}
      </Formik>
      <Button onPress={() => navigation.navigate('Register')}>Create account</Button>
    </View>
  );
}
