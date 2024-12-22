import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8000/api/'; 

export default function Auth() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [registerLogin, setRegisterLogin] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    
    const saveToken = async (token) => {
        try {
            await AsyncStorage.setItem('access_token', token);
            console.log('Token saved!');
        } catch (error) {
            console.error('Error saving token', error);
        }
    };

    
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('access_token');
            if (token !== null) {
                return token;
            } else {
                console.log('No token found');
            }
        } catch (error) {
            console.error('Error retrieving token', error);
        }
    };

    
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('access_token');
            console.log('Logged out');
            Alert.alert('Logged out', 'You have successfully logged out');
        } catch (error) {
            console.error('Error logging out', error);
            Alert.alert('Logout failed', 'Something went wrong');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API_URL}token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: login,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const { access, refresh } = data;
                console.log('Access Token:', access);
                
                await saveToken(access);
                
                console.log('Login Successful');
            } else {
                const errorData = await response.json();
                console.error('Login Error:', errorData);
                Alert.alert('Login failed', 'Incorrect username or password');
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Login Error:', error);
            Alert.alert('Login failed', 'Something went wrong');
            console.log('Login failed');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await fetch(`${API_URL}register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: registerLogin,  
                    password: registerPassword,
                }),
            });
    
            if (response.ok) {
                Alert.alert('Registration Successful', 'You can now log in.');
                console.log('Registration Successful');
            } else {
                const errorData = await response.json();
                console.error('Registration Error:', errorData);
                Alert.alert('Registration failed', 'Please try again.');
                console.log('Registration failed');
            }
        } catch (error) {
            console.error('Registration Error:', error);
            Alert.alert('Registration failed', 'Something went wrong');
            console.log('Registration failed');
        }
    };
    

    return (
        <View style={styles.container}>
            
            <View style={styles.authSection}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Login"
                    value={login}
                    onChangeText={setLogin}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <Button title="Login" onPress={handleLogin} color="#0066cc" />
            </View>

            
            <View style={styles.authSection}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    placeholder="Login"
                    value={registerLogin}
                    onChangeText={setRegisterLogin}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={registerPassword}
                    secureTextEntry
                    onChangeText={setRegisterPassword}
                    style={styles.input}
                />
                <Button title="Register" onPress={handleRegister} color="#28a745" />
            </View>

            {/* Logout Section */}
            <View style={styles.authSection}>
                <Button title="Logout" onPress={logout} color="#d9534f" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f4f9',
    },
    authSection: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: 16,
    },
});
