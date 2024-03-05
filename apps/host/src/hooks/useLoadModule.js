import React, {useRef, useEffect, useState} from 'react'
import Spinner from '../components/Loaders/Spinner'

const useLoadModule = (module, props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [loadedComponent, setLoadedComponent] = useState();
    const ref = useRef(null)
    useEffect( async () => {
        setIsLoading(true)
        const container = await module
        setIsLoading(false)
        if (props?.isReactApp && container.App) {
            const DynamicComponent = container.App;
            setLoadedComponent(<DynamicComponent />);
        } else {
            container.mount(ref.current, props)
        }
    }, [])
    return {
        Component: () => {
            if (isLoading) {
                return <Spinner />
            }
            if (props?.isReactApp && loadedComponent) {
                return loadedComponent
            }
            return <div ref={ref} />
        },
        isLoading
    }
}

export default useLoadModule