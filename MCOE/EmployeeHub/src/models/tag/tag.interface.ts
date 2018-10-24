import { UploadModel } from "../upload/upload.interface";

export interface Tag {
  TagId: number,
  Name: string,
  Description: string,
  Photos: UploadModel[]
}
