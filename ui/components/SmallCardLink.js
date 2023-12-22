import { Linking,  } from "react-native-web";
import Ionicons from '@expo/vector-icons/Ionicons';
import globalStyles from "../styles/globalstyles";
import { TouchableOpacity } from "react-native-gesture-handler";


const CardLink = (props) => {
    const handleOnPress = () => {
        Linking.openURL(props.link);
    }
    return(
        <TouchableOpacity style={globalStyles.linkCard} onPress={handleOnPress}>
            <Ionicons name={props.name} size={"1.5rem"} style={globalStyles.linkIcon}/>
            {props.text}
        </TouchableOpacity>
    );
}

export default CardLink;