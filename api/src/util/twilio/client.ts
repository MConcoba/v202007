import twilio from "twilio";
require('custom-env').env()
const { aid, authToken } = config.get("twilio");



export const client = twilio(aid, authToken);
