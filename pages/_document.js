import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous"
                />
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
                <script defer src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
                <script
                    defer
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin="true"></script>
                <script
                    defer
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin="true"></script>

                <script>var Alert = ReactBootstrap.Alert;</script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}