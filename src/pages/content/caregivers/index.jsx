import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomCard from "../../../components/Card";

const Caregivers = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Lista de cuidadores
    const caregivers = [
        {
            title: "Maria Gomez",
            description: "Desde 2010 cuidadora de diferentes mascotas. See more..",
            image: "https://images.unsplash.com/photo-1606098216818-40939b7c98ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Fernando Peralta",
            description: "Desde 2020 cuidador de diferentes mascotas. See more..",
            image: "https://img.freepik.com/foto-gratis/perro-jugando-mujer-pasto_23-2148332424.jpg"
        },
        {
            title: "Ismael Gonzalez",
            description: "Desde 2024 cuidador de diferentes mascotas. See more..",
            image: "https://th.bing.com/th/id/OIP.7pHAoz7r33zqii3FFeQyPgHaEY?rs=1&pid=ImgDetMain"
        }
    ];

    // Filtrar los cuidadores en base al nombre
    const filteredCaregivers = caregivers.filter(caregiver =>
        caregiver.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `url(https://th.bing.com/th/id/R.dcb68fe645c6bd3a4bf00e0955d3a38a?rik=kPe%2fZFe%2fuoIsnA&pid=ImgRaw&r=0)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "#fff",
                    marginTop: "70px",
                    paddingTop: "20px",
                }}
            >
                {/* Buscador */}
                <Box sx={{ marginBottom: "20px", width: "80%", maxWidth: "500px" }}>
                    <TextField
                        fullWidth
                        label="Buscar cuidador"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                            },
                        }}
                    />
                </Box>

                {/* Tarjetas Personalizadas */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        width: "100%",
                        padding: "20px",
                        gap: "20px",
                    }}
                >
                    {filteredCaregivers.map((caregiver, index) => (
                        <CustomCard
                            key={index}
                            title={caregiver.title}
                            description={caregiver.description}
                            image={caregiver.image}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Caregivers;
