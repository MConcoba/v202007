import { client } from "../client";
import { ISMSVerification } from "../interface/ISMSVerification";
/* require('custom-env').env() */
/* const { verifyServiceID } = config.get("twilio"); */

const verifyServiceID = "VAbd17e394ebeac1db4c6345fcf5e47e3a"

const send = async (to: string): Promise<boolean> => {
  const response = await client.verify
  .services(verifyServiceID)
  .verifications.create({
    locale: "es",
    to,
    channel: "sms",
  });
return response.status === "approved" || response.status === "pending";
};

const verify = async (to: string, code: string): Promise<boolean> => {
  try {
    const response = await client.verify
      .services(verifyServiceID)
      .verificationChecks.create({
        to,
        code,
      });

    return response.status === "approved";
  } catch (error) {}
};

const smsVerification: ISMSVerification = {
  verify,
  send,
};

export default smsVerification;
