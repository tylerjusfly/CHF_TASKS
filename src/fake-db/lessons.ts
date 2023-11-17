export type LessonType = {
  lessonId: number;
  lesson_topic: string;
  lessonQuestion: string;
  code: string;
  expected: string;
  tags: string;
};

export const LessonDB = [
  {
    lessonId: 1,
    lesson_topic: "A sum of two ?",
    lessonQuestion: "write a function that sums two number.",
    code: `// start your code after this comment
    const sumIt = (value) => {
       
      return value
    }
    
    console.log(sumIt(3))`,
    expected: "6",
    tags: "javascript",
  },
  {
    lessonId: 2,
    lesson_topic: "The Hashtag Generator",
    code: `// start your code after this comment
    const hashtag = (value) => {
       
      return value
    }
    
    console.log(hashtag('hello'))`,
    expected: "#hello",
    lessonQuestion:
      "The marketing team is spending way too much time typing in hashtags.Let's help them with our own Hashtag Generator!  Here's the deal: It must start with a hashtag (#).",
    tags: "javascript",
  },
  {
    lessonId: 3,
    lesson_topic: "What is between?",
    code: `// write your code here
    const betweenMe = (a, b) => {
       
      return null
    }
    
    console.log(betweenMe(1, 4))`,
    expected: "[1,2,3,4]",
    lessonQuestion:
      "Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.",
    tags: "javascript",
  },
  {
    lessonId: 4,
    lesson_topic: "You Can't Code Under Pressure #1",
    code: `// write your code here
    function doubleInteger(i) {
      // i will be an integer. Double it and return it.
      return i;
    }
    
    console.log(doubleInteger(2))`,
    expected: "4",
    lessonQuestion: "Code as fast as you can! You need to double the integer and return it.",
    tags: "javascript",
  },
];
