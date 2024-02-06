import fastify from "fastify";

const app = fastify();

app.post("/polls", () => {
  return "Hello NLW";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
