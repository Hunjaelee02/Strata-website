export const config = {

    runtime: 'edge',

};

export default function handler(req) {

    const { searchParams } = new URL(req.url);

    const unit = searchParams.get("unit") || "unknown";

    return new Response(`Alert: New issue reported for unit ${unit}`,{

        status: 200,

    });

}