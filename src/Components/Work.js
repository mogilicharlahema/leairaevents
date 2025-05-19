import React, { useState, useEffect } from "react";
import workpic2 from "../Assets/workpic2.png";
import "../Styles/work.css";

const WorkSection = () => {
  const workData = { // Renamed from workSteps to avoid conflict with the array
    clientMeeting: {
      title: "Client Meeting",
      description:
        "Our communication strategy involves effective face-to-face or in-person meetings to understand your needs and problems, fostering trust, setting expectations, and offering solutions.",
    },
    planning: {
      title: "Planning",
      description:
        "The work plan is a comprehensive project management plan that sets the budget, timeline, and expectations for the project, ensuring stakeholder understanding and cost control.",
    },
    siteVisit: {
      title: "Site Visit",
      description:
        "A site visit is crucial for event planning, providing a comprehensive understanding of the venue's layout, spatial dynamics, and logistical needs, enabling informed decisions on guest movement, key element placement, and event flow.",
    },
    execution: {
      title: "Execution",
      description:
        "Strategic planning and execution are interdependent, ensuring effective, timely, and coordinated tasks. Balancing rigorous planning with focused execution is crucial for consistent, successful results.",
    },
  };

  // Define the order of steps for rotation.
  // This array defines THE steps themselves, not their initial positions.
  const orderedSteps = [
    workData.clientMeeting,
    workData.planning,
    workData.siteVisit,
    workData.execution,
  ];

  const numSteps = orderedSteps.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numSteps);
    }, 3000); // Change step every 3 seconds (2 seconds content + 1 second animation/buffer)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [numSteps]);

  // Determine which step's content goes into which visual slot based on currentIndex
  // The goal is to make the content "rotate" through the fixed visual positions.
  // Original visual order: ClientMeeting (Top), Execution (Left), Planning (Right), SiteVisit (Bottom)

  const clientMeetingSlotContent = orderedSteps[currentIndex % numSteps];
  const executionSlotContent = orderedSteps[(currentIndex + 3) % numSteps]; // Execution is visually "before" CM in the rotation
  const planningSlotContent = orderedSteps[(currentIndex + 1) % numSteps]; // Planning is visually "after" CM
  const siteVisitSlotContent = orderedSteps[(currentIndex + 2) % numSteps];


  return (
    <div className="work-container">
      <h2 className="work-main-title">How we work</h2>
      <div className="work-grid">
        {/*
          The `key` prop is crucial here. When the key changes (because the title of the content changes),
          React will unmount the old component and mount a new one, re-triggering the CSS animation.
        */}
        <div className="work-step work-step-client-meeting" key={clientMeetingSlotContent.title}>
          <h3>{clientMeetingSlotContent.title}</h3>
          <p>{clientMeetingSlotContent.description}</p>
        </div>

        <div className="work-step work-step-execution" key={executionSlotContent.title}>
          <h3>{executionSlotContent.title}</h3>
          <p>{executionSlotContent.description}</p>
        </div>

        <div className="work-image-wrapper">
          <img
            src={workpic2}
            alt="Event setup showcasing work process"
            className="work-center-image"
          />
        </div>

        <div className="work-step work-step-planning" key={planningSlotContent.title}>
          <h3>{planningSlotContent.title}</h3>
          <p>{planningSlotContent.description}</p>
        </div>

        <div className="work-step work-step-site-visit" key={siteVisitSlotContent.title}>
          <h3>{siteVisitSlotContent.title}</h3>
          <p>{siteVisitSlotContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;