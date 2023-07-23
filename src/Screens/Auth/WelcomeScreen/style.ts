import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant/colors";

const styles = StyleSheet.create({
    img: {
        flex:1
      },
      details: {
        height: '80%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40
      },
      containerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
      },
      textTitle: {
        color: COLORS.white,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      textSubtitle: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      button: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
        marginTop: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textBtn: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 20
      }
})

export default styles;