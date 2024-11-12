`use strict`;

function studentOption() {
  const students = [
    {
      name: 'John',
      id: '2345768',
    },
    {
      name: 'Paul',
      id: '2134657',
    },
    {
      name: 'Jones',
      id: '5423679',
    },
  ];
  
  const target = document.getElementById('target');
  
  for (let student of students) {
    const studentNumOption = document.createElement('option');
    studentNumOption.value = student.id;
    studentNumOption.textContent = student.name;
    target.appendChild(studentNumOption);
  }
}

studentOption();
