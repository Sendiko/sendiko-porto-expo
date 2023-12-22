import { Image, Text, TouchableOpacity, View } from "react-native-web";
import globalStyles from "../styles/globalstyles";
import SmallCardLink from "../components/SmallCardLink"

const HeaderProfile = () => {
    return (
        <View style={globalStyles.rowContainer}>
            <Image source={require("../assets/DSC_3204.JPG")} style={globalStyles.imageCircle} />
            <View style={globalStyles.headerContent}>
                <Text style={globalStyles.headerTitle}>
                    Muhammad Rizky Sendiko
                </Text>
                <Text style={globalStyles.headerText}>
                    Excited to be an Industry Ready Android Developer,
                    loves Kotlin and Compose, and waiting to try Compose Multiplatform!.
                    You can support me by following my Github account.
                </Text>
                <View style={{ padding: "1rem"}}/>
                <View style={globalStyles.rowContainer}>
                    <SmallCardLink text="Github" link="https://www.github.com/Sendiko" name="logo-github"/>
                    <SmallCardLink text="LinkedIn" link="https://www.linkedin.com/in/rizky-sendiko-b69563280" name="logo-linkedin"/>
                    <SmallCardLink text="Email" link="mailto:rizkysendiko7@gmail.com" name="mail-outline"/>
                </View>
            </View>
        </View>
    )
}

export default HeaderProfile;