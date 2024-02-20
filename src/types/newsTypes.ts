import { imageType } from "./imgTypes";

export type NewsType = {
  id: number;
  date: Date;
  title: string;
  cover: imageType;
  text: string;
}
