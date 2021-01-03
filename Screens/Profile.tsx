import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { DARKBLUE } from "../Styles/Colours";

export default function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#3590f9", "#0eaaff", "#58c8ff"]}
                style={styles.profileHeader}
                start={[0, 1]}
                end={[1, 0]}
            >
                <Image
                    source={{
                        uri:
                            "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
                    }}
                    style={styles.profilePicture}
                />
            </LinearGradient>

            <View style={styles.profileBody}>
                <Button title="Sign Out" onPress={() => {}} />
                <Button title="Delete Acount" onPress={() => {}} />
            </View>

            <Text>My Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    profileHeader: {
        backgroundColor: DARKBLUE,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "visible",
        marginBottom: 75,
    },
    profilePicture: { backgroundColor: "#dedede", height: 150, width: 150, marginBottom: -75, borderRadius: 100 },
    profileBody: { flex: 2, justifyContent: "center" },
});
