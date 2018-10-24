import { UploadModel } from '../upload-model/upload-model.interface';
export interface EventModel {
  EventId: number,
  Title: string,
  Description: string,
  Photos: UploadModel[]
}
