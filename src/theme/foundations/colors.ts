export const primaryColor = {
  50: "#FFF5F7",
  100: "#FED7E2",
  200: "#FBB6CE",
  300: "#F687B3",
  400: "#ED64A6",
  500: "#D53F8C",
  600: "#B83280",
  700: "#97266D",
  800: "#702459",
  900: "#521B41",
};

export const secondaryColor = {
  50: "#F0FFF4",
  100: "#C6F6D5",
  200: "#9AE6B4",
  300: "#68D391",
  400: "#48BB78",
  500: "#38A169",
  600: "#2F855A",
  700: "#276749",
  800: "#22543D",
  900: "#1C4532",
};

export const colors = {
  neutral: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
  primary: {
    ...primaryColor,
    main: primaryColor[500],
    light: primaryColor[200],
    dark: primaryColor[700],
  },
  secondary: {
    ...secondaryColor,
    main: secondaryColor[500],
    light: secondaryColor[200],
    dark: secondaryColor[700],
  },
};
