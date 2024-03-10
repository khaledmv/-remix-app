import React from 'react'


interface Notes {
    title: string,
    content: string
}


const NodeList = ({ notes }) => {
  return (
    <div>
        {
            notes.map( note => (
                <> 
                <h2> { note.title } </h2>
                <p> { note.content } </p>
                </>
            ))
        }
    </div>
  )
}

export default NodeList
