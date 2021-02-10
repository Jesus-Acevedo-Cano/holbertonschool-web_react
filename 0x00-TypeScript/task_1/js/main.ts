interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher_(firstName:string, lastName: string) {
  return firstName[0] + ". " + lastName;
}

interface printTeacherFunction {
  (firstName:string, lastName:string): string;
}

export const printTeacher: printTeacherFunction = printTeacher_;
