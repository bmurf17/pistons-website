declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }
}

const palette = {
    primary: {
        main: "#0077bb"
    },
    secondary: {
        main: '#FFB21B',
        light: '#687189',
        dark: '#F2AF23',
      },
      neutral: {
        main: '#666869',
        light: '#D0D3D4',
        dark: '#3A3D3F',
      },
      error: {
        main: '#B00020',
      },
};

export default palette