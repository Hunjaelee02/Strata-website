export const config = {

    runtime: 'edge',

};

export default async function handler(req) {

    if (req.method === 'POST') {

        return new Response(null, {
            status: 302,
            headers: {

                Location: '/thankyou.html',

            },
        });
    }

    return new Response('Method Now Allowed', { status: 405 });

}

    