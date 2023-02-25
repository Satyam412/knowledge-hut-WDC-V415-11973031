import CourseCard from "./CourseCard";
import "./../styles/CourseSection.css";

function CourseSection() {
  let courses = [
    {
      imageSrc:
        "https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1.png",
      headingContent: "Unboxing Blogging and Content Writing",
      paraContent:
        "Become a highly paid content writer or start your own blog!",
    },
    {
      imageSrc:
        "https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Poetry-Website-1.png",
      headingContent: "Unboxing Poetry",
      paraContent:
        "Go from reading and admiring poems to writing and sharing your own!",
    },
    {
      imageSrc:
        "https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Storytelling-1.png",
      headingContent: "Unboxing Storytelling",
      paraContent:
        "Fascinated by other people's stories? Learn how to share your own!",
    },
    {
      imageSrc:
        "https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Storytelling-1.png",
      headingContent: "Unboxing Storytelling",
      paraContent:
        "Fascinated by other people's stories? Learn how to share your own!",
    },
    {
      imageSrc:
        "https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Storytelling-1.png",
      headingContent: "Unboxing Storytelling",
      paraContent:
        "Fascinated by other people's stories? Learn how to share your own!",
    },
  ];

  let output = [];
  courses.forEach((course) => {
    output.push(
      <CourseCard
        imageSrc={course.imageSrc}
        headingContent={course.headingContent}
        paraContent={course.paraContent}
      />
    );
  });

  return (
    <section>
      <h1>Our Best Selling Courses</h1>
      <div id="coursesSection">{output}</div>
    </section>
  );
}

export default CourseSection;
