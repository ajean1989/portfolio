<template>
  
  <div className="flex flex-col items-center w-4/5 md:w-3/5 lg:w-3/6">
    <h1 className="font-custom2 text-5xl tracking-widest"><RouterLink to="/about">A B O U T</RouterLink></h1>
    <div id="portrait" className="flex flex-col items-center">
      <h2 className="font-custom1 mt-24 mb-14 text-5xl tracking-wider font-semibold text-name-color">Adrien Jacquenet</h2>
      <img src="/src/assets/img/main.png">
      <p className="text-center font-custom5 m-10 text-2xl tracking-wider">
        Developer<br>
        Python : Web, BI, IA, Automation<br>
        Web Back-end : Python, PHP, (No)SQL<br>
        Web Front-end : VueJS, TailwindCSS<br>
        DevOps : Docker, CI/CD, Cloud<br>
        <a href="https://iadrien4444.notion.site/Hard-Skills-b4cf1f45468d49f388f970db31e3740e?pvs=4" target="_blank">More on my hard skills</a>     
      </p>
    </div>
    <section>
      <p className="text-justify text-2xl">
          Hi, I'm Adrien : versatile developer with deep expertise across multiple technological domains. Proficient in Python, I have extensive experience in web development, business intelligence (BI), and artificial intelligence (AI). I also have strong skills in PHP and VueJS for building dynamic web applications, while utilizing TailwindCSS to create modern and responsive user interfaces. Additionally, I have a solid background in DevOps, mastering tools such as Docker for containerization, along with managing CI/CD pipelines and deploying scalable applications in the cloud. My diverse skill set allows me to adapt quickly to new projects and deliver optimized solutions from development to deployment.
      </p>
    </section>
  </div>
</template>

<style>

  #portrait{
        animation: easeInOutAnimation 4s ease-in-out infinite;
    }

  @keyframes easeInOutAnimation  {
      from {
          transform: translateY(0)
      }
      50% {
          transform: translateY(5px)
      }
      to {
          transform: translateY(0)
      }
  }

</style>


