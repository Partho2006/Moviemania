import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <Tabs>
            {/* To hide the navbar at top  */}
            <Tabs.Screen 
            name='index'
            options={{
                title: 'Home',
                headerShown: false
            }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default Layout;
