import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbff',
  },
  rowContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
  },
  imageCircle: {
    borderRadius: "100%",
    width: "16rem",
    height: "16rem",
    margin: "2rem"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: "2rem"
  },
  headerText: {
    textAlign: "left",
    fontSize: "1rem"
  },
  headerContent: {
    flexWrap: "wrap",
    flexShrink: 1,
    maxWidth: "50%",
  },
  linkCard: {
    flex: 1,
    borderRadius: "1rem",
    borderColor: "#4D2DB7",
    borderWidth: 1, 
    flexWrap: "wrap",
    paddingVertical: "0.6rem",
    paddingHorizontal: "1rem",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    fontSize: "1rem",
    marginEnd: "1rem",
    marginVertical: "0.5rem",
    width: "8.2rem"
  },
  linkIcon: {
    paddingEnd: "0.5rem"
  }
});

export default globalStyles;

