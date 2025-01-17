// app/api/getSeries.ts
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';


export async function getVideo(slug: any) {
  const payload = await getPayloadHMR({ config: configPromise });
  const series = await payload.find({
    collection: 'series',
    draft: false,
    depth: 2,
    where: {
      name: {
        equals: `${slug}`,
      },
    }
  });
  return series.docs;
}
