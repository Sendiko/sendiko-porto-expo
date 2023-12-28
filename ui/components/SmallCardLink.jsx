import { Linking, View,  } from "react-native-web";
import Ionicons from '@expo/vector-icons/Ionicons';
import globalStyles from "../styles/globalstyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";


const CardLink = (props) => {
    const [isHovered, setHovered] = useState(false)

    const handleOnPress = () => {
        Linking.openURL(props.link);
    }
    return(
        <TouchableOpacity onPress={handleOnPress}>
            <View 
            style={[
                globalStyles.linkCard,
                isHovered && globalStyles.linkCardHover
            ]} 
            onMouseEnter={
                () => {setHovered(true)}
            }
            onMouseLeave={
                () => {setHovered(false)}
            }
            >
                <Ionicons name={props.name} size={"1.5rem"} style={globalStyles.linkIcon}/>
                {props.text}
            </View>
        </TouchableOpacity>
    );
}

export default CardLink;