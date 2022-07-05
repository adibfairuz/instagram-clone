import React from 'react'
import InstagramLogo from '../../assets/images/instagram_logo_brand.png'

const LoadingScreen = () => {
  return (
    <div style={{
        background: 'rgb(229, 231, 235)'
    }}>
        <div style={{
            maxWidth: '500px',
            minHeight: '100vh',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto'
        }}>
            <div style={{
                display: 'flex',
                flex: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img src={InstagramLogo} width={80} height={80} />
            </div>
            <div style={{
                padding: '36px 0'
            }}>
                <div style={{
                    fontWeight: 800,
                }}>
                    INSTAGRAM CLONE
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingScreen