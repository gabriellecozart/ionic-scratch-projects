import { UploadModel } from '../upload-model/upload-model.interface';
export interface TagModel {
  TagId: number,
  Name: string,
  Description: string,
  Photos: UploadModel[]
}
