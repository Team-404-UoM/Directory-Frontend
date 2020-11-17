import React from 'react'

export default function Albums() {
    return (
    <div className="container" style={{marginTop: 20}}>
    <div class="card-columns">
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/JtrKB96/Colibri-Students-ovmj0pxm9pijaq33alpgtr13y1csrq6x57feotcfwo.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    BATCH TRIP ARCHI - BATCH 12
                </button>
            </div>
        </div>
        </div>
    </div>
    )
}