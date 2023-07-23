import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant/colors";

const styles = StyleSheet.create({
      containerTitle: {
        marginTop: 30,
        marginHorizontal: 20,
      },
      title: {
        color: COLORS.black,
        fontSize: 35,
        fontWeight: 'bold'
      },
      containerForm: {
        marginTop: 20,
        marginHorizontal: 20
      },
      label: {
        fontWeight: '700',
        fontSize: 15,
        color: '#808B96',
        marginBottom: 5
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
        color: COLORS.green
      },
      btnRegister: {
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
      }
})

export default styles;