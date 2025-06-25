import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Button } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function UserList() {

    //States to Handle data fetching , loading , seacrching , error
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const navigation = useNavigation()

    const api = "https://jsonplaceholder.typicode.com/users";

    //fetching Data from the API
    async function fetchUserApi() {
        try {
            setError(null) // SetError null when error is resolved
            const response = await fetch(api)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            setData(data)
            // console.log(data)
        }
        catch (e) {
            console.error(e)
            setError('Failed to load users. Please try again.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }

    //Call the fetchUserApi() when the component is mount 
    useEffect(() => {
        fetchUserApi();
    }, [])

    //Logic to show the results on the basis of name and email
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRefresh = () => {
        setRefreshing(true);
        fetchUserApi();
    };

    return (
        <View style={styles.container}>
            {/* Loading indicator while fetching data */}
            {loading ? (
                <ActivityIndicator size="80" color="#FFA07A" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
            ) :
                // Add error handling with retry button
                error ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                        <Button title="Retry" color="#FFA07A" onPress={() => {
                            setLoading(true);
                            fetchUserApi();
                        }} />
                    </View>
                ) : (
                    <>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search by name or email"
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                            placeholderTextColor="#999"
                        />
                        <FlatList
                            data={filteredData}
                            keyExtractor={(item) => item.id.toString()}
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("UserDetails", { ...item })}>
                                    <View style={styles.card}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.subtitle}>{item.email}</Text>
                                        <Text style={styles.subtitle}>{item.address.city}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#FFA07A",
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        fontSize: 16,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    errorText: {
        fontSize: 16,
        color: '#FF6347',
        marginBottom: 12,
        textAlign: 'center',
    },
});