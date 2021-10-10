import React, { Component } from 'react'
import {View, Text, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'

export default props => (
    
            <View style={{
                marginLeft: 0,
                padding: 10,
                backgroundColor: props.corfundo || '#000'
            }}>
                <Text style={{
                    
                    fontSize: 30,
                    color: props.corTexto || '#FFF'
                }}>
                {props.children}
                </Text>
            </View>
) 


