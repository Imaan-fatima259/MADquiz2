import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87AFC7",
  
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6408cc",
  },
  button: {
    backgroundColor: "#36454F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
  },
});


const stylesCamera = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%", // Reduce the width of the camera capturing view
    height: "30%", // Reduce the height of the camera capturing view
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  cameraContainer: {
    flex: 0,
    width: "100%",
    height: "60%",
  },
  fixedRatio: {
    flex: 0,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
const classifyStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dabcfc",
  
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center", // Center buttons vertically
  },
  button: {
    backgroundColor: "#36454F",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
      width: "100%",
      height: "100%",
      flex: 1,
      resizeMode: "cover", // or "stretch"
      justifyContent: "center"
    },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "30%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#36454F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#36454F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export {
  stylesHome,
  classifyStyle,
  stylesCamera,
  stylesSignIn,
  stylesSignUp,
  stylesImageScreen,
};