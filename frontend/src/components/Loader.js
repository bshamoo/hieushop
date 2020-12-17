import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner 
            animation='border' 
            variant="dark" 
            role='status' 
            className="m-auto d-block"
            aria-hidden="true"
            style={{
                width:'35px',
                height:'35px'
            }}
        >
        </Spinner>
    )
}

export default Loader
