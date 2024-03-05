import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'

const module = loadModule(
    process.env.DIRECT_MESSAGE_URL,
    'directMessage',
    './App',
)


const Explore = () => {
    const { Component } = useLoadModule(module, { isReactApp: true })
    return <Component />
}

export default Explore