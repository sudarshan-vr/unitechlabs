import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    const res = await fetch('https://formspree.io/f/xdawvlwq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, _replyto: email, subject, message, phone }),
    })

    const json = await res.json()

    if (!res.ok || json.errors) {
      console.error('Formspree error:', json)
      return NextResponse.json({ ok: false, error: 'Formspree rejected the submission' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
