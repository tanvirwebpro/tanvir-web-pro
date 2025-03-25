// const aboutItems = [
//   {
//     label: "Project done",
//     number: 45,
//   },
//   {
//     label: "Years of experience",
//     number: 5,
//   },
// ];
// md:max-w-[60ch]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            Passionate Frontend Web Developer with experience in building responsive, user-friendly, and high-performance web applications. Proficient in HTML, CSS, JavaScript, React.js, and Tailwind CSS, with expertise in modern UI/UX principles. Skilled in optimizing performance, implementing RESTful APIs, and ensuring cross-browser compatibility. Strong problem-solving abilities and a keen eye for design.Seeking an opportunity to contribute technical expertise and creativity to a dynamic development team.
          </p>

          {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
