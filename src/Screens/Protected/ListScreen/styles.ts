import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10
    },
    logoContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 130,
        height: 130
    },
    containerForm: {
        backgroundColor: 'red'
    },
    actionSheet: {
        height: '50%'
    }
})

export default styles;