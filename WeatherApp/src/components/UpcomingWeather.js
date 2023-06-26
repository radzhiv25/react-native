import { Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import { Feather } from "@expo/vector-icons"

const DATA = [
    {
        dt_txt: "2023-06-26 12:00:00",
        main:{
            temp_max: 34,
            temp_min: 21
        },
        weather: [
            {
                main: "Clear"
            }
        ]
    },
    {
        dt_txt: "2023-06-26 15:00:00",
        main:{
            temp_max: 34,
            temp_min: 21
        },
        weather: [
            {
                main: "Clouds"
            }
        ]
    },
    {
        dt_txt: "2023-06-26 18:00:00",
        main:{
            temp_max: 34,
            temp_min: 21
        },
        weather: [
            {
                main: "Rain"
            }
        ]
    }
]
const Item = (props) => {
    const {dt_txt, min, max, condition} = props
    return(
        <View>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        <Item 
        condition={item.weather[0].main}
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}
        />
    }
    return(
        <SafeAreaView style={styles.container}> 
            <Text>Upcoming Weather</Text>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default UpcomingWeather