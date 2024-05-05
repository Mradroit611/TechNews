import React from 'react'

const Newsitem =(props)=> {

        let {title, description, imageurl, newsurl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}
                    
                    >
                <span className='badge rounded-pill bg-danger'>{source}</span>
                </div>
                    <img src={!imageurl?"https://staticg.sportskeeda.com/editor/2023/07/b5045-16898496908833.png":imageurl} className='card-img-top' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{!description?"If you feel that this content might adversely affect you, it's okay to choose not to view or ":description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsurl} target='__blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div> 
        )
}

export default Newsitem
