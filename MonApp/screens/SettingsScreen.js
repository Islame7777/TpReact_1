import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [themeEnabled, setThemeEnabled] = useState(false);
    const [username, setUsername] = useState('User');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuration de l'Application</Text>
            
            {/* Paramètre 1 : Switch */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Activer les Notifications</Text>
                <Switch
                    onValueChange={setNotificationsEnabled}
                    value={notificationsEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#F06292" }} // Rose Vif pour ON
                    thumbColor={notificationsEnabled ? "#1E3A8A" : "#F4F3F4"} // Bleu Foncé pour le bouton
                />
            </View>

            {/* Paramètre 2 : Switch */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Mode Sombre (Beta)</Text>
                <Switch
                    onValueChange={setThemeEnabled}
                    value={themeEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#1E3A8A" }} // Bleu Foncé pour ON
                    thumbColor={themeEnabled ? "#F8E9EB" : "#F4F3F4"} // Rose Pâle
                />
            </View>
            
            {/* Paramètre 3 : Input text */}
            <Text style={styles.inputLabel}>Nom d'utilisateur :</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setUsername}
                value={username}
                placeholder="Entrez votre nom"
                placeholderTextColor="#A0AEC0"
            />
            
            <Text style={styles.footerText}>
                Vos modifications sont enregistrées automatiquement.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 25,
        paddingTop: 30,
        backgroundColor: '#FFFFFF' // Blanc
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E3A8A', // Bleu Foncé
        marginBottom: 40,
        textAlign: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F8E9EB', // Rose Pâle
    },
    settingLabel: {
        fontSize: 18,
        color: '#000000', // Noir
        fontWeight: '500',
    },
    inputLabel: {
        fontSize: 16,
        color: '#4B5563',
        marginTop: 40,
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        borderColor: '#1E3A8A',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#F8E9EB', // Rose Pâle pour l'input
    },
    footerText: {
        marginTop: 60,
        fontSize: 14,
        color: '#9CA3AF',
        textAlign: 'center',
    }
});

export default SettingsScreen;