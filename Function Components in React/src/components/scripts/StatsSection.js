import Stat from "./Stat.js";

function StatsSection() {
  let stats = [
    {
      icon: "bi bi-award-fill",
      number: "50+",
      content: "Art educators",
    },
    {
      icon: "bi bi-award-fill",
      number: "3,500+",
      content: "Registered artists",
    },
    {
      icon: "bi bi-award-fill",
      number: "17,000+",
      content: "Community Members",
    },
    {
      icon: "bi bi-award-fill",
      number: "450+",
      content: "Events Conducted",
    },
  ];

  let output = [];

  stats.forEach((item) => {
    output.push(
      <Stat icon={item.icon} number={item.number} content={item.content} />
    );
  });

  return <section id="statsSection">{output}</section>;
}

export default StatsSection;
