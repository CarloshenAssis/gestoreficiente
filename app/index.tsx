import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Dashboard</Text>
      <Link href="/balanco">Ir para Balanço Patrimonial</Link>
      <Link href="/fluxo">Ir para Fluxo de Caixa</Link>
      <Link href="/relatorios">Ir para Relatórios</Link>
      <Link href="/base">Ir para Base de Conhecimento</Link>
      <Link href="/configuracoes">Ir para Configurações</Link>
    </View>
  );
}

