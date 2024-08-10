ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <EnvolventePagina>
                {esquemaGeneralLibreria(_GeoZonasNombre_)}
            </EnvolventePagina>
            <BotonLinkPortafolio />
        </div>
    </div>,
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);