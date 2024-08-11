const _GeoZonasNombre_ = new GenerarContenidoLibreria({
    nombre: "GeoZonasNombres JS",
    slogan: "214 Paises, 1.998 estados y 129.191 ciudades (2022)",
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
            "*Banderas:* Se hace uso de la API \"https://flagicons.lipis.dev/flags/4x3/\" para generar las urls de las banderas.",
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
        {
            nombre: "Base de Datos",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La base de datos está quemada en el archivo `index.js` y se puede acceder a través de la variable `GeoZonasNombre`.

                        <Code>{`
                            console.log(GeoZonasNombre)
                        `}</Code>

                        La base de datos contiene la siguiente estructura:

                        <Code linenumbers={false}>{`
                            {
                                "nombre-pais": {
                                    code: "codigo-pais",
                                    estados: {
                                        "nombre-estado": {
                                            ciudades: {
                                                "nombre-ciudad": {}, 
                                                ...
                                            }
                                        },
                                        ...
                                    },
                                    ...
                                },
                                ...
                            }
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "paises()",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función paises() devuelve un arreglo con los nombres de los 214 países disponibles en la base de datos.
                        <br />
                        <Code>{`
                            GeoZonasNombre.paises()
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "estados(pais)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función estados(pais) devuelve un arreglo con los nombres de los estados del país especificado.
                        <br />
                        <Code>{`
                            GeoZonasNombre.estados("nombre-pais")
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "ciudades(pais, estado)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función ciudades(pais, estado) devuelve un arreglo con los nombres de las ciudades del estado
                        del país especificado.
                        <br />
                        <Code>{`
                            GeoZonasNombre.ciudades("nombre-pais", "nombre-estado")
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "bandera(pais)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función bandera(pais) devuelve un objeto con las banderas del país especificado en formato *SVG 4×3 y 1×1.*
                        <br />
                        <Code>{`
                            GeoZonasNombre.bandera("nombre-pais")
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "codigo(pais)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función codigo(pais) devuelve el código *ISO 3166-1 alfa-2* del país especificado.
                        <br />
                        <Code>{`
                            GeoZonasNombre.codigo("nombre-pais")
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Ejemplo Implementación",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        <h2>
                            Selección de País, Estado y Ciudad
                        </h2>
                        <iframe
                            src="https://jeff-aporta.github.io/GeoZonasNombreJS/test.html"
                            className={CSScmds(`
                                400px<-x->650px?height: [300px, 150px]
                            `)}
                            width="100%"
                            height="300px"
                            style={{ border: "none" }}
                        />
                        <h2>
                            Código JS genérico
                        </h2>
                        <Code>{`
                            function actualizarPaises() {
                                document.getElementById("paises").innerHTML = GeoZonasNombre.paises()
                                .map((x, i) => \`<option \${i == 0 ? "selected" : ""}">\${x}</option>\`)
                                .join("");
                            }

                            function actualizarBandera() {
                                document.getElementById("flag").src = GeoZonasNombre.bandera(
                                    document.getElementById("paises").value
                                );
                            }

                            function actualizarEstados() {
                                document.getElementById("estados").innerHTML = GeoZonasNombre.estados(
                                    document.getElementById("paises").value
                                )
                                .map((x) => \`<option>\${x}</option>\`)
                                .join("");
                            }

                            function actualizarCiudades() {
                                document.getElementById("ciudades").innerHTML = GeoZonasNombre.ciudades(
                                    document.getElementById("paises").value,
                                    document.getElementById("estados").value
                                )
                                .map((x) => \`<option>\${x}</option>\`)
                                .join("");
                            }

                            actualizarPaises();
                            actualizarBandera();
                            actualizarEstados();
                            actualizarCiudades();
                        `}</Code>
                        <h2>
                            Código HTML genérico
                        </h2>
                        <Code>{`
                            <img id="flag" width="60px"/>

                            <div style="display: inline-block;">
                                País
                                <br />
                                <select
                                    id="paises"
                                    onchange="actualizarEstados();actualizarCiudades();actualizarBandera();"
                                ></select>
                            </div>

                            <div style="display: inline-block;">
                                Estado
                                <br />
                                <select id="estados" onchange="actualizarCiudades()"></select>
                            </div>

                            <div style="display: inline-block;">
                                Ciudad
                                <br />
                                <select id="ciudades"></select>
                            </div>
                        `}</Code>
                    </FormatoDoc>
                );
            }
        }
    ]
});