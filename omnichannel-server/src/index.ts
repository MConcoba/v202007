import { Request, Response } from "express";
import Dependencies from "@corecodeio/libraries/di";
import { MessageScourceControllerInjectionKey } from "./feature/menssage-source/controller/MessageScourceControllerInjectionKey";
import server from "./server";

server.post("/menssage-source", async (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200);
}); 

const dependencies = new Dependencies();
const MessageScourceController = dependencies.provide(MessageScourceControllerInjectionKey);

server.listen("8001", () => {
  console.log("listening");
});
