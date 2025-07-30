import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>BookStore</Text>
      <View style={styles.imageview}>
        <Image source={require("../assets/images/Reading1.png")} />
      </View>

      <TouchableOpacity onPress={() => router.push("/onboarding")}>
        <Text style={styles.getstarted}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5", // Added # to fix color
  },
  Text: {
    marginTop: 20,
    fontSize: 90,
    fontWeight: "bold",
  },
  getstarted:{
    marginTop: 40,
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
