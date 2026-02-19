import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Detalhes() {
    const router = useRouter();
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Tela de Detalhes</Text>
                <View style={styles.imagesGrid}>
                    <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                    <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                    <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                </View>
                <Text style={styles.description}>Aqui você pode adicionar mais informações.</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>
                        Voltar
                    </Text>
                </TouchableOpacity>



            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#919191ff',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#919191ff',
    },
    imagesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 24,
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
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 16,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: "center",
        marginBottom: 30,
    },
})

