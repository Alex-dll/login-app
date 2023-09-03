import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 9999,
    borderColor: "#E8E8E8",
    backgroundColor: "#F7FAFC",
    marginRight: 12,
  },
  text: {

    fontFamily: fonts.lato.regular,
    fontSize: 14,
    lineHeight: 16,
    color: "#1A202C",
  },
})
