export const config = {

    runtime: 'edge',

};

export default async function handler(req) {

    if (req.method === 'POST') {

        return new Response(`
            
            <html>
                <head>
                    <meta http-equiv="refresh content="0;url=/thankyou.html" />
                </head>
                <body>Redirecting to thank you page...</body>
            </html>
            `, {

                status: 200,
                headers: { 'content-type': 'text/html' },

            });
    }

    return new Response('Method Not Allowed', {  status: 405 });
}
