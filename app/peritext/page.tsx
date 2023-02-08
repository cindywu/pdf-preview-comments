import React from 'react'

export default function Peritext() {
  return (
    <div className={"w-screen flex justify-center pt-20"}>
      <div className={"max-w-lg p-4"}>
      <Title/>
      <Authors/>
      <Abstract/>
      </div>
    </div>
  )
}

function Abstract(){
  return(
    <>
      <Paragraph content={"Conflict-Free Replicated Data Types (CRDTs) support decentralized collaborative editing of shared data, enabling peer-to-peer sharing and flexible branching and merging workflows. While there is extensive work on CRDTs for plain text, much less is known about CRDTs for rich text with formatting. No algorithms have been published, and existing open-source implementations do not always preserve user intent."}/>
      <Paragraph content={"In this paper, we describe a model of intent preservation in rich text editing, developed through a series of concurrent editing scenarios. We then describe Peritext, a CRDT algorithm for rich text that satisfies the criteria of our model. The key idea is to store formatting spans alongside the plaintext character sequence, linked to a stable identifier for the first and last character of each span, and then to derive the final formatted text from these spans in a deterministic way that ensures concurrent operations commute."}/>
      <Paragraph content={"We have prototyped our algorithm in TypeScript, validated it using randomized property-based testing, and integrated it with an editor UI. We also prove that our algorithm ensures convergence, and demonstrate its causality preservation and intention preservation properties."}/>
    </>
  )

}

function Paragraph({ content }: any){
  return(
    <div className={"pb-4 text-sm"}>{content}</div>
  )
}

function Title(){
  return(
    <div className={"text-2xl font-medium pb-4"}>Peritext: A CRDT for collaborative rich text editing</div>
  )
}


function Authors(){
  return(
    <div className={"pb-12"}>
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
    </div>
  )
}
function Author({name, affiliation, country}: any) {
  return (
    <div className={"text-xs pb-1"}>
      {name}, {affiliation}, {country}
    </div>
  )
}
