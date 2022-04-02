import React, {Component} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export default class Link extends Component{
        constructor(props){
                super(props);
                this.state={
                        visible: false
                }
        }
        componentDidMount(){
                setTimeout(() => this.setState({visible: !this.state.visible}), 2000);
        }
        render() {
               
                 return(
                        
                        <ShimmerPlaceholder 
                        style={styles.carregamento}
                        stopAutoRun={false}
                        visible={this.state.visible}
                        >                    
                        <View style={styles.container}>
                        <WebView source={{ uri: "http://guiadopescado.epizy.com"}} />
                        </View>     
                         </ShimmerPlaceholder>
                        
                        
                 );
        }
                    
};

const styles = StyleSheet.create({
        carregamento:{
                width: '100%',
                height: '100%',                
        },
        container:{
                width: '100%',
                height: '100%',
        },
})