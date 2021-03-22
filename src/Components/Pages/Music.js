import React from 'react';

const Music = (props) => {
    console.log(props)
    let music = props.musicFiles.map((m, i) => {
        return(
            <fieldset>
                <legend>{m.title}</legend>
                <audio controls src={m.file} type={m.type} > 
                </audio>
            </fieldset>
        )
    })
    return(
        <section>
            <h1>One hobby I have had for years is writing and recording music!</h1>            
            <div className="container">
                {music}
            </div>
        </section>
    )
};

export default Music;