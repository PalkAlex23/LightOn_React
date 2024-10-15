import Lampa from "./Lampa.js"

export default function Jatekter(props) {
    function katt(adat) {
        // ezt a függvényt kéne hívnia a gyerek komponensnek
        props.katt(adat)
    }

    return (
        <>
            {
                props.szinLista.map((elem, index) => {
                    return (
                        <Lampa szin={elem} key={index} index = {index} katt={katt} />
                    )
                })
                
            }
        </>
    )
    
}