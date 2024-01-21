import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "./colors";
import { spacing, fontSizes } from "./sizes";

export const AppContainer = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darklue,
  },
});

export const FocusContainer = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xxl,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
});

export const FocusHistoryContainer = StyleSheet.create({
  container: { padding: spacing.md, flex: 1 },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
  item: { fontSize: fontSizes.md, color: colors.white, paddingTop: spacing.sm },
});
