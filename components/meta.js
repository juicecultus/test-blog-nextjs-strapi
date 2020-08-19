import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta
        name='description'
        content={`A statically generated blog for ${CMS_NAME}.`}
      />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
