export class Students {
  StudentId: number;

  StudentName: string;

  StudentMarks: string;

  constructor(StudentId: number, StudentName: string, StudentMarks: string) {
    this.StudentId = StudentId;

    this.StudentMarks = StudentMarks;

    this.StudentName = StudentName;
  }
}
