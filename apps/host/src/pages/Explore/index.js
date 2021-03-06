import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'

const module = loadModule(
    process.env['EXPLORE_URL'],
    'explore',
    './App',
)

const Explore = () => {
    const { Component } = useLoadModule(module)
    return <Component />
}

export default Explore