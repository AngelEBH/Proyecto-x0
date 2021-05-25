import React from 'react'

 export type CardProps = {
    title : string;
    body: string;
}
export default function Card(props: CardProps) {
    return (
       <>
        <div style= {{backgroundColor: "aqua"}}>
            <h1>{props.title}</h1>
            <p> {props.body}</p>
            <hr/>
        </div>
        <br/>
       </>
    )
}
