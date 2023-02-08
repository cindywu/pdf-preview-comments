import React from 'react'

export default function Peritext() {
  return (
    <div className={"w-screen flex justify-center pt-20"}>
      <div className={"max-w-lg p-4"}>
      <Title/>
      <Authors/>
      <Abstract/>
      <Introduction/>
      <RelatedWork/>
      <CriteriaForIntentPreservation/>
      <PeritextARichTextEditor/>
      <Conclusion/>
      <Acknowledgements/>
      <References/>
      </div>
    </div>
  )
}

function References(){
  return(
    <>
      <Header content={"References"}/>
    </>
  )
}

function Acknowledgements(){
  return(
    <>
      <Header content={"Acknowledgements"}/>
    </>
  )
}

function Conclusion(){
  return(
    <Header content="5 Conclusion"/>
  )
}

function PeritextARichTextEditor(){
  return(
    <>
      <Header content={"4 Peritext: a rich text CRDT"}/>
    </>
  )
}
function CriteriaForIntentPreservation(){
  return(
    <>
      <Header content={"3 Criteria for intent preservation"}/>
    </>
  )
}

function RelatedWork(){
  return(
    <>
      <Header content={"2 Related work"}/>
      <Paragraph content={"Collaboration on text documents has long been of interest to the CSCW community, although many early systems did not provide fine-grained merging of concurrent edits [24, 28, 40]. Algorithms for synchronous (real-time) collaborative editing allow different users to concurrently update the same document, without locking or any other restrictions, and automatically merge those documents into a state that preserves all users’ updates. Such algorithms fall into two main families: the Operational Transformation (OT) approach [12, 45], and the Conflict-free Replicated Data Type (CRDT) approach [43, 44]. Implementing real-time collaborative editing of rich text is notoriously hard; the CKEditor team reports that it took them approximately 42 person-years [7]."}/>
    </>
  )
}

function Introduction(){
  return(
    <>
      <Header content={"1 Introduction"}/>
      <Paragraph content={"Realtime collaborative rich text editors like Google Docs have become a critical tool in modern knowledge work. An important part of implementing these editors is the collaboration algorithm that determines how to merge edits from users concurrently editing a shared document."}/>
      <Paragraph content={"Most commercial collaborative editors are based on the Operational Transform (OT) family of algorithms [12, 45]. While this approach has proven successful in practice, it has a drawback: all known OT algorithms for rich text require a central server to mediate edits. This limits scalability, precludes peer-to-peer decentralized sharing, and limits the flexibility of branching and merging workflows on a document."}/>
      <Paragraph content={"Meanwhile, Conflict-free Replicated Data Types (CRDTs) [43, 44] are another class of algorithms that allow decentralized editing by modeling documents as data structures in which concurrent operations are commutative. There are many CRDT algorithms for plain text (see Section 2.3), but not much work has been done on CRDTs for rich text. We are not aware of any published algorithms; some open-source implementations have extended plaintext CRDTs to cover rich text, but these extensions cause editing anomalies that fail to preserve user intent."}/>
      <Paragraph content={"In this paper, we present a novel CRDT called Peritext which supports collaborative editing of rich text in a decentralized setting. Specifically, we make the following four contributions:"}/>
      <List/>
      <Paragraph content={"Peritext supports both real-time and asynchronous collaboration, allowing users to choose their preferred mode depending on the context. Moreover, Peritext provides a basis for local-first [27] rich text editing software, which allows users to continue working while their device is offline, and gives users greater privacy, ownership, and agency over the files they create."}/>
      <Paragraph content={"Peritext is not a complete system for asynchronous collaboration: for example, it does not yet visualize differences between document versions. Moreover, in this paper we focus only on inline formatting such as bold, italic, font, text color, links, and comments, which can occur within a single paragraph of text. In a future paper we will extend our algorithm to support block elements such as headings, bullet points, block quotes, and tables."}/>
    </>
  )
}

function List(){
  return(
    <div className={"pl-6"}>
      <Paragraph content={"∙ We demonstrate how naively extending existing plaintext or tree CRDTs does not accurately preserve user intent in the context of rich text editing. In Section 2 we highlight specific editing anomalies in several open source rich text editors."}/>
      <Paragraph content={"∙ We propose a general model of intent preservation in collaborative rich text editing, using a series of example scenarios where two users concurrently edit the same formatted text. This provides a test suite that can be used to evaluate the intent preservation behavior of any algorithm for collaborative rich text editing (Section 3)."}/>
      <Paragraph content={"∙ We describe a novel CRDT for rich text called Peritext that satisfies all the criteria of our model for intent preservation. The key idea is to store an append-only set of formatting spans alongside the plaintext character sequence, where each span starts and ends on either side of some character in the sequence, addressed via a stable identifier. The final formatting visible in the editor is a deterministic function of the formatting spans that is independent of the order in which formatting operations arrived at a node, guaranteeing convergence across nodes. We describe a prototype implementation of our algorithm [31], written in TypeScript and integrated with an editor UI based on the ProseMirror library (Section 4)."}/>
      <Paragraph content={"∙ We show that Peritext complies with a widely-used consistency model for collaborative editing [45]: we prove in Appendix A that it converges, and we explain how it preserves causality and user intentions. We evaluate our prototype implementation using randomized property-based testing, generating concurrent editing sessions and checking that Peritext merges them correctly."}/>
    </div>
  )
}



function Header({ content }: any){
  return(
    <div className={"text-lg pb-4"}>{content}</div>
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
