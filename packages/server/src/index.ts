import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.basePath("api").get("/expenses", (c) => {
  return c.json({
    total: 13034.12,
  });
});

export type AppType = typeof app;
export default app;
