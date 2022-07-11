import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'

const module = loadModule(
    process.env['USER_URL'],
    'user',
    './App',
)

const User = () => {
    const { Component } = useLoadModule(module)
    return <Component />
}

export default User