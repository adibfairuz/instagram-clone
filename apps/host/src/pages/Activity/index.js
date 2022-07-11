import React from 'react'
import useLoadModule from '../../hooks/useLoadModule'
import { loadModule } from '../../utils'

const module = loadModule(
    process.env['ACTIVITY_URL'],
    'activity',
    './App',
)

const Activity = () => {
    const { Component } = useLoadModule(module)
    return <Component />
}

export default Activity