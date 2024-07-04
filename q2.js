// assign interface/type to the function definition properly
function findTopNames(students) {
    var filterStds = students.filter(function (std) { return std.score > 8; });
    var mapName = filterStds.map(function (std) { return std.name; });
    return mapName;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//รหัส นศ.: 660610779
//ชื่อ-สกุล : พิมลนาฏ แก้วบุตร
