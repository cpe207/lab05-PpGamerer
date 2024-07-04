// define interface for Student object
interface Student {
  name: string;
  score: number;
}
// assign interface/type to the function definition properly
function findTopNames(students:Student[]):string[] {
  let filterStds = students.filter((std) => std.score > 8);
  let mapName = filterStds.map((std) => std.name);
  return mapName;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//รหัส นศ.: 660610779
//ชื่อ-สกุล : พิมลนาฏ แก้วบุตร