import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { MdWork, MdCode, MdSchool } from "react-icons/md";

function Experience() {
  return (
    <section className="  text-white">
      <h2 className="text-3xl font-bold mb-10 text-[#d08700] text-center">
        Career Journey
      </h2>

      <Timeline lineColor="#ffffff12">
        <TimelineEvent
          title="Full Stack Developer"
          createdAt="2024 - Present"
          icon={<MdCode />}
          iconColor="#facc15"
          bubbleStyle={{
            border: "2px solid #facc15",
            backgroundColor: "transparent",
          }}
          contentStyle={{
             background: "transparent",
            color: "white",
            borderRadius: "10px",
            // borderLeft: "4px solid #facc15",
          }}
        >
          <p className="text-sm md:text-base leading-relaxed">
            Building modern web apps and experimenting with AI-driven ideas.
            Currently focused on React and Node-based products that blend
            performance with personality.
          </p>
        </TimelineEvent>

        <TimelineEvent
          title="Software Engineer"
          createdAt="2020 - 2024"
          icon={<MdWork />}
          iconColor="#facc15"
          bubbleStyle={{
            border: "2px solid #facc15",
            backgroundColor: "transparent",
          }}
          contentStyle={{
             background: "transparent",
            color: "white",
            borderRadius: "10px",
            // borderLeft: "4px solid #facc15",
          }}
        >
          <p className="text-sm md:text-base leading-relaxed">
            Designed front-end experiences and internal tools that simplified
            workflows and boosted performance. Learned how to make complex UI
            look effortless.
          </p>
        </TimelineEvent>

        <TimelineEvent
          title="Bachelor’s in Computer Science"
          createdAt="2016 - 2020"
          icon={<MdSchool />}
          iconColor="#facc15"
          bubbleStyle={{
            border: "2px solid #facc15",
            backgroundColor: "transparent",
          }}
          contentStyle={{
             background: "transparent",
            color: "white",
            borderRadius: "10px",
            // borderLeft: "4px solid #facc15",
          }}
        >
          <p className="text-sm md:text-base leading-relaxed">
            Discovered my love for clean code, caffeine, and problem-solving.
            Graduated fluent in JavaScript—and sarcasm.
          </p>
        </TimelineEvent>
      </Timeline>
    </section>
  );
}

export default Experience;
