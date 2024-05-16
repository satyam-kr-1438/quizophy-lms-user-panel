import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class Quizophy extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/public/favicon.ico" type="image/png" />
          <link rel="apple-touch-icon" href="/public/apple-touch-icon.png"/>

          <link rel="manifest" href="/public/manifest.json" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ======================================================================

Quizophy.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // Run the React rendering logic synchronously
  ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    });

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};
