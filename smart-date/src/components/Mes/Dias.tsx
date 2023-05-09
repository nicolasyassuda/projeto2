import { useState } from "react"

interface PropsDias {
    data: string,
    rotinas: any[]
}

export default function Dias(props: PropsDias) {
    const [listaAtividade, setListaAtividade] = useState<any[]>();
    const { rotinas, data } = props;
    async function postarAtividadeFeita(id:number,check:boolean) {
        const axios = require("axios")
        try {
            const res = await axios.post("http://localhost:8000/Rotinas/update",
                {
                    id: id,
                    feito: check
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },

                })
        } catch (err) {
            console.error(err)
        }

    }
    function renderizarAtividades() {
        const dia: number = parseInt(data.split("/")[0]);
        return rotinas.map((rotina: any) => {
            if (rotina.day == dia) {
                return (
                    <>
                        <div style={{ display: "flex", width: "80%", minHeight: "3vh", justifyContent: "space-around", backgroundColor: "cyan", borderRadius: "0.5vw", border: "1px solid black", marginBottom: "1vh" }}>
                            {rotina.name}
                            <input type={"checkbox"} defaultChecked={rotina.feito} onClick={(e) => postarAtividadeFeita(rotina.id, e.currentTarget.checked )} ></input>
                        </div>

                    </>
                )
            }
        }
        )
    }
    return (
        <div className="flex flex-col border-2 items-center shadow-2xl" style={{ marginLeft: "1.5vw", marginBottom: "3vh", width: "12vw", minHeight: "15vh", maxHeight: "15vh", overflowY: "scroll" }}>

            <div style={{ width: "100%", textAlign: "center", justifyContent: "space-between" }}>
                {data != "0" && (<>{data}
                    <button style={{ marginLeft: "1vw", width: "1vw", height: "1vw", borderRadius: "1vw", backgroundColor: "greenyellow" }}><p style={{ marginBottom: "100px" }}>+</p></button>
                </>)}
            </div>

            {renderizarAtividades()}
        </div>
    )
}