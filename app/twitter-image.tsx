import { ImageResponse } from 'next/og'
import { businessInfo } from '@/lib/data/business-info'

export const runtime = 'edge'

export const alt = businessInfo.name
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%)',
          padding: 60,
          position: 'relative',
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#74c69d',
          }}
        />

        {/* Business name */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '-1px',
            lineHeight: 1.1,
          }}
        >
          {businessInfo.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 34,
            color: '#b7e4c7',
            marginTop: 20,
            textAlign: 'center',
            fontWeight: 400,
          }}
        >
          {businessInfo.tagline}
        </div>

        {/* Location badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 36,
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 999,
            padding: '10px 28px',
            color: 'white',
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          Boulder, CO
        </div>

        {/* Decorative bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#74c69d',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
