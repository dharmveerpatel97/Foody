import { useContext } from "react";
import { ThemeContext, ThemeType } from "@utils/theme/ThemeContext";

export default function useTheme(): ThemeType & { theme: ThemeType } {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { colors, fontSize, margins, border, fonts, device ,size} = theme;

  return {
    theme,     // ✅ full theme object
    colors,
    fontSize,
    margins,
    border,
    fonts,
    device,
    size
  };
}
