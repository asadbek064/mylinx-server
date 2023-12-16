import B2 from 'backblaze-b2';
import nanoid from 'nanoid';
import { processImage } from './processimage';
import { readFile } from 'fs/promises';
import { parseHrtimeToSeconds } from './util';

export type BackBlaze = {
  url: string;
};

export const uploadFile = async (fileBuffer: Buffer, mimeType: string) => {
  const startImageProcess = process.hrtime();

  const applicationKeyId = process.env['BACKBLAZE_KEY_ID'] as string;
  const applicationKey = process.env['BACKBLAZE_APP_KEY'] as string;
  const bucketId = process.env['BACKBLAZE_BUCKET_ID'] as string;

  const fileId = nanoid.nanoid(10);

  const fileName = `mylinx-img-${fileId}`;

  try {
    // process image before upload
    const processedFileBuffer = await processImage(fileBuffer);

    const elapsedImageSeconds = parseHrtimeToSeconds(
      process.hrtime(startImageProcess)
    );
    console.log('image process: ' + elapsedImageSeconds + 'seconds');

    const b2 = new B2({ applicationKeyId, applicationKey });

    const { data: authData } = await b2.authorize();
    const { data: uploadData } = await b2.getUploadUrl({
      bucketId: bucketId,
    });

    const { data: uploadedFile } = await b2.uploadFile({
      uploadUrl: uploadData.uploadUrl,
      uploadAuthToken: uploadData.authorizationToken,
      data: processedFileBuffer,
      fileName: fileName,
      mime: mimeType,
    });

    // Construct friendly URL to file
    const bucketName = authData.allowed.bucketName;
    const downloadURL = authData.downloadUrl;
    const url = `${downloadURL}/file/${bucketName}/${uploadedFile.fileName}`;

    return { url };
  } catch (error) {
    console.log(error);
    return null;
  }
};
