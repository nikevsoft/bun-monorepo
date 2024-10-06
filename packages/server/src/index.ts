import { Hono } from "hono";

const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .basePath("api")
  .get("/expenses", (c) => {
    return c.json({
      total: 12345,
    });
  });

export type AppType = typeof app;
export default app;
