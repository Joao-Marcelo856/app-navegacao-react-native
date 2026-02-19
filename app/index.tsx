import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
    const router = useRouter();

    const handlePress = () => {
        console.log("Botão clicado!");

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/sobre')}>
                <Text style={styles.buttonText}>Ir para sobre</Text>
            </TouchableOpacity>

            <Button title="Salvar" onPress={handlePress} />
            <Button title="Cancelar" onPress={() => router.back()} />
            <Button title="Confirmar" onPress={handlePress} color="#34c759" />

            <Card />
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
        gap: 4,
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
})