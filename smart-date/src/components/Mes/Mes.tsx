import Dias from "./Dias"

interface PropsSemanas {
    domingos:string[],
    segundas:string[],
    tercas:string[],
    quartas:string[],
    quintas:string[],
    sextas:string[],
    sabados:string[]
}

export default function Mes(props: PropsSemanas) {
    const {domingos,segundas,tercas,quartas,quintas,sextas,sabados} = props;
    console.log(props.segundas)
    function renderizaDiaDaSemana(diaDaSemana: string[]) {
        return diaDaSemana.map(dia =>
            <Dias key={dia} dia={dia}></Dias>
        )
    }
    return (
        <div className="grid grid-cols-7 ml-8 mr-8" style={{ width: "95.5vw" }}>
            <div>{renderizaDiaDaSemana(domingos)}</div>
            <div>{renderizaDiaDaSemana(segundas)}</div>
            <div>{renderizaDiaDaSemana(tercas)}</div>
            <div>{renderizaDiaDaSemana(quartas)}</div>
            <div>{renderizaDiaDaSemana(quintas)}</div>
            <div>{renderizaDiaDaSemana(sextas)}</div>
            <div>{renderizaDiaDaSemana(sabados)}</div>
        </div>
    )


}