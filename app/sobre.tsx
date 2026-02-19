import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Detalhes() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Sobre</Text>
            <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
            <Text style={styles.description}>Este é um aplicativo de exemplo criado para demonstrar a navegação entre telas usando o Expo Router.</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#919191ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: "#c7c7c7ff",
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        color: '#202020ff',
        marginBottom: 28,
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
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: "center",
        marginBottom: 30,
    },
})