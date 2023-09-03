import { fonts } from "@/constants/fonts"
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    marginTop: 72,
    justifyContent: "space-between"
  },
  title: {
    fontFamily: fonts.merriwather.regular,
    fontSize: 16,
    lineHeight: 20,
    color: "#1A202C"
  },
  subtitle: {
    marginTop: 8,
    fontFamily: fonts.merriwather.bold,
    fontSize: 26,
    lineHeight: 32,
    color: "#1A202C"
  },
  form: {
    gap: 12,
    marginTop: 40
  },
  utils: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28
  },
  buttonWrapper: {
    marginTop: 26,
    gap: 16,
  },
  buttonTitle: {
    fontFamily: fonts.lato.bold,
    fontSize: 16,
    lineHeight: 18,
    color: "#FFFFFF"
  },
  buttonLogoView: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontFamily: fonts.roboto.regular,
    fontSize: 14,
    lineHeight: 16,
    color: "#1A202C"
  },
})
