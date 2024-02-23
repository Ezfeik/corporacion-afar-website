import { imageType } from "./imgTypes";

export type NewsType = {
  id?: number;
  type?: string;
  date?: string;
  title?: string;
  cover?: imageType;
  text?: string;
}
