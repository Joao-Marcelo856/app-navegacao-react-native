import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card() {
    const router = useRouter();
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.title}>Sobre React Native</Text>
                <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                <Text style={styles.description}>O react native é uma biblioteca de desenvolvimento de aplicativos móveis, ele permite criar aplicativos
                    nativos para iOS e Android usando JavaScript e React.</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
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
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        margin: 20,
    },
    content: {
        padding: 15,
    },
})