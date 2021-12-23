import React from 'react'

const List = ({technologies}) => {
    console.log(technologies, 'the technologeis')
    let techList = technologies.map((tech,index) => {
        return <li key={index}>{'|'}{tech}</li>
    })

    console.log(techList, 'this is the techList')

    return(
        <div id="list">
            <h2>Technologies Used:</h2>
            <ul>
                {techList}
            </ul>
        </div>
    )
   
}

export default List
