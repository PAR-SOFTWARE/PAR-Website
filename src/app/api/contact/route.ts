import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, company, email, needs, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const needsList = Array.isArray(needs) ? needs.filter((n) => typeof n === 'string').join(', ') : '';

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'PAR Software Contact <contact@parsoftware.co.za>',
    to: ['ruben@parsoftware.co.za', 'erik@parsoftware.co.za'],
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
    text: [
      `Name: ${name}`,
      `Company: ${company || '-'}`,
      `Email: ${email}`,
      `Needs: ${needsList || '-'}`,
      '',
      message,
    ].join('\n'),
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
