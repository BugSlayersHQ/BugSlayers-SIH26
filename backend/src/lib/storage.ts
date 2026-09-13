import { S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  region: process.env.STORAGE_REGION ?? 'auto',
  endpoint: process.env.STORAGE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY ?? '',
  },
});

export const storageBucket = process.env.STORAGE_BUCKET ?? '';
