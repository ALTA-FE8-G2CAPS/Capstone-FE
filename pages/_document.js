import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script defer src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
            </body>
        </Html>
    )
}