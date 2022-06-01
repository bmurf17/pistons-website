const backgroundUrl = "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

export const componetOverides = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                WebkitFontSmoothing: 'antialiased',
                backgroundColor: '#dedede',
                backgroundImage: `url("${backgroundUrl}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%"
            }
        }
    }
}