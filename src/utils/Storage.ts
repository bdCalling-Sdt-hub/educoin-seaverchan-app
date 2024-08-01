import { MMKV } from 'react-native-mmkv'

export const Storage = new MMKV()

export const SToken = Storage.getString('token')
