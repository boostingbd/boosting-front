import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <meta charSet="utf-8" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../static/images/favicon.png")}></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha512-tDXPcamuZsWWd6OsKFyH6nAqh/MjZ/5Yk88T5o+aMfygqNFPan1pLyPFAndRzmOWHKT+jSDzWpJv8krj6x1LMA==" crossorigin="anonymous" />

                    <meta property="og:title" content="Digital marketing agency In bangladesh" key="title" />
                    <meta property="og:description" content="Boostingbd Provide facebook advertising services more then 100+ clients  already. We are provide website development , mobile application development services. 
Meta tag Facebook ads . facebook boost . page promote . website development. Node js website. Ecommerce development , mobile application" />
                    <meta property="og:image" content={`../static/images/general/home_og.png`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument