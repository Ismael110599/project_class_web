import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


const Navbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#f8f9fa",
                color: "#007bff",
                top: 0,
                width: "100%",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1201, 
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", padding: "0 20px" }}>
                <Box
                    component="img"
                    src="https://img.freepik.com/vector-premium/plantilla-logotipo-perro-guarderia-animales-tienda-mascotas-ilustracion-vectorial_279597-1068.jpg"
                    alt="Logo"
                    sx={{ height: 75, marginRight: 2 }}
                />

                <Box sx={{ display: "flex", justifyContent: "space-around", flexGrow: 1 }}>
                    <Button color="primary" href="/" sx={{ textTransform: "none", fontSize:"15px" }}>
                        Inicio
                    </Button>
                    <Button color="primary" href="/nosotros" sx={{ textTransform: "none", fontSize:"15px" }}>
                        Nosotros
                    </Button>
                    <Button color="primary" href="/servicio" sx={{ textTransform: "none", fontSize:"15px" }}>
                        Servicio
                    </Button>
                    <Button color="primary" href="/cuidadores" sx={{ textTransform: "none", fontSize:"15px" }}>
                        Cuidadores
                    </Button>
                    <Button color="primary" href="/convertirse-en-cuidador" sx={{ textTransform: "none", fontSize:"15px" }}>
                        Conviértete en un cuidador
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
