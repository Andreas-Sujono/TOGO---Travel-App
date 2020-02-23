import React, { Component } from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet,ActivityIndicator,ScrollView, FlatList,Button} from 'react-native'
import { Searchbar } from 'react-native-paper';
import CustomCard from './sideComponent/card.js'
import KEYS from './keys'

class Searching extends Component {

    state = {
        search: this.props.navigation.getParam('searchParams', 'jakarta'),
        loading:false,
        content:'',
        lat:'',
        lon:''
    }

    componentDidMount(){
        this.fetchingResult()

    }


    fetchingResult(){
        console.log('start fetching')
        console.log(this.state.search)
        
        
        latLonUrl = `https://us1.locationiq.com/v1/search.php?key=${KEYS.LOCATIONQP_APIKEY}&q=${this.state.search}&format=json`
        console.log(latLonUrl)
        
        fetch(latLonUrl)
        .then( response => {
            console.log('lat, lon received')
            return response.json()
        })
        .then( response => this.setState({
            lat:response[0].lat,
            lon:response[0].lon
        }))
        
        .then( () => {
            fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat},${this.state.lon}&radius=500&type=*&keyword=restaurant&key=${KEYS.GOOGLE_APIKEY}`)
            .then(response => response.json())
            .then( response => this.setState({content:response.results}))
            .then( () => {
                this.setState({loading:false})
            })
            .catch( err => console.warn(err))
        })
        .catch( err => console.warn(err))
        
    }

    render() {
        if (this.state.loading){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={text => { this.setState({ search: text }); }}
                    value={this.state.search}
                    style={style.search}
                    onIconPress={this.fetchingResult.bind(this)}
                />
                <Text style={{marginBottom:20}}> lat : {this.state.lat}, lon: {this.state.lon}</Text>

                <FlatList 
                    data = {this.state.content}
                    renderItem = { ({ item }) => (
                        <CustomCard key ={Math.random()} title={item.name} content={item.vicinity} imageReference={item.photos ? item.photos[0].photo_reference:null}/>
                    )}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    search:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        marginBottom:20
    }
})
export default Searching;
