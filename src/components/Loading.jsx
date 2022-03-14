import React from 'react'

function Delayed({ children, wait=500 }) {
    const [show, setShow ] = React.useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, wait)

        return () => clearTimeout(timeout)
    })

    return () => show === true ? children : null
}

export default function Loading() {
    return (
        <Delayed>
            <div className="loading center">Loading</div>
        </Delayed>
    )
}