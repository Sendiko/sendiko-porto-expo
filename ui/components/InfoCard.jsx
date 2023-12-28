import { View, Text } from "react-native-web"
import globalStyles from "../styles/globalstyles"

const InfoCard = (props) => {
    return(
        <View style={globalStyles.infoCard}>
            <Text style={globalStyles.linkInfoCardTitle}>
                {props.title}
            </Text>
            <View style={{padding: "0.5rem"}}/>
            <Text style={globalStyles.linkInfoCardText}>
                {props.content}
            </Text>
        </View>
    )
}

export default InfoCard;