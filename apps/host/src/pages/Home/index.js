import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'

const module = loadModule(
    process.env['HOME_URL'],
    'home',
    './App',
)

const Home = () => {
    const { Component } = useLoadModule(module)
    return <Component />
}

export default Home