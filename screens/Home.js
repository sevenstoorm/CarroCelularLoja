import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();
  const isWide = width > 480;

  return (
    <View style={styles.container}>
      <View style={[styles.navbar, isWide && styles.navbarWide]}>
        <View style={styles.navBrand}>
          <View style={styles.logoDot} />
          <Text style={styles.navTitle}>BuyCar</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.navButtonPressed,
          ]}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.navButtonText}>Carrinho</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={[styles.hero, isWide && styles.heroWide]}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Lista Compras</Text>
          </View>
          <Text style={styles.title}>Organizar compras</Text>
          <Text style={styles.subtitle}>
              listagem
          </Text>

          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>-</Text>
              <Text style={styles.featureText}>Adicione itens de forma facil</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>-</Text>
              <Text style={styles.featureText}>Contador</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>-</Text>
              <Text style={styles.featureText}>Limpe a lista quando desejar</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={styles.buttonText}>Abrir meu carrinho</Text>
        </Pressable>
      </View>
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
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: "#C9A227",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#8B6914",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  navbarWide: {
    paddingHorizontal: 40,
  },
  navBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#FFF8E1",
  },
  navTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  navButton: {
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },
  navButtonPressed: {
    backgroundColor: "rgba(255,255,255,0.38)",
    transform: [{ scale: 0.96 }],
  },
  navButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  hero: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFBF2",
    borderRadius: 28,
    paddingVertical: 36,
    paddingHorizontal: 28,
    alignItems: "center",
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#EDE0C0",
    shadowColor: "#8B6914",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 6,
  },
  heroWide: {
    maxWidth: 480,
    paddingVertical: 44,
  },
  badge: {
    backgroundColor: "#F0E4C0",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 18,
  },
  badgeText: {
    color: "#8B6914",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#2A2118",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: "#7A7060",
    textAlign: "center",
    marginBottom: 24,
  },
  features: {
    width: "100%",
    gap: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F7F1E3",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  featureIcon: {
    color: "#C9A227",
    fontSize: 14,
    fontWeight: "700",
  },
  featureText: {
    color: "#2A2118",
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#C9A227",
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 16,
    minWidth: 260,
    alignItems: "center",
    shadowColor: "#A67C00",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: "#A67C00",
    transform: [{ scale: 0.97 }],
    opacity: 0.95,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
});
