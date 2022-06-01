import { createTheme, responsiveFontSizes } from "@mui/material";
import { componetOverides } from "./ComponentOverrids";
import palette from "./Palette";

let theme = createTheme({
    palette,
    components: componetOverides
})
theme = responsiveFontSizes(theme);

export default theme;