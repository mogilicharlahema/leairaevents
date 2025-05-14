import React from "react";
import "../Styles/work.css";

const WorkSection = () => {
  const workStepsData = [
    {
      number: "1",
      title: "Client Meeting",
      description:
        "Our approach to communication involves efficient face-to-face or in-person meetings to understand your needs and problems, focusing on attentive discussion and active listening to establish trust, define expectations, and provide solutions.",
    },
    {
      number: "2",
      title: "Planning",
      description:
        "The work plan serves as a baseline budget and detailed timetable that directs the execution, oversight, and management of the project. Throughout the project lifecycle, it guarantees stakeholder comprehension, controls expenses, and assesses financial performance.",
    },
    {
      number: "3",
      title: "Site Visit",
      description:
        "When organizing an event, a site visit is essential since it gives you a thorough grasp of the venue's layout, spatial dynamics, and logistical needs. Ensuring both practical and aesthetic alignment, this aids in making well-informed judgments on guest movement, key element placement, and event flow.",
    },
    {
      number: "4",
      title: "Execution",
      description:
        "Effective, timely, and coordinated tasks are ensured by the interdependence between strategic planning and execution. Achieving consistent, successful results in any effort requires striking a balance between rigorous planning and focused execution.",
    },
  ];

  const numItems = workStepsData.length;

  return (
    <section className="work-section-container">
      <h1 className="work-section-main-title">How we work</h1>
      <div
        className="work-steps-list"
        style={{ '--num-items': workStepsData.length }}

      >
        {workStepsData.map((step, index) => (
          <div
            className="work-step-item"
            key={index}
          
          >
            <div className="work-step-number-circle">
              <span>{step.number}</span>
            </div>
            <div className="work-step-content">
              <h3 className="work-step-title">{step.title}</h3>
              <p className="work-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;