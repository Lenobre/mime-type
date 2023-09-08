// "424d": { extension: "bmp", "content-type": "image/bmp" },
export interface IAssignmentsChild {
  extension: string;
  "content-type": string;
}

export interface IAssignments {
  [key: string]: IAssignmentsChild;
}
