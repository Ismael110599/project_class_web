import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomCard from "../../../components/Card";
import InfoBox from "../../../components/infoBox";
 

const Service = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%", // Asegura que ocupe todo el ancho
                    height: "100vh", // Ocupa todo el alto del viewport
                    backgroundImage: `url(https://th.bing.com/th/id/R.dcb68fe645c6bd3a4bf00e0955d3a38a?rik=kPe%2fZFe%2fuoIsnA&pid=ImgRaw&r=0)`,
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
                <Box sx={{ marginBottom: "20px" }}>
                    <Typography variant="h2" align="center" sx={{ fontSize: "2rem", color: "#fff" }}>
                        Nuestros Servicios
                    </Typography>

                    {/* Contenedor para los InfoBox */}
                    <div className="infoBox-container">
                        {/* InfoBox izquierda */}
                        <InfoBox
                            title="¿Estás buscando cuidadores de perros mientras estás de vacaciones?"
                            description="En Pet Friend, te ayudamos a encontrar y reservar un cuidador de perros cercano que se adapte a tus necesidades."
                            backgroundColor="rgba(255, 255, 255, 0.8)"
                            titleColor="#f00"
                            descriptionColor="#000"
                            index={0} // Para alternar posiciones
                        />
                        
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Service;
