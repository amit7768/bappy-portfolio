import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const sz = searchParams.get('sz') || 'w800'

  if (!id) {
    return new NextResponse('Missing id', { status: 400 })
  }

  const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=${sz}`

  const response = await fetch(driveUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
      'Referer': 'https://drive.google.com',
    },
  })

  if (!response.ok) {
    return new NextResponse('Failed to fetch image', { status: response.status })
  }

  const buffer = await response.arrayBuffer()
  const contentType = response.headers.get('content-type') || 'image/jpeg'

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
