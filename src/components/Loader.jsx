import React from 'react'

const Loader = () => {
    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <div
                className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status" style={{ position: 'relative', top: '40%' }}>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
    )
}

export default Loader