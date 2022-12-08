import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang='es' className='sr'>
      <Head>
        <meta name="theme-color" content="#090426"/>
        <meta name="keywords" content="alexqs96 porfolio" />
        <meta name="description" content="alexqs96 porfolio" />
        <meta property="og:description" content="Web Developer" />
        <meta property="og:image" content="/img/banners/porfolio_og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Alexqs96 Banner" />
        <meta property="og:title" content="Alexqs96 Porfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://alexqs96.vercel.app"/>
      </Head>
      <body>
        <div id="momentum">
          <Main />
        </div>
        <NextScript />
        <script src='/js/butter.js' defer></script>
      </body>
    </Html>
  )
}