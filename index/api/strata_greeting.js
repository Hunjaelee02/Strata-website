export const config = {

    runtime: 'edge',

};

export default function handler() {

    return new Response("Welcome to Strata Management Website 😊", {
        
        status: 200,  

    });

    
}