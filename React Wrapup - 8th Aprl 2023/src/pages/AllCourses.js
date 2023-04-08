import IndividualCourse from "../components/courses/IndividualCourse";
import "./../styles/AllCourses.css";
import allCourses from "../data/courses";
import SideBar from "../components/SideBar";

function AllCourses() {
  return (
    <>
      <section class="outerContainer">
        <SideBar />
        <section id="allCourses">
          {allCourses.map((course) => (
            <IndividualCourse
              id={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default AllCourses;
