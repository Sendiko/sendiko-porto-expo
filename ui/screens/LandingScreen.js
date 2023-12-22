import { View, Text, StyleSheet } from "react-native-web"
import globalStyles from "../styles/globalstyles";
import HeaderProfile from "../components/HeaderProfile";

const LandingScreen = () => {
    return(
        <View style={globalStyles.container}>
            <HeaderProfile/>
        </View>
    )
}

export default LandingScreen;