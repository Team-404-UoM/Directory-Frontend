import React from 'react'

export default function JobCard(props) {

    let date =  new Date(props.date)

    return (
        <div style={{marginTop: 20}}>
        <div class="card">
        <div class="card-header">
        Posted on {date.toDateString()}
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <ul>
                {props.req.map(item =>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </div>
        </div>
    )
}
