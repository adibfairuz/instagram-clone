import React, {useRef, useEffect} from 'react'
import { loadModule } from '../../utils'

const module = loadModule(
    'http://localhost:3003/remoteEntry.js',
    'user',
    './App',
)

const User = () => {
    const ref = useRef(null)
    useEffect( async () => {
        const container = await module
        container.mount(ref.current)
    }, [])
    return (
        <div ref={ref} />
    )
}

export default User