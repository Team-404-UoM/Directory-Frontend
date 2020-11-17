import React from 'react'

export default function Albums() {
    return (
    <div className="container" style={{marginTop: 20}}>
    <div class="card-columns">
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/LYhWJDR/photo-shoot-vs-1.webp)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    PHOTOSHOOT - B-FAC BATCH 14
                </button>
            </div>
        </div>
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/7jXMK2j/unnamed-3.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    UNIVERSITY OF MORATUWA
                </button>
            </div>
        </div>
        </div>
    </div>
    )
}
