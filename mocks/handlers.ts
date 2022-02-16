import { rest } from "msw";
import data from "../data/node.json";

export const handlers = [
  rest.get("/api/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
