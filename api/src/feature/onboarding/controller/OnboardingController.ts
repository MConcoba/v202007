import { ISMSVerification } from "../../../util/twilio/interface/ISMSVerification";
import { IOnboardingController } from "../interface/IOnboardingController";

export class OnboardingController implements IOnboardingController {
  private twilioSMSVerification: ISMSVerification;

  constructor(twilioSMSVerification: ISMSVerification) {
    this.twilioSMSVerification = twilioSMSVerification;
  }

  async sendPhoneNumberVerificationCode({ phoneNumber }) {
     // TODO check if phone number already exists (apply to resolv er middleware)

   return this.twilioSMSVerification.send(phoneNumber);
  } 

 /*  async sendPhoneNumberVerificationCode(): Promise<boolean> { 
    return true 
 }  */
}
