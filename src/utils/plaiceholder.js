import { getPlaiceholder } from 'plaiceholder';

export default async function getBase64BlurUrl(imageUrl) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.error(error);
    return '';
  }
}
