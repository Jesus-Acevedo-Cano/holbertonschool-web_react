interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 30,
  location: 'Miami',
};

const student_2: Student = {
  firstName: 'Naomi',
  lastName: 'Sorell',
  age: 30,
  location: 'Ohio',
};

const studentsList: Array<Student> = [student_1, student_2];
