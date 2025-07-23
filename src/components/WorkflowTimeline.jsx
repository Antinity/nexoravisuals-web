import React from "react";
import { Timeline } from "./timeline";

export default function WorkflowTimeline() {
const data = [
  {
    title: "Receive Footage",
    content: (
      <p className="text-lg text-neutral-200">
        Raw footage is received from the client.
      </p>
    ),
  },
  {
    title: "Consultation & Pricing",
    content: (
      <p className="text-lg text-neutral-200">
        For new clients, we discuss style, preferences, and agree on a fair price before starting.
      </p>
    ),
  },
  {
    title: "Sound & Color Cleanup",
    content: (
      <p className="text-lg text-neutral-200">
        We enhance audio and adjust colors to make the raw footage look clean and consistent.
      </p>
    ),
  },
  {
    title: "Cutting & Pacing",
    content: (
      <p className="text-lg text-neutral-200">
        Bad takes are trimmed out and pacing is improved for better flow and clarity.
      </p>
    ),
  },
  {
    title: "Subtitles",
    content: (
      <p className="text-lg text-neutral-200">
        Animated subtitles are added throughout the video, styled to match the content.
      </p>
    ),
  },
  {
    title: "Hook Section",
    content: (
      <p className="text-lg text-neutral-200">
        We edit the first 30–60 seconds to be highly engaging and optimized for retention.
      </p>
    ),
  },
  {
    title: "Animations",
    content: (
      <p className="text-lg text-neutral-200">
        Visual animations are added to maintain interest and keep viewers from dropping off.
      </p>
    ),
  },
  {
    title: "Sound Design",
    content: (
      <p className="text-lg text-neutral-200">
        We add crisp, satisfying sound effects throughout the video to finalize its tone.
      </p>
    ),
  },
  {
    title: "Final Delivery",
    content: (
      <p className="text-lg text-neutral-200">
        Completed project is shared with the client, usually via a Google Drive link.
      </p>
    ),
  },
  {
    title: "Revisions",
    content: (
      <p className="text-lg text-neutral-200">
        If anything feels off, we fix it until the client is fully happy with the result.
      </p>
    ),
  },
  {
    title: "Payment & Upload",
    content: (
      <p className="text-lg text-neutral-200">
        Once approved, we receive payment and the client uploads the video wherever they want.
      </p>
    ),
  },
];


  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
