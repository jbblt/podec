import { type Gender } from 'models/enum/commonEnum';

export type ClientInfoForm = {
  firstname: string;
  lastname: string;
  gender: Gender;
  number: string;
  formNumber: string;
  applicator: string;
};
