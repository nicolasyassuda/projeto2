interface PropsSemanas {

}

export default function Semanas(props: PropsSemanas) {
    return (
        <div className="grid grid-cols-7 gap-4 mb-4">
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
            <div className="flex border-2  shadow-2xl" style={{ width: "12vw", minHeight: "15vh" }}></div>
        </div>
    )
}