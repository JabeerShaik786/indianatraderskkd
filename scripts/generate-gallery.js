const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'gallary');
const categories = ['Houses', 'Bed-bunkers', 'Washrooms', 'Offices', 'Cafes'];
const items = [];

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

        const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
          ? process.env.NEXT_PUBLIC_BASE_PATH 
          : '/indianatraderskkd';

        items.push({
          src: `${basePath}/gallary/${category}/${file}`,
          alt: `${category} - ${cleanTitle}`,
          title: cleanTitle,
          category: category,
        });
      }
    });
  }
});

const outputPath = path.join(__dirname, '..', 'src', 'app', 'gallery-data.json');
fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
console.log('Gallery data generated successfully at:', outputPath);
