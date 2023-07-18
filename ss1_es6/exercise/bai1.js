let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];

// yêu cầu 1: sử dụng ES6 để xuất ra màn hình danh sách các bài đăng có rating >=4;
let getCourses = courses.filter((course) => {
  return course.rating >= 4;
});
console.log(getCourses);

// yêu cầu 2: sử dụng cú pháp es6 để  xuất ra màn hình  danh sách các bài đăng  có rating <4 với yêu cầu giá trị các phần tử của mảng có định dạng:
// <id>-<title>- <rating>
let getCoursesHaveRatingLess4 = courses
  .filter((course) => course.rating < 4)
  .map((course) => course.id + " - " + course.title + " - " + course.rating);
console.log(getCoursesHaveRatingLess4);

// yêu cầu 3: sử dụng cú pháp ES6  viết hàm trả về một mảng gộp 2 mảng courses và addedCourses;
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
const newArray = mergeArrays(courses, addedCourses);
console.log(newArray);
