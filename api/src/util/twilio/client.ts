import twilio from "twilio";

/* const accountSid = process.env.TWILIO_ACCOUNT_SID;
const autToken = process.env.TWILIO_AUTH_TOKEN; */

const accountSid = "AC3d558da64d8f4de8d140ca3bacae3dcc"
const autToken = "69522d2a79958b89d00e9da54e29501e"

export const client = twilio(accountSid, autToken);
