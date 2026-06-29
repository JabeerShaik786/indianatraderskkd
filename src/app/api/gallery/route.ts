import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallary');
    const categories = ['Houses', 'Bed-bunkers', 'Washrooms', 'Offices', 'Cafes'];
    const items: Array<{ src: string; alt: string; title: string; category: string }> = [];

    categories.forEach((category) => {
      const categoryDir = path.join(galleryDir, category);
      if (fs.existsSync(categoryDir)) {
        const files = fs.readdirSync(categoryDir);
        files.forEach((file) => {
          const ext = path.extname(file).toLowerCase();
          if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(ext)) {
            const titleWithoutExt = path.basename(file, ext);
            const cleanTitle = titleWithoutExt
              .replace(/[_-]/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();

            items.push({
              src: `/gallary/${category}/${file}`,
              alt: `${category} - ${cleanTitle}`,
              title: cleanTitle,
              category: category,
            });
          }
        });
      }
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to read gallery directory' }, { status: 500 });
  }
}
