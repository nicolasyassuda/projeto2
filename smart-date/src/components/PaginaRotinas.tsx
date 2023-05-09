import { useEffect, useState } from "react";
import Mes from "./Mes/Mes";
import moment from "moment"

interface PaginaRotinasProps {

}
export default function PaginaRotinas(props: PaginaRotinasProps) {
    const [ano, setAno] = useState(moment().locale("pt-br").year())
    const [mes, setMes] = useState(moment().locale("pt-br").month() + 1)
    // 0 - Domingo; 1-Segunda ; 2-Terça ; 3-Quarta; 4-Quinta; 5-Sexta ; 6-Sabado
    const [pagina, setPagina] = useState(0);

    const [diasDomingo, setDiasDomingo] = useState<any[]>([]);
    const [diasSegunda, setDiasSegunda] = useState<any[]>([]);
    const [diasTerca, setDiasTerca] = useState<any[]>([]);
    const [diasQuarta, setDiasQuarta] = useState<any[]>([]);
    const [diasQuinta, setDiasQuinta] = useState<any[]>([]);
    const [diasSexta, setDiasSexta] = useState<any[]>([]);
    const [diasSabado, setDiasSabado] = useState<any[]>([]);
    const [label, setLabel] = useState("");
    const [rotinas,setRotinas] = useState<any[]>([]);
    useEffect(() => {
        criarCalendarioMes(ano, mes)
        obterRotinas(ano, mes)
    }, [mes, ano])
    // const obterRotinas = async (ano:number,mes:number) => {
    //     const Rotinas = await fetch('./api/obterRotinas', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             ano:ano,
    //             mes:mes
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });

    //     if (Rotinas.status == 200) {
    //         const retorno = await Rotinas.json();
    //         console.log(retorno)
    //     }
    // }
    async function obterRotinas(ano: number, mes: number) {
        const axios = require("axios")
        try {
            const res = await axios.get("http://localhost:8000/Rotinas/get/"+ano+"/"+mes, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setRotinas(res.data)
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }

    }
    function RecuarPagina() {
        if (mes == moment().locale("pt-br").month() + 1 && ano == moment().locale("pt-br").year()) {

        } else if (mes == 1) {
            setAno(ano - 1)
            setMes(12)
        } else {
            setMes(mes - 1)
        }
    }
    function AvancarPagina() {
        if (mes == 12) {
            setAno(ano + 1)
            setMes(1)
        } else {
            setMes(mes + 1)
        }
    }

    async function criarCalendarioMes(year: number, month: number) {
        const currentDate = new Date(`${year}-${month}-1`)
        const currentDateFormated = moment(currentDate).format("DD/MM/YYYY")
        setLabel(moment(currentDate).format("MMMM/YYYY"))
        const daysInMonth = moment(currentDate).daysInMonth()
        const dayOfWeek = moment(currentDate).weekday()
        let achouPrimeiroDia = false;
        let listaDomingo = [];
        let listaSegunda = [];
        let listaTerca = [];
        let listaQuarta = [];
        let listaQuinta = [];
        let listaSexta = [];
        let listaSabado = [];
        let dataAtual;
        let diaDaSemana;
        let dataInserir: string;
        for (let i = 0; i < 7; i++) {
            if (!achouPrimeiroDia) {
                if (i == 0) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaDomingo.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaDomingo.push("0")
                    }
                }
                else if (i == 1) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaSegunda.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaSegunda.push("0")
                    }
                }
                else if (i == 2) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaTerca.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaTerca.push("0")
                    }
                }
                else if (i == 3) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaQuarta.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaQuarta.push("0")
                    }
                }
                else if (i == 4) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaQuinta.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaQuinta.push("0")
                    }
                }
                else if (i == 5) {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaSexta.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaSexta.push("0")
                    }
                }
                else {
                    if (i == dayOfWeek && !achouPrimeiroDia) {
                        listaSabado.push(currentDateFormated)
                        achouPrimeiroDia = true;
                    } else {
                        listaSabado.push("0")
                    }
                }
            }

        }
        dataAtual = moment(currentDate)

        for (let d = 1; d < daysInMonth; d++) {
            dataAtual = moment(dataAtual).add(1, 'days')
            dataInserir = dataAtual.format("DD/MM/YYYY")
            diaDaSemana = dataAtual.weekday()

            if (diaDaSemana == 0) {
                listaDomingo.push(dataInserir)
            } else if (diaDaSemana == 1) {
                listaSegunda.push(dataInserir)
            } else if (diaDaSemana == 2) {
                listaTerca.push(dataInserir)
            } else if (diaDaSemana == 3) {
                listaQuarta.push(dataInserir)
            } else if (diaDaSemana == 4) {
                listaQuinta.push(dataInserir)
            } else if (diaDaSemana == 5) {
                listaSexta.push(dataInserir)
            } else {
                listaSabado.push(dataInserir)
            }

        }
        setDiasDomingo(listaDomingo)
        setDiasSegunda(listaSegunda)
        setDiasTerca(listaTerca)
        setDiasQuarta(listaQuarta)
        setDiasQuinta(listaQuinta)
        setDiasSexta(listaSexta)
        setDiasSabado(listaSabado)
    }
    function renderizarMes() {

        return <Mes rotinas={rotinas} domingos={diasDomingo} segundas={diasSegunda} tercas={diasTerca} quartas={diasQuarta} quintas={diasQuinta} sextas={diasSexta} sabados={diasSabado}></Mes>

    }
    return (
        <div className="flex justify-center items-center flex-col mb-8">
            <div className="flex flex-row justify-around items-center w-full">
                <div className="text-4xl hover:cursor-pointer" onClick={() => RecuarPagina()}>{"<-"}</div>
                <h1 className="text-4xl w-25">{label}</h1>
                <div className="text-4xl hover:cursor-pointer" onClick={() => AvancarPagina()}>{"->"}</div>
            </div>
            <div>
                <div className="flex ml-8 mr-8 flex-nowrap justify-between">
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Domingo</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Segunda</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Terça</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Quarta</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Quinta</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Sexta</h2>
                    <h2 className="text-center text-xl m-2" style={{ width: "12vw" }}>Sabado</h2>
                </div>
                {renderizarMes()}

            </div>
        </div>
    )
}