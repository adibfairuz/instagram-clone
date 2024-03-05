import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'
import { useNavigate } from 'react-router-dom'

const module = loadModule(
    process.env['HOME_URL'],
    'home',
    './App',
)

const Home = () => {
    const navigate = useNavigate();
    const { Component } = useLoadModule(module, { navigate })
    return <Component />
}

export default Home