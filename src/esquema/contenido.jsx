const _GeoZonasNombre_ = new GenerarContenidoLibreria({
    nombre: "GeoZonasNombres JS",
    slogan: "214 Paises, 1998 estados y 129191 ciudades (2022)",
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/GeoZonasNombreJS",

    resumen: {
        desc: `
            Este proyecto proporciona una base de datos completa de países, estados y ciudades, junto con sus respectivas 
            banderas en varios formatos. Los datos están organizados por país e incluyen ciudades y estados dentro de cada país.
        `,
        descImg: [
            "*Datos Geográficos y Banderas Centralizados:* Repositorio completo de países, estados, ciudades y banderas en formato SVG.",
            "*Estructura Intuitiva:* Datos organizados de manera que facilita su consulta, desde países hasta ciudades.",
            "*Banderas en Múltiples Formatos:* Banderas disponibles en *SVG 4×3 y 1×1,* adaptables a diferentes interfaces.",
            "*Sin Dependencias Externas:* Pesa de 3.7MB pero es fácil de integrar sin necesidad de bibliotecas adicionales.",
        ]
    },

    secciones: [
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Para utilizar este módulo en tu proyecto, simplemente incluye el archivo `index.js`
                        en tu proyecto o enlázalo en tu documento HTML:
                        <br />
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                    </FormatoDoc>
                );
            }
        },
    ]
});