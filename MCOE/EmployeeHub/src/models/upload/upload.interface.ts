export interface UploadModel {
  PhotoId: number,
  Latitude: number,
  Longitude: number,
  LocationDescription: string,
  LocationCity: string,
  LocationState: string,
  DateAdded: Date,
  Image: string,
  Thumbnail: string,
  Description: string,
  ImageResolution: string,
  HasMediaRelease: boolean,
  StatusId: number,
  EventId: number,
  EmployeeId: string,
  Event: string, //Event
  Status: string, //Status
  Tags: string[] //Tag[]
}
