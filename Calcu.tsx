import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [resultado2, setResultado2] = useState(null);

  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
    } else {
      setResultado(n1 + n2);
    }
  };

  const sub = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
    } else {
      setResultado2(n1 - n2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.botao}>
        <Button title="Somar" onPress={somar} />
      </View>

      <View style={styles.botaosub}>
        <Button title="Subtração" onPress={sub} />
      </View>

      {resultado !== null && (
        <Text style={styles.resultado}>A soma do seu resultado é: {resultado}</Text>
      )}

      {resultado2 !== null && (
        <Text style={styles.resultado}>A subtração do resultado é: {resultado2}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#98FB98",
    padding: 15,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 3,
    borderColor: "#FFFF00",
    backgroundColor: "#F0FFFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
  },
  botao: {
    width: "50%",
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 170,
  },

    botaosub: {
    width: "50%",
    marginVertical: -53,
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 150,
  },

  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  
});
