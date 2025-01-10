import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBox from "../../../components/InfoBox"; // Importamos el componente InfoBox

const AboutUs = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%", // Asegura que ocupe todo el ancho
                    height: "100vh", // Ocupa todo el alto del viewport
                    backgroundImage:
                        "url(https://th.bing.com/th/id/R.dcb68fe645c6bd3a4bf00e0955d3a38a?rik=kPe%2fZFe%2fuoIsnA&pid=ImgRaw&r=0)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "#fff",
                    marginTop: "70px", // Ajusta la altura según el navbar
                    paddingTop: "20px",
                }}
            >
                {/* Título */}
                <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
                    <Typography variant="h2" sx={{ fontSize: "2rem", color: "#fff" }}>
                        Nosotros
                    </Typography>

                    {/* InfoBox dinámico */}
                    <InfoBox
                        title="¿Estás buscando cuidadores de perros mientras estás de vacaciones?"
                        description="En Pet Friend, te ayudamos a encontrar y reservar un cuidador de perros cercano que se adapte a tus necesidades."
                        backgroundColor="rgba(255, 255, 255, 0.8)"
                        titleColor="#f00"
                        descriptionColor="#000"
                    />
                </Box>

                {/* Contenedor principal para las imágenes */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row", // Ordena en fila
                        justifyContent: "space-between", // Espacia el texto y las imágenes
                        alignItems: "flex-start", // Alinea los elementos en la parte superior
                        width: "100%", // Ocupa todo el ancho del contenedor
                        padding: "20px", // Espaciado interno
                    }}
                >
                    {/* Contenido principal */}
                    <Box sx={{ flex: 1, paddingRight: "20px" }}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                            
                        </Typography>
                    </Box>

                    {/* Contenedor de imágenes alineado a la derecha */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column", // Apila las imágenes verticalmente
                            gap: "10px", // Espacio entre las imágenes
                            flex: "0 0 auto", // Evita que el ancho se reduzca
                            alignItems: "flex-end", // Alinea las imágenes a la derecha
                        }}
                    >
                       
                        <img
                            src="https://th.bing.com/th/id/OIP.5Eadm4ZD3doFoZFYKDjbtAHaE8?rs=1&pid=ImgDetMain"
                            alt="Cuidado de mascotas"
                            style={{
                                width: "400px",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />
                        <img
                            src="https://www.kissfm.es/wp-content/uploads/2019/10/GettyImages-942616500-1000x667.jpg"
                            alt="Cuidado de mascotas"
                            style={{
                                width: "400px",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutUs;
