import Document,{ Head, Main, NextScript} from 'next/document';
import App from './index'



export default class NewDocument extends Document{
    render(){
        return(
            <html>
            <Head>
            <title>AppWorks</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            </Head>
            <body>
            <Main />
            <NextScript/>
            </body>
            </html>
        )
    }
}