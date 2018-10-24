import { UploadModel } from "../upload/upload.interface";

export interface EventModel {
  EventId: number,
  Title: string,
  Description: string,
  Photos: UploadModel[]
}
