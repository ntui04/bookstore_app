import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
        <Image source={ require("../../assets/images/Reading1.png")}/>
      <Text style={styles.head}>Welcome to bookshelf where you can read books!</Text>

      <TouchableOpacity style={styles.next} onPress={() => router.push("../(tabs)")}>
        <Image
         source={require("../../assets/images/next.png")}        
        />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head:{
    marginTop: 20,
    fontSize: 20,
  },
  next:{
    marginTop: 40,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 25,
  }

});