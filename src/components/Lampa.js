import React from "react";

export default function Lampa(props) {

  function katt() {
    props.katt(props.index)
  }

    return (
        <div className= {`keret ${props.szin === false? "lekapcsolt" : "felkapcsolt"}`} onClick={() => katt()}>
        </div>
    )

}