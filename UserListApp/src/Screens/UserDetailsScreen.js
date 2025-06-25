import { View, Text, FlatList, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";


export default function UserDetailsScreen({ route }) {
    const { name, email, phone, address, company } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.card}>
                <Text style={styles.heading}>User Details</Text>

                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{name}</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{email}</Text>

                <Text style={styles.label}>Phone</Text>
                <Text style={styles.value}>{phone}</Text>

                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </Text>

                <Text style={styles.label}>Company Name</Text>
                <Text style={styles.value}>{company.name}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingVertical: 24,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 24,
        width: '90%',
        shadowColor: '#ffa07a',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
        borderWidth: 1,
        borderColor: '#FFA07A',
    },
    heading: {
        fontSize: 26,
        fontWeight: '700',
        color: '#FFA07A',
        textAlign: 'center',
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        color: '#FFA07A',
        fontWeight: '600',
        marginTop: 16,
    },
    value: {
        fontSize: 15,
        color: '#333333',
        marginTop: 6,
        lineHeight: 22,
    },
});

