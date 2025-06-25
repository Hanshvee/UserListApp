import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";

export default function UserList() {
    const [data, setData] = useState([]);

    const api = "https://jsonplaceholder.typicode.com/users";

    async function fetchUserApi() {
        try {
            const response = await fetch(api)
            const data = await response.json()
            setData(data)
            // console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUserApi();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            <Pressable>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.subtitle}>{item.email}</Text>
                                <Text style={styles.subtitle}>{item.address.city}</Text>
                            </Pressable>

                        </View>
                    </View>
                )}
            />
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
});