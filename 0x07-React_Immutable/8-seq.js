import Immutable from 'immutable';

const printBestStudents = (object) => {
  const seq = Immutable.Seq(object);

  const getStudent = seq.filter((value) => value.score > 70);

  const student = getStudent.toJS();

  const firstLeterToUpercase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(student).map((key) => {
    student[key].firstName = firstLeterToUpercase(student[key].firstName);
    student[key].lastName = firstLeterToUpercase(student[key].lastName);
    return student[key];
  });

  console.log(student);
};

export default printBestStudents;
