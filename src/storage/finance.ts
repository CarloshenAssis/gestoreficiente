import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@gestor:balanco:v1";

export type Balanco = {
  ativosCirculantes: number;
  passivosCirculantes: number;
  ativosNaoCirculantes: number;
  passivosNaoCirculantes: number;
};

export async function saveBalanco(data: Balanco) {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export async function loadBalanco(): Promise<Balanco | null> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}
