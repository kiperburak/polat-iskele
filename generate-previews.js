import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import sharp from 'sharp';

// Configuration
const sourceDir = './public/images';
const previewDir = './public/images/previews';
const previewWidth = 400; // Width for preview images
const quality = 80; // JPEG quality (1-100)

// Create previews directory if it doesn't exist
if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
  console.log('Created previews directory');
}

// Get all image files
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const imageFiles = fs.readdirSync(sourceDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext) && !file.includes('_preview');
  });

console.log(`Found ${imageFiles.length} images to process`);

// Check if ImageMagick is installed
try {
  execSync('magick --version', { stdio: 'ignore' });
  console.log('ImageMagick found - using for image processing');
  
  // Process images with ImageMagick
  imageFiles.forEach((file, index) => {
    const sourcePath = path.join(sourceDir, file);
    const previewPath = path.join(previewDir, file.replace(/\.[^/.]+$/, '_preview.jpg'));
    
    const command = `magick "${sourcePath}" -resize ${previewWidth}x -quality ${quality} "${previewPath}"`;
    
    try {
      execSync(command, { stdio: 'pipe' });
      console.log(`✓ Processed ${file} (${index + 1}/${imageFiles.length})`);
    } catch (error) {
      console.error(`✗ Failed to process ${file}:`, error.message);
    }
  });
  
} catch (error) {
  console.log('ImageMagick not found - using Sharp for image processing');
  
  // Process images with Sharp
  const processImages = async () => {
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const sourcePath = path.join(sourceDir, file);
      const previewPath = path.join(previewDir, file.replace(/\.[^/.]+$/, '_preview.jpg'));
      
      try {
        await sharp(sourcePath)
          .resize(previewWidth, null, { withoutEnlargement: true })
          .jpeg({ quality })
          .toFile(previewPath);
        console.log(`✓ Processed ${file} (${i + 1}/${imageFiles.length})`);
      } catch (error) {
        console.error(`✗ Failed to process ${file}:`, error.message);
      }
    }
  };
  
  processImages().then(() => {
    console.log('\nPreview generation complete!');
    console.log(`Preview images saved to: ${previewDir}`);
  });
} 