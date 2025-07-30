import { StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to bookshelf where you can read and share your favorite books!</Text>
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
});