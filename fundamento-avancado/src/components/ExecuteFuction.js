import React from 'react'

const ExecuteFuction = ({myFunction}) => {
    return (
        <div>
            <h1>Props com função</h1>
            <button onClick={myFunction}>Passando função</button>
        </div>
    )
}

export default ExecuteFuction