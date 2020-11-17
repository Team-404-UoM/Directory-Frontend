import React from 'react'

export default function Albums() {
    return (
    <div className="container" style={{marginTop: 20}}>
    <div class="card-columns">
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/K5NTqWN/md-duran-1-Vq-HRwxc-CCw-unsplash.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    GRADUATION CEREMONY - FIT BATCH 15
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
        
        <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/QjkqxqB/z-pvi-SLIM.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
            <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                    GRADUATION CEREMONY - FIT BATCH 15
                </button>
            </div>
        </div>
        </div>
    </div>
    )
}
