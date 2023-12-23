import { View, Text, StyleSheet } from "react-native-web"
import globalStyles from "../styles/globalstyles";
import HeaderProfile from "../components/HeaderProfile";
import InfoCard from "../components/InfoCard";  

const LandingScreen = () => {
    return(
        <View style={globalStyles.container}>
        <View style={{padding: "6%"}}/>
            <HeaderProfile/>
            <View style={globalStyles.infoCardContainer}>
                <View style={{padding: "2rem"}}></View>
                <InfoCard 
                title="🏫 Study 🏫" 
                content="I'm currently studying at Telkom University, Bandung.
                Aiming for advancing more in Android Development, Participate in Labs and Competitions,
                and Gaining more Flight Hours."/>
                <InfoCard title="🎯 Point of Interests 🎯" content="I'm interested in 3 main things: Android Dev with Kotlin and Compose, CI/CD, and Compose Multiplatform. Lately i also been interesting to use Expo to make a web just like this one."/>
                <InfoCard title="⚒️ Released Apps ⚒️" content="JustDoIt!, Todo list app that helps you manage your daily tasks and chores. 
                        Split The Bill, avoid chaos about splitting bills and saves your friendship. 
                        ternaQu, lets you provide the best food and treatment for your livestock. 
                        Compose TicTacToe, bored out of your mind? try play some tictactoe!, you can check them out on my Github!
"/>
                <InfoCard title="🛣️ How? 🛣️" content="All built with Kotlin, some were using XML some use Compose. Saves data locally with Room Database, use Retrofit to do Http requests, and of course i provide the Restful APIs, and i use MVVM and MVC that makes my project easily maintained and scaled."/>
            </View>
            <Text style={globalStyles.whiteText}>Sendiko@2023</Text>
        </View>
    )
}

export default LandingScreen;