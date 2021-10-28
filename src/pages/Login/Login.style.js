import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#EBECF0",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
  },
  loginCard: {
    width: "530px",
    height: "260px",
    borderRadius: "3px",
    backgroundColor: "#FAFBFC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px",
    alignItems: "center",
  },
  logoDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  img: {
    marginRight: "16px",
    borderRadius: "0",
  },
  hantasify: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22.13px",
    lineHeight: "27px",
    color: "#121212",
  },
  loginButton: {
    height: "40px",
    backgroundColor: "#8174F7",
    textTransform: "none",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "19px", //BARIŞ burda butona :hover yazmak yerin theme devreyee giriyor değil mi?
  },
}));
