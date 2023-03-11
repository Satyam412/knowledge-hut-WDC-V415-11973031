import IndividualReason from "./IndividualReason";
import "./Reasons.css";

function Reasons() {
  let reasonData = [
    {
      icon: "bi bi-clipboard2-check",
      content:
        "Laborum labore voluptate proident cillum exercitation eu proident proident pariatur ut.",
    },
    {
      icon: "bi bi-envelope-paper-heart-fill",
      content:
        "Esse duis non anim eu qui nisi do ad et cupidatat qui voluptate.",
    },
    {
      icon: "bi bi-folder-symlink-fill",
      content: "Anim nisi non proident nostrud sint id.",
    },
    {
      icon: "bi bi-clipboard2-check",
      content:
        "Laborum labore voluptate proident cillum exercitation eu proident proident pariatur ut.",
    },
  ];

  let output = [];

  reasonData.forEach((element) => {
    output.push(
      <IndividualReason icon={element.icon} content={element.content} />
    );
  });

  return <section id="reasons">{output}</section>;
}

export default Reasons;
