import { useState } from "react";
import {
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";

export default function Carrinho({ navigation }) {
  const [produto, setProduto] = useState([]);
  const [texto, setTexto] = useState("");
  const { width } = useWindowDimensions();
  const isWide = width > 480;

  function AddnewProd() {
    if (!texto.trim()) return;

    const NewProd = {
      id: Date.now(),
      name: texto.trim(),
    };

    setProduto([...produto, NewProd]);
    setTexto("");
  }

  function deleteProd(id) {
    setProduto(produto.filter((item) => item.id !== id));
  }

  function DeletarAll() {
    setProduto([]);
  }

  const contador = produto.length;

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={[styles.navbar, isWide && styles.navbarWide]}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Voltar</Text>
        </Pressable>

        <View style={styles.navCenter}>
          <Text style={styles.navKicker}>SUA LISTA</Text>
          <Text style={styles.navTitle}>Carrinho de Compras</Text>
        </View>

        <View style={styles.navBadge}>
          <Text style={styles.navBadgeText}>{contador}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, isWide && styles.scrollContentWide]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Área de input */}
        <View style={[styles.areaInput, isWide && styles.areaInputWide]}>
          <Text style={styles.sectionLabel}>Novo item</Text>
          <TextInput
            style={styles.input}
            value={texto}
            onChangeText={setTexto}
            placeholder="Ex: Arroz, leite, pão..."
            placeholderTextColor="#A89B85"
            onSubmitEditing={AddnewProd}
            returnKeyType="done"
          />

          <View style={styles.areaButtons}>
            <Pressable
              style={({ pressed }) => [
                styles.ButtonAdd,
                pressed && styles.ButtonAddPressed,
              ]}
              onPress={AddnewProd}
            >
              <Text style={styles.ButtonAddText}>+ Adicionar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.ButtonDeleteAll,
                pressed && styles.ButtonDeleteAllPressed,
              ]}
              onPress={DeletarAll}
            >
              <Text style={styles.ButtonDeleteAllText}>Limpar lista</Text>
            </Pressable>
          </View>

          <View style={styles.contadorWrap}>
            <Text style={styles.contadorLabel}>Itens na lista</Text>
            <View style={styles.contadorPill}>
              <Text style={styles.contadorValue}>{contador}</Text>
            </View>
          </View>
        </View>

        {/* Lista de produtos */}
        {produto.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyTitle}>Lista vazia</Text>
            <Text style={styles.emptySubtitle}>
              Digite um produto acima e toque em Adicionar para começar sua lista.
            </Text>
          </View>
        ) : (
          produto.map((item) => (
            <View
              style={[styles.block, isWide && styles.blockWide]}
              key={item.id}
            >
              <View style={styles.blockLeft}>
                <View style={styles.dot} />
                <Text style={styles.nameProd} numberOfLines={2}>
                  {item.name}
                </Text>
              </View>

              <Pressable
                onPress={() => deleteProd(item.id)}
                style={({ pressed }) => [
                  styles.ButtonExcluir,
                  pressed && styles.ButtonExcluirPressed,
                ]}
              >
                <Text style={styles.ButtonExcluirText}>Remover</Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 52,
    paddingBottom: 18,
    paddingHorizontal: 16,
    backgroundColor: "#C9A227",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "#8B6914",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 16,
    elevation: 8,
  },
  navbarWide: {
    paddingHorizontal: 32,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    minWidth: 80,
  },
  backButtonPressed: {
    backgroundColor: "rgba(255,255,255,0.35)",
    transform: [{ scale: 0.96 }],
  },
  backArrow: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 4,
  },
  backText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  navCenter: {
    flex: 1,
    alignItems: "center",
  },
  navKicker: {
    color: "#F5E6C8",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.8,
    marginBottom: 2,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  navBadge: {
    backgroundColor: "#FFF8E1",
    minWidth: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },
  navBadgeText: {
    color: "#A67C00",
    fontWeight: "800",
    fontSize: 15,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 48,
    alignItems: "center",
  },
  scrollContentWide: {
    paddingHorizontal: 32,
  },
  areaInput: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFBF2",
    borderRadius: 24,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EDE0C0",
    shadowColor: "#8B6914",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  areaInputWide: {
    maxWidth: 480,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8B6914",
    marginBottom: 10,
    letterSpacing: 0.4,
  },
  input: {
    width: "100%",
    height: 52,
    borderWidth: 1.5,
    borderColor: "#E8D9B0",
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: "#F7F1E3",
    fontSize: 16,
    color: "#2A2118",
    marginBottom: 14,
  },
  areaButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  ButtonAdd: {
    flex: 1,
    backgroundColor: "#C9A227",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#A67C00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  ButtonAddPressed: {
    backgroundColor: "#A67C00",
    transform: [{ scale: 0.97 }],
  },
  ButtonAddText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },
  ButtonDeleteAll: {
    flex: 1,
    backgroundColor: "#F5E6C8",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8D9B0",
  },
  ButtonDeleteAllPressed: {
    backgroundColor: "#EDE0C0",
    transform: [{ scale: 0.97 }],
  },
  ButtonDeleteAllText: {
    color: "#8B6914",
    fontWeight: "800",
    fontSize: 15,
  },
  contadorWrap: {
    marginTop: 16,
    backgroundColor: "#F7F1E3",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contadorLabel: {
    fontSize: 14,
    color: "#7A7060",
    fontWeight: "600",
  },
  contadorPill: {
    backgroundColor: "#C9A227",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 999,
  },
  contadorValue: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  emptyState: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2A2118",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#7A7060",
    textAlign: "center",
  },
  block: {
    width: "100%",
    maxWidth: 420,
    minHeight: 64,
    backgroundColor: "#FFFBF2",
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#EDE0C0",
    shadowColor: "#8B6914",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  blockWide: {
    maxWidth: 480,
  },
  blockLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C9A227",
    marginRight: 12,
  },
  nameProd: {
    flex: 1,
    color: "#2A2118",
    fontSize: 16,
    fontWeight: "600",
  },
  ButtonExcluir: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#F5E6C8",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8D9B0",
  },
  ButtonExcluirPressed: {
    backgroundColor: "#E8D9B0",
    transform: [{ scale: 0.96 }],
  },
  ButtonExcluirText: {
    color: "#8B6914",
    fontWeight: "700",
    fontSize: 13,
  },
});
