import React from "react";
import { Timeline } from "./timeline";

export default function WorkflowTimeline() {
const data = [
    {
        title: "Receive Footage",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Raw footage is received from the client.</span>
                <span className="hidden md:block">We begin the process once you share your complete raw footage with us. This can include screen recordings, camera files, or anything else you want in the final video. The quality doesn’t have to be perfect, just send over everything you’ve got so we can get to work without delay.</span>
            </p>
        ),
    },
    {
        title: "Consultation & Pricing",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">For new clients, we discuss style, preferences, and agree on a fair price before starting.</span>
                <span className="hidden md:block">If it’s your first time working with us, we’ll do a short consultation to understand your exact needs. This includes discussing the video’s purpose, your preferred editing style, any specific effects or ideas you want, and your target platform. We’ll also agree on a fair project price during this step to avoid confusion later.</span>
            </p>
        ),
    },
    {
        title: "Sound & Color Cleanup",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">We enhance audio and adjust colors to make the raw footage look clean and consistent.</span>
                <span className="hidden md:block">We take the raw visuals and give them a professional upgrade. Background noise is cleaned, vocals are leveled, and audio quality is made smooth and crisp. At the same time, we enhance colors, fix exposure issues, and make the video visually pleasing while staying true to the intended tone.</span>
            </p>
        ),
    },
    {
        title: "Cutting & Pacing",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Bad takes are trimmed out and pacing is improved for better flow and clarity.</span>
                <span className="hidden md:block">Every clip is reviewed carefully to remove mistakes, awkward pauses, and filler content. We rearrange scenes to improve pacing and flow, keeping the viewer engaged throughout the video. This is where it starts feeling less raw and more like a real project.</span>
            </p>
        ),
    },
    {
        title: "Subtitles",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Animated subtitles are added throughout the video, styled to match the content.</span>
                <span className="hidden md:block">Subtitles are added throughout the entire video, but not just boring plain text. We create clean, animated captions that match the energy and tone of your content. Whether it’s a calm educational video or a fast-paced commentary, the subtitles will fit perfectly.</span>
            </p>
        ),
    },
    {
        title: "Hook Section",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">We edit the first 30–60 seconds to be highly engaging and optimized for retention.</span>
                <span className="hidden md:block">We dedicate extra time to the first 30–60 seconds of the video, this is your chance to grab attention. We edit this part with high energy, strong visuals, and snappy pacing to make sure viewers don’t click off and are pulled into the content immediately.</span>
            </p>
        ),
    },
    {
        title: "Animations",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Visual animations are added to maintain interest and keep viewers from dropping off.</span>
                <span className="hidden md:block">To keep your video from feeling flat or repetitive, we introduce dynamic animations. These can include motion graphics, transitions, popups, and zooms, anything to keep things moving and entertaining without being overwhelming or distracting.</span>
            </p>
        ),
    },
    {
        title: "Sound Design",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">We add crisp, satisfying sound effects throughout the video to finalize its tone.</span>
                <span className="hidden md:block">This is where we add subtle (or sometimes punchy) sound effects to bring the visuals to life. From whooshes and dings to ambient background audio, everything is timed perfectly to boost impact and immersion. We make sure the sound design fits your vibe.</span>
            </p>
        ),
    },
    {
        title: "Final Delivery",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Completed project is shared with the client, usually via a Google Drive link.</span>
                <span className="hidden md:block">Once everything’s done, the full edited video is exported in high quality and sent to you, usually through a Google Drive link. You’ll be able to preview it, test it on your platform, and make sure it looks and sounds exactly how you imagined.</span>
            </p>
        ),
    },
    {
        title: "Revisions",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">If anything feels off, we fix it until the client is fully happy with the result.</span>
                <span className="hidden md:block">If you’re not fully happy or notice something off, we’ve got you. Just let us know what needs changing, whether it’s a subtitle tweak, audio fix, or scene cut, and we’ll revise it to your liking. No stress, no extra cost, just solid results.</span>
            </p>
        ),
    },
    {
        title: "Payment & Upload",
        content: (
            <p className="text-lg text-neutral-200">
                <span className="block md:hidden">Once approved, we receive payment and the client uploads the video wherever they want.</span>
                <span className="hidden md:block">Once you confirm everything looks good, we proceed with the payment based on what was agreed during consultation. After that, the video is fully yours, ready to be posted on YouTube, Instagram, or wherever your audience lives.</span>
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
