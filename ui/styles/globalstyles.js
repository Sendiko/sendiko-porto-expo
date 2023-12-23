import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1B1E',
  },
  whiteText: {
    color: "#E6E1E6"
  },
  rowContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageCircle: {
    borderRadius: "100%",
    width: "16rem",
    height: "16rem",
    margin: "2rem"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#E6E1E6",
  },
  headerText: {
    textAlign: "left",
    fontSize: "1rem",
    color: "#E6E1E6"
  },
  headerContent: {
    flexWrap: "wrap",
    flexShrink: 1,
    maxWidth: "50%",
  },
  linkCard: {
    flex: 1,
    borderRadius: "1rem",
    borderColor: "#4928B3",
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
    minWidth: "8.5rem",
    color: "#E6E1E6"
  },
  linkCardHover: {
    borderRadius: "1.5rem",
    backgroundColor: "#4928B3",
    color: "#E6DEFF",
  },
  linkIcon: {
    paddingEnd: "0.5rem",
    color: "#E6E1E6"
  },
  chipContainer: {
    flexShrink: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    overflow: "visible",
    minHeight: "auto"
  },
  infoCard:{
    borderWidth: 1,
    borderRadius: "1rem",
    borderColor: "#F4BF1F",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1B1E',
    aspectRatio:1,
    margin: "1rem",
    padding:"1rem",
    minWidth: "20rem",
    maxWidth: "20rem",
    },
    linkInfoCardTitle: {
      fontSize: "2rem",
      color: "#E6E1E6",
      fontWeight: "bold",
      textAlign: "center"
    },
    linkInfoCardText: {
      fontSize: "1rem",
      color: "#E6E1E6",
      textAlign: "justify"
    }
});

export default globalStyles;

