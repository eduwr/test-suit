// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import todos from "../../../../data/todos.json";

type Status = "DONE" | "INCOMPLETE";

export interface Todo {
  _id: string;
  status: Status;
  description: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(todos as Todo[]);

    case "POST":
      return res.status(200).json(todos as Todo[]);
  }

  if (req.method === "GET") {
  }
}
