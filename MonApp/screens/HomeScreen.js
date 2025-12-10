import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const dynamicId = Math.floor(Math.random() * 100) + 1; // ID aléatoire

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Accueil </Text>
            
            <View style={styles.infoBlock}>
                < Text style={styles.infoTitle}>  Bienvenue</Text>
                <Text style={styles.infoText}>
                    
                </Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('Details', { id: dynamicId })}
            >
                <Text style={styles.buttonText}>
                    Voir Détails (ID: {dynamicId})
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 40,
        backgroundColor: '#FFFFFF' // Blanc principal
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E3A8A', // Bleu Foncé
        marginBottom: 30,
    },
    infoBlock: {
        width: '90%',
        padding: 20,
        marginBottom: 40,
        backgroundColor: '#F8E9EB', // Rose Pâle (Arrière-plan secondaire)
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000', // Noir
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#4B5563', // Gris Foncé
        lineHeight: 24,
    },
    buttonContainer: {
        backgroundColor: '#1E3A8A', // Bleu Foncé pour l'action principale
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    }
});

export default HomeScreen;