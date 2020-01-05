import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import Snackbar from 'react-native-snackbar'
import { colors } from '../assets/colors'
import i18n from 'i18n-js'

const IS_DEV = true
const BASE_URL = IS_DEV ? 'https://restcountries.eu/rest/v2' : 'https://restcountries.eu/rest/v2'

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 16000,
})
instance.interceptors.response.use(
    response => response,
    async error => {
        Snackbar.show({
            title: i18n.t('network_error'),
            color: colors.primary,
            duration: Snackbar.LENGTH_SHORT,
        })
        return await Promise.reject(error)
    },
)

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    instance.get(url, config).then(({ data }) => data)
const post = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.post(url, data, config).then(({ data }) => data)
const put = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.put(url, data, config).then(({ data }) => data)
const patch = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.patch(url, data, config).then(({ data }) => data)
const _delete = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    instance.delete(url, config).then(({ data }) => data)

export { get, post, put, patch, _delete }
