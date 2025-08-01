import { NextRequest, NextResponse } from 'next/server';
import { getProperty } from '@/lib/data';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  console.log(slug);
  
  const property = await getProperty(slug);

  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }

  const role = req.headers.get('x-role') || 'public';

  if (property?.isPrivate && role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  return NextResponse.json({ property });
}