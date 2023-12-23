import sharp from 'sharp';

export enum IMAGE_TYPE {
  AVATAR,
  BANNER,
}

export const processAvatarImage = async (
  fileBuffer: Buffer
): Promise<Buffer> => {
  try {
    // Resize dimensions (width, height)
    const width = 520;
    const height = 520;

    // Read the input file using sharp and await the processing
    const processedImageBuffer = await sharp(fileBuffer)
      .resize(width, height)
      .toFormat('jpeg')
      .jpeg({ quality: 95 })
      .toBuffer();

    return processedImageBuffer;
  } catch (error) {
    console.error('Error processing the image:', error);
    throw error;
  }
};
