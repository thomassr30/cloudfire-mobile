import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = 'https://api.sistemacloudfire.com/api'

const cfApi = axios.create({baseURL})

cfApi.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    }
)

export default cfApi;