import React from 'react'

export default function Albums() {

    return (
    <div className="container" style={{marginTop: 20}}>
    <div class="card-columns">
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/K5NTqWN/md-duran-1-Vq-HRwxc-CCw-unsplash.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    <a href={`/albums/${'events'}/${1}`} style={{color: 'white', textDecoration: 'none'}}> GRADUATION CEREMONY - FIT BATCH 15</a>
                    
                </button>
            </div>
        </div>
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/Sfqg4wJ/BLOG-how-to-motivate-students.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    SEMINAR / WORKSHOP B-FAC BATCH 14
                </button>
            </div>
        </div>
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
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/QjkqxqB/z-pvi-SLIM.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    GRADUATION CEREMONY - FIT BATCH 15
                </button>
            </div>
        </div>
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
