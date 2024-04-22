import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 25,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  buttonWraper: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    height: 40,
    marginTop: 10,
  },
  buttonText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingLeft: 17,
  }
});

export default styles;