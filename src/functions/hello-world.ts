export default async () => {
  // try {
  //   // Basic request info
  //   const requestInfo = {
  //     message: "Hello from Netlify Edge!",
  //     timestamp: new Date().toISOString(),
  //     method: request.method,
  //     url: request.url,
  //     country: context.geo?.country?.name || "Unknown",
  //   };
  //   return new Response(JSON.stringify(requestInfo, null, 2), {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  //       "Access-Control-Allow-Headers": "Content-Type",
  //     },
  //   });
  // } catch (error) {
  //   return new Response(JSON.stringify({ error: "Internal Server Error" }), {
  //     status: 500,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  // }

  return new Response("Hello from Netlify Edge!");
};
