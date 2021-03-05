import React ,{useEffect, useRef} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

export default function AnimatedStats({status}) {
    
        const animation = useRef(new Animated.Value(0)).current
    
        useEffect(() => {
            animeStatusValue()
        }, [])
    
        function animeStatusValue() {
            Animated.timing(animation,{
                toValue:status.base_stat,
                duration:1500,
            }).start()
        } 
        
        const progressStyle = {
            width: 
                animation.interpolate({
                inputRange: [0,100],
                outputRange:['0%', '100%'],
                extrapolate:'clamp'
                })
        }
        
        return(
            <View style={styles.line}>
                <Text style={styles.stat}>{capitalizeFirstLetter(status.stat.name)}</Text>
                <View style={styles.bar}>
                    <Animated.View style={[styles.coloredBar,progressStyle]}>
                        <View></View>
                    </Animated.View>
                </View>
                <Text style={styles.statValue}>{status.base_stat}</Text>
            </View>
        )
    
    
}

const styles = StyleSheet.create({
    line:{
        flexDirection:'row'
    },
    bar:{
        marginHorizontal:15,
        marginVertical:8,
        backgroundColor:'#c2c2c2',
        borderRadius:10,
        flex:1,
    },
    coloredBar:{
        backgroundColor:'#f1f100',
        width:'95%',
        height:12,
        paddingVertical:2
    },
    stat:{
        fontSize:18,
        paddingLeft:10,
        fontFamily:'Poppins-Regular',
    },
    statValue:{
        fontSize:22,
        width:50,
        textAlign:'right',
        paddingRight:10,
    },
})

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}