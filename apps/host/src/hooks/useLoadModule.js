import React, {useRef, useEffect, useState} from 'react'
import Spinner from '../components/Loaders/Spinner'

const useLoadModule = (module) => {
    const [isLoading, setIsLoading] = useState(false)
    const ref = useRef(null)
    useEffect( async () => {
        setIsLoading(true)
        const container = await module
        setIsLoading(false)
        container.mount(ref.current)
    }, [])
    return {
        Component: () => {
            if (isLoading) {
                return <Spinner />
            }
            return <div ref={ref} />
        },
        isLoading
    }
}

export default useLoadModule