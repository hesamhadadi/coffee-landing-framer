import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="story"
      className="relative py-48 px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060402 0%, rgba(30,15,7,0.4) 100%)" }}
    >
      {/* Ghost number */}
      <div
        className="absolute top-24 left-8 select-none pointer-events-none font-display font-bold leading-none"
        style={{ fontSize: "14rem", color: "rgba(201,160,94,0.04)" }}
        aria-hidden="true"
      >
        01
      </div>

      <Reveal direction="left">
        <p className="font-ui text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8">
          Our Story
        </p>
        <h2 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.08] font-semibold text-cream">
          More than a cup —<br />
          a{" "}
          <em className="italic font-light text-gold">ritual.</em>
        </h2>
        <p className="mt-8 text-base leading-loose text-fog max-w-lg">
          Obsidian was born from one obsession: finding the most extraordinary coffee on
          earth and doing it justice. From Ethiopian highlands to Colombian valleys, every
          bean has a story.
        </p>
        <p className="mt-5 text-base leading-loose text-fog max-w-lg">
          Our roasters train for years. Our baristas compete internationally. Every
          detail — water temperature, extraction time, cup temperature — calibrated to a
          fraction of a degree.
        </p>
      </Reveal>

      {/* Floating orbs */}
      <Reveal direction="right" delay={0.2}>
        <div className="relative h-[500px]">
          {[
            {
              w: 320, h: 320,
              style: { top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle at 35% 35%, #4a2416, #120704)", boxShadow: "0 0 80px rgba(201,160,94,0.08)" },
              delay: 0,
            },
            {
              w: 100, h: 100,
              style: { top: "8%", right: "8%", background: "radial-gradient(circle at 35% 35%, #c9a05e, #7a4f1a)", boxShadow: "0 20px 60px rgba(201,160,94,0.25)" },
              delay: 2,
            },
            {
              w: 50, h: 50,
              style: { bottom: "18%", left: "5%", background: "radial-gradient(circle, #7a2e18, #3a0f05)" },
              delay: 5,
            },
          ].map((orb, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: orb.w,
                height: orb.h,
                ...orb.style,
                animation: `float-up ${8}s ease-in-out ${orb.delay}s infinite`,
              }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
