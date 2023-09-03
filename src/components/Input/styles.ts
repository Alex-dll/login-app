import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontFamily: fonts.lato.regular,
    fontSize: 16,
    lineHeight: 20,
    color: "#1A202C",
  },
  textInput: {
    height: 50,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingHorizontal: 20,
    alignItems: "center",
    color: "#1A202C",
  }
})
