import "./../styles/FeatureSection.css";
import IndividualFeature from "./IndividualFeature";

function FeatureSection() {
  let featureData = [
    {
      id: 1,
      number: 1,
      icon: "bi bi-shield-check",
      heading: "Security",
      content: "Do culpa labore quis ut nostrud laborum Lorem.",
    },
    {
      id: 2,
      number: "2",
      icon: "bi bi-people-fill",
      heading: "Customisation",
      content: "Commodo elit occaecat nostrud culpa magna ea amet.",
    },
    {
      id: 3,
      number: "3",
      icon: "bi bi-gear",
      heading: "Performace",
      content: "Commodo elit occaecat nostrud culpa magna ea amet.",
    },
    {
      id: 4,
      number: "4",
      icon: "bi bi-dropbox",
      heading: "Adaptability",
      content: "Commodo elit occaecat nostrud culpa magna ea amet.",
    },
  ];

  let output = [];
  featureData.map((feature) => {
    output.push(
      <IndividualFeature
        key={feature.id}
        number={feature.number}
        icon={feature.icon}
        heading={feature.heading}
        content={feature.content}
      />
    );
  });

  return (
    <section id="featureSection">
      <p>Et minim non cupidatat cillum nulla labore Lorem.</p>
      <h1>What can we offer?</h1>
      <div id="featureWrapper">
        <img src="https://images.unsplash.com/photo-1677741446873-bd348677e530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <div id="featureContainer">{output}</div>
      </div>
    </section>
  );
}

export default FeatureSection;
