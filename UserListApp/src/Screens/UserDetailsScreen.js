import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";


export default function UserDetailsScreen() {

    return (
        <View style={styles.container}>
            <Text>User Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
});
