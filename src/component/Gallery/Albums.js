import React,{useEffect, useState} from 'react'
import {getAlbums, getAlbumThumbnails, getAlbumThumbnailImage} from './Events_api_calls'//'../../config/api_calls'

export default function Albums() {
    
    const [list, setlist] = useState([]);
    const [thumbs, setthumbs] = useState([]);

    useEffect(()=>{
        getAlbums().then(results => {
            setlist(results)
        })
        getAlbumThumbnails().then(results =>{
            setthumbs(results)
        })
    }, [])

    console.log(thumbs);
    console.log(list);

    return (
    <div className="container" style={{marginTop: 20}}>
    <div class="card-columns">
        {list.map(items =>{
            return <div>
                {thumbs.map(item => {
                    return item.filename === items.thumbnail && items.approval === true ? 
                    <div class="card bg-light backgrounds" 
                    style={{background: `url(http://localhost:5000/gallery/image/${item.filename})`, backgroundSize: '400px', borderRadius: 15}}
                    >
                        <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                            <button className="btn btn-dark" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                                {items.name}
                            </button>
                        </div>
                    </div>
                    : null
                    }
                )}
                </div>
        })}
    </div>
    </div>
    )
    
}
