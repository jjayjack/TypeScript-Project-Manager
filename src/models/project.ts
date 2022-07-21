// Enum!
export enum ProjectStatus {
  Active,
  Finished,
}
// Custom Project Class
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
