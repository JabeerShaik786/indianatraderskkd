const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_IMAGE = path.join('C:', 'Users', 'Dell', '.gemini', 'antigravity', 'brain', '677d9dda-7a90-4990-b0a9-051e6d40eb46', 'media__1782845470869.png');

const TARGETS = {
  appFavicon: path.join(__dirname, '..', 'src', 'app', 'favicon.ico'),
  publicFavicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
  public16: path.join(__dirname, '..', 'public', 'favicon-16x16.png'),
  public32: path.join(__dirname, '..', 'public', 'favicon-32x32.png'),
  public48: path.join(__dirname, '..', 'public', 'favicon-48x48.png'),
  publicApple: path.join(__dirname, '..', 'public', 'apple-touch-icon.png'),
  public512: path.join(__dirname, '..', 'public', 'icon-512x512.png'),
};

async function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 (ICO)
  header.writeUInt16LE(count, 4); // Count

  const directoryEntries = [];
  let currentOffset = 6 + count * 16;

  for (let i = 0; i < count; i++) {
    const { width, height, buffer } = pngBuffers[i];
    const size = buffer.length;
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel (32 bpp)
    entry.writeUInt32LE(size, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset
    directoryEntries.push(entry);
    currentOffset += size;
  }

  return Buffer.concat([header, ...directoryEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  console.log('Generating favicons from source:', SOURCE_IMAGE);
  
  if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error('Source image does not exist!');
    process.exit(1);
  }

  // 1. Generate PNGs in memory and write to files
  const png16 = await sharp(SOURCE_IMAGE).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(TARGETS.public16, png16);
  console.log('Generated favicon-16x16.png');

  const png32 = await sharp(SOURCE_IMAGE).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(TARGETS.public32, png32);
  console.log('Generated favicon-32x32.png');

  const png48 = await sharp(SOURCE_IMAGE).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(TARGETS.public48, png48);
  console.log('Generated favicon-48x48.png');

  const png180 = await sharp(SOURCE_IMAGE).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(TARGETS.publicApple, png180);
  console.log('Generated apple-touch-icon.png');

  const png512 = await sharp(SOURCE_IMAGE).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(TARGETS.public512, png512);
  console.log('Generated icon-512x512.png');

  // 2. Generate multi-resolution ICO file
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(TARGETS.appFavicon, icoBuffer);
  fs.writeFileSync(TARGETS.publicFavicon, icoBuffer);
  console.log('Generated app/favicon.ico and public/favicon.ico successfully!');
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
