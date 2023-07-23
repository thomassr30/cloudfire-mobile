import { Platform, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../../constant/colors";

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      containerTitle: {
        marginTop: 60,
        marginHorizontal: 20
      },
      title: {
        color: COLORS.black,
        fontSize: 35,
        fontWeight: 'bold'
      },
      subtitle: {
        color: 'grey',
        fontSize: 18
      },
      containerForm: {
        marginTop: 40,
        marginHorizontal: 20
      },
      label: {
        fontWeight: '700',
        fontSize: 15,
        color: '#808B96',
        marginBottom: 10
      },
      input:{
        backgroundColor: COLORS.light,
        paddingVertical: 15,
        fontSize: 15,
        paddingLeft: 10,
        borderRadius: 10,
        color: '#2C3E50',
      },
      forgotPass: {
        textAlign: 'right',
        marginTop: 5,
        color: COLORS.black
      },
      btnLogIn: {
        marginTop: 40,
        width: '100%',
        backgroundColor: COLORS.black,
        paddingVertical: 16,
        borderRadius: 10
      },
      btnText: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
      },
      newAcount: {
        marginTop: 30,
      },
      newAcountText: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600'
      },
      textError: {
        color: 'red'
      }
})

export default styles;