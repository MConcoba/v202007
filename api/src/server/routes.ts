import * as core from "express-serve-static-core";
import { MessageSourceController } from "../feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "../feature/message-source/InjectionKeys";
import { dependencies } from "./apollo";




export default (app: core.Express) => {
  const messageSourceController = dependencies.provide<MessageSourceController>(
    MessageSourceControllerInjectionKey
  );

  app.post(
    "/message-source",
    messageSourceController.messageSource.bind(messageSourceController)
  );
};
