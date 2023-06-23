import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { colors } from "../styles";

const validationSchema = yup.object().shape({
  name: yup.string().required("Por favor, escribe tu nombre."),
  email: yup
    .string()
    .email("Por favor, escribe un correo electrónico válido.")
    .required("Por favor, escribe tu correo electrónico."),
  comment: yup
    .string()
    .max(500, "El comentario no puede superar los 500 caracteres.")
    .required("Por favor, escribe tu comentario."),
});

const FormikForm = () => {
  const handleFormSubmit = (values) => {
    axios
      .post("https://example.com/endpoint", values)
      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Posted data", JSON.stringify(values));
        } else {
          Alert.alert("Error", "Error");
        }
      })
      .catch((error) => {
        Alert.alert("Data", JSON.stringify(values));
      });
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 20 }}>Comentarios</Text>

      <Formik
        initialValues={{ name: "", email: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="Tu nombre"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              style={[
                styles.input,
                touched.name && errors.name && styles.errorInput,
              ]}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              placeholder="Correo electrónico"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={[
                styles.input,
                touched.email && errors.email && styles.errorInput,
              ]}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              value={values.comment}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              placeholder="Comentario (max. 500 caracteres)"
              multiline
              maxLength={500}
              style={[
                styles.input,
                touched.comment && errors.comment && styles.errorInput,
              ]}
            />
            {touched.comment && errors.comment && (
              <Text style={styles.errorText}>{errors.comment}</Text>
            )}

            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.text}>ENVIAR</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.main,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    color: "#fff",
  },
  errorInput: {
    borderColor: "red",
  },
});

export default FormikForm;
