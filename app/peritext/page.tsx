import React from 'react'

export default function Peritext() {
  return (
    <div className={"w-screen flex justify-center pt-20"}>
      <div className={"max-w-xl p-4"}>
      <Title/>
      <Authors/>
      </div>
    </div>
  )
}

function Title(){
  return(
    <div className={"text-2xl font-medium pb-4"}>Peritext: A CRDT for collaborative rich text editing</div>
  )
}


function Authors(){
  return(
    <>
      <Author
        name={"Geoffrey Litt"}
        affiliation={"MIT CSAIL"}
        country={"USA"}
      />
      <Author
        name={"Sarah Lim"}
        affiliation={"UC Berkeley"}
        country={"USA"}
      />
      <Author
        name={"Martin Kleppmann"}
        affiliation={"University of Cambridge"}
        country={"United Kingdom"}
      />
      <Author
        name={"Peter van Hardenberg"}
        affiliation={"Ink & Switch"}
        country={"USA"}
      />
    </>
  )
}
function Author({name, affiliation, country}: any) {
  return (
    <div className={"text-xs pb-1"}>
      <span>{name}</span> <span className={"text-slate-800"}>{affiliation}, {country}</span>
    </div>
  )
}
