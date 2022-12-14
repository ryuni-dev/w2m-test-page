import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
              enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
      
            const initialProps = await Document.getInitialProps(ctx);
            return {
              ...initialProps,
              styles: (
                <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
                </>
              ),
            };
          } finally {
            sheet.seal();
          }
        
        // return {
        //     ...initialProps,
        //     styles: React.Children.toArray([initialProps.styles])
        // };
    }

    render() {
        return (
        <Html>
            <Head>{CssBaseline.flush()}</Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

export default MyDocument;