/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  
  
  {
    imgSrc: "/images/nextjs.svg",
    label: "NextJs",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JvaScript Framework",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  
 
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Database",
  },
  

  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },

  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "https://cms.pixso.net/images/home/format-pix.png",
    label: "Pixso",
    desc: "Design tool",
  },
  {
    imgSrc: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg",
    label: "DaisyUI",
    desc: "User Interface",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
