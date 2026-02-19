import { useRouter } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Card = () => {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.description}>Este é um componente de card sobre React Native.</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('/card')}>
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 15,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#4a4138ff',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default Card;
