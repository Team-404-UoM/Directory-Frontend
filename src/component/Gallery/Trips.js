import React,{useEffect, useState} from 'react'
import {getAlbumsByCaategory, getAlbumThumbnails, getAlbumThumbnailImage} from '../../config/api_calls'

export default function Albums() {
    
    const [list, setlist] = useState([]);
    const [thumbs, setthumbs] = useState([]);

    useEffect(()=>{
        getAlbumsByCaategory('trips').then(results => {
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
                    style={{background: `url(http://localhost:4000/gallery/image/${item.filename})`, backgroundSize: '400px', borderRadius: 15}}
                    >
                        <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold'}}>
                            <button className="btn btn-dark text-center" style={{opacity: 0.6, height: 130, borderRadius: 10}}>
                                <a href={`/albums/${items.category}/${items._id}`} style={{color: 'white'}}>{items.name}</a>
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