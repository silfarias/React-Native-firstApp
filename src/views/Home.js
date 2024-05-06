import { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";

export const Home = ({ navigation }) => {
    
  const [contador, setContador] = useState(0);
  const [ejecutarFuncion, setEjecutarFuncion] = useState(false);

  useEffect(() => {
    if (ejecutarFuncion) {
      console.log("El contador cambió: " + contador);
    } else {
      setEjecutarFuncion(true);
    }
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>

      <Button title="Aumentar" onPress={() => setContador(contador + 1)} color={"green"} />
      <Button title="Disminuir" onPress={() => setContador(contador - 1)} />

      <Button 
        title="Ir a Prueba"
        onPress={() => navigation.navigate("Prueba")}
      ></Button>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
