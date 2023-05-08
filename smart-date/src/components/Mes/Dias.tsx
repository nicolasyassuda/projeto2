import { useState } from "react"

interface PropsDias{
    dia:string
}

export default function Dias(props:PropsDias){
    const [listaAtividade,setListaAtividade] = useState<any[]>();
    async function postarAtividadeFeita(atividadeId:number) {
    
    }
    function renderizarAtividades(){
        // return listaAtividade.map((atividade:any) =>
        //     {return(
        //         <span>{atividade} <input type={"checkbox"} onClick={()=>postarAtividadeFeita(atividade.id)}></input></span>
        //     )}
        // )
    }
    return(
        <div className="flex border-2  shadow-2xl" style={{marginLeft:"1.5vw", marginBottom:"3vh", width: "12vw", minHeight: "15vh" }}>{props.dia!="0"&&(<>{props.dia}</>)}</div>
    )
}