import twilio from "twilio";
/* require('custom-env').env()
 */
/* const { aid, authToken } = config.get("twilio"); */

const aid = 'AC3d558da64d8f4de8d140ca3bacae3dcc'
const authToken = '15998959dcfa05ae14f9d4e732425cf3'

export const client = twilio(aid, authToken);
