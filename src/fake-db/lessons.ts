export type LessonType = {
  lessonId: number;
  lesson_topic: string;
  lessonQuestion: string;
  tags: string;
};

export const LessonDB = [
  {
    lessonId: 1,
    lesson_topic: "A sum of two ?",
    lessonQuestion: "write a function that sums two number.",
    tags: "javascript",
  },
  {
    lessonId: 2,
    lesson_topic: "The Hashtag Generator",
    lessonQuestion:
      "The marketing team is spending way too much time typing in hashtags.Let's help them with our own Hashtag Generator!  Here's the deal: It must start with a hashtag (#).",
    tags: "javascript",
  },
  {
    lessonId: 3,
    lesson_topic: "What is between?",
    lessonQuestion:
      "Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.",
    tags: "javascript",
  },
  {
    lessonId: 4,
    lesson_topic: "You Can't Code Under Pressure #1",
    lessonQuestion: "Code as fast as you can! You need to double the integer and return it.",
    tags: "javascript",
  },
];
