export const config = {

    runtime: 'edge',

};

export default function handler() {

    const time = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

    return new Response(`Your current time is: ${time}`, {

        status: 200,

    });

}