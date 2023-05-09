import image from "../../public/imgs/imageIndex";

interface PaginaInicioProps {

}
export default function PaginaInicio(props: PaginaInicioProps) {
    return (
        <div>
            <img src={"imgs/rotina.jpg"}></img>
            <div className="flex flex-col items-center justify-center mt-8 w-full pl-10 pr-10" style={{marginBottom:"20vh"}}>
                <h1 className="text-4xl pl-4 pr-4 pb-2" style={{ borderBottom: "0.5vh solid black" }}>Sobre Nós</h1>
                <p className="text-3xl mt-4 text-justify">Este site permite a criação de rotinas. O calendário da aba "Rotinas" mostra os feriados e os eventos do dia. 
                Nele, é possivel adicionar um evento e, depois, marcá-lo como concluído. Também é possível deletar algum item da rotina.</p>
            </div>
        </div>
    )
}