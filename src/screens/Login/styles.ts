import { fonts } from "@/constants/fonts"
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    marginTop: 72,
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
})
