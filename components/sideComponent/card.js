import React, { Component } from 'react';

import { Avatar, Button, Card, Title, Paragraph, Divider} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native'


class CustomCard extends Component {

   

    render() {
        var url = ''
        if( this.props.imageReference == null){
            url="http://i.imgur.com/I4IF27V.jpg"
        }
        else 
            url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.imageReference}&key=AIzaSyBYgx2skouDE13VZOcc6rOfK7GgjePVGxs`
        
        return (
            <Card style={{marginBottom:20}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Card.Cover source={
                        {uri: url}
                    } style={style.container} />
                </View>
                <Card.Content>
                    <Title>{this.props.title}</Title>
                    <Paragraph>{this.props.content}</Paragraph>
                </Card.Content>
                <Divider />
            </Card>
        );
    }
}

const style = StyleSheet.create({
    container:{
        width:300,
        height:150
    }
})

export default CustomCard;