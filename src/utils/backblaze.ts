import B2 from 'backblaze-b2';
import nanoid from 'nanoid';
import { IMAGE_TYPE, processAvatarImage } from './processimage';

export type BackBlaze = {
  fileId: string;
  imageType: string;
};

export const uploadFile = async (fileBuffer: Buffer, mimeType: string) => {
  const applicationKeyId = process.env['BACKBLAZE_KEY_ID'] as string;
  const applicationKey = process.env['BACKBLAZE_APP_KEY'] as string;
  const bucketId = process.env['BACKBLAZE_BUCKET_ID'] as string;

  const fileId = nanoid.nanoid(12);

  try {
    // process image before upload
    const processedFileBuffer = await processAvatarImage(fileBuffer);

    const b2 = new B2({ applicationKeyId, applicationKey });

    await b2.authorize();
    const { data: uploadData } = await b2.getUploadUrl({
      bucketId: bucketId,
    });

    await b2.uploadFile({
      uploadUrl: uploadData.uploadUrl,
      uploadAuthToken: uploadData.authorizationToken,
      data: processedFileBuffer,
      fileName: fileId,
      mime: mimeType,
    });

    return { fileId };
  } catch (error) {
    console.log(error);
    return null;
  }
};
