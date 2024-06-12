// Nav Bar
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header.html", "header", initializeHeader);
  loadComponent("footer.html", "footer");
});

function loadComponent(url, elementId, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading component:", error));
}

function initializeHeader() {
  const navBar = document.querySelector("#navBar");
  const dropDownBtn = document.querySelector("#dropDownBtn");
  const dropDown = document.querySelector("#dropDown");

  function onToggleMenu(e) {
    e.name = e.name === "menu" ? "close" : "menu";
    navBar.classList.toggle("top-[9%]");
    console.log(navBar);
  }

  function toggleDropdown() {
    dropDown.classList.toggle("hidden");
  }

  const sideBtn = document.querySelector("#sideBtn");
  if (sideBtn)
    sideBtn.addEventListener("click", function () {
      onToggleMenu(this);
    });

  if (dropDownBtn) {
    dropDownBtn.addEventListener("mouseenter", toggleDropdown);
    dropDown.addEventListener("mouseenter", toggleDropdown);

    dropDownBtn.addEventListener("mouseleave", toggleDropdown);
    dropDown.addEventListener("mouseleave", toggleDropdown);
  }
}

//   Martial Arts Section
document.addEventListener("DOMContentLoaded", function () {
  // Array of buttons and sections with their content
  const buttons = [
    {
      btn: "#muayThaiBtn",
      section: "#muayThai",
      content: getMuayThaiContent(),
    },
    { btn: "#karateBtn", section: "#karate", content: getKarateContent() },
    { btn: "#judoBtn", section: "#judo", content: getJudoContent() },
    {
      btn: "#jiuJitsuBtn",
      section: "#jiuJitsu",
      content: getJiuJitsuContent(),
    },

    {
      btn: "#juniorProBtn",
      section: "#juniorPro",
      content: getJuniorProContent(),
    },
    {
      btn: "#privateTuiBtn",
      section: "#privateTui",
      content: getPrivateTuiContent(),
    },
  ];

  // Functions to return content for each section
  function getJiuJitsuContent() {
    return `
    <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52] mb-20">
      <img
        src="./images/jiu-jitsu-1.jpg"
        class="xl:w-96 lg:w-[430px] lg:mb-0 w-[550px] mx-auto mb-10 rounded shadow-lg xl:ms-10"
      />
      <p
        class="content-center text-white font-body lg:text-start text-center"
      >
        At DoBu Academy, our Jiu-Jitsu program offers a comprehensive
        approach to this highly effective martial art, emphasizing both
        self-defense and competitive techniques. Jiu-Jitsu focuses on
        leverage, joint locks, and grappling, making it ideal for
        individuals of all sizes and strengths. <br /><br />
        Our experienced instructors provide detailed, hands-on training in
        a supportive and friendly environment, ensuring that you master
        the fundamental techniques while developing advanced skills.
        Whether you're a beginner or an experienced practitioner, our
        Jiu-Jitsu classes will enhance your physical fitness, boost your
        confidence, and teach you practical self-defense strategies. Join
        us at DoBu Academy to discover the transformative power of
        Jiu-Jitsu.
      </p>
    </div>
    <div class="w-[80%] mx-auto mb-20">
      <p
        class="text-center md:text-xl font-bold border-y-[10px] border-double border-zinc-900 py-5"
      >
        "Jiu-Jitsu is a journey of self-discovery, resilience, and
        constant learning that shapes both body and mind."
      </p>
    </div>
    <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52]">
      <p
        class="content-center text-white font-body lg:text-start text-center"
      >
        Training in Jiu-Jitsu at DoBu Academy offers numerous benefits
        that extend beyond the physical aspects of the art. Physically,
        Jiu-Jitsu improves strength, flexibility, endurance, and
        coordination, providing a comprehensive workout that engages the
        entire body. Mentally, it enhances problem-solving skills, focus,
        and discipline, as practitioners learn to anticipate and counter
        their opponents' moves. <br><br> The grappling nature of Jiu-Jitsu fosters
        a sense of humility and patience, as progress requires dedication
        and perseverance. Additionally, Jiu-Jitsu is an excellent tool for
        stress relief, offering a productive outlet for physical exertion
        and mental relaxation. At DoBu Academy, you'll join a supportive
        community that encourages personal growth, mutual respect, and
        camaraderie, making your training experience both rewarding and
        enjoyable.
      </p>
      <img
        src="./images/jiu-jitsu-2.jpg"
        class="xl:w-96 lg:w-[450px] xl:h-60 lg:h-[500px] lg:mt-0 w-[550px] mx-auto mt-10 rounded shadow-lg"
      />
    </div>
    <div class="flex justify-center">
            <a
            href="register.html"
              class="mt-10 bg-[#4b89ac] font-semibold text-white rounded-lg px-20 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
            >
              MEMBERSHIP
            </a>
    </div>
  `;
  }

  function getKarateContent() {
    return `
    <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52] mb-20">
    <img
      src="./images/karate-1.jpg"
      class="xl:w-96 lg:w-[430px] lg:mb-0 w-[550px] mx-auto mb-10 rounded shadow-lg xl:ms-10"
    />
    <p class="content-center text-white font-body lg:text-start text-center">
      At DoBu Academy, our Karate program offers a blend of traditional techniques
      and modern training methods to provide a well-rounded martial arts
      experience. Karate focuses on striking, blocking, and kata (forms),
      promoting physical fitness, agility, and precision. <br /><br />
      Our experienced instructors guide students through progressive levels of
      training, emphasizing discipline, respect, and self-control. Suitable for
      all ages and skill levels, our Karate classes are designed to build
      confidence, enhance self-defense capabilities, and improve overall
      well-being. Join us at DoBu Academy to explore the art of Karate, strengthen
      your body and mind, and become part of a supportive and empowering
      community.
    </p>
  </div>
  <div class="w-[80%] mx-auto mb-20">
    <p
      class="text-center md:text-xl font-bold border-y-[10px] border-double border-zinc-900 py-5"
    >
      "Karate is not just a martial art; it's a way of life that builds strength,
      instills discipline, and fosters a spirit of respect and perseverance."
    </p>
  </div>
  <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52]">
    <p class="content-center text-white font-body lg:text-start text-center">
      Training in Karate at DoBu Academy offers numerous benefits that contribute
      to overall physical and mental well-being. Physically, Karate enhances
      strength, flexibility, coordination, and cardiovascular health through
      rigorous training and practice. Mentally, it instills discipline, focus, and
      perseverance, as students learn to set and achieve personal goals.
      <br /><br />
      Karate also fosters self-confidence and self-esteem by providing the skills
      needed for effective self-defense and personal protection. Beyond the dojo,
      the principles of respect, humility, and patience learned in Karate help to
      navigate everyday challenges and improve interpersonal relationships. At
      DoBu Academy, Karate training not only develops martial arts skills but also
      cultivates a balanced and resilient approach to life.
    </p>
    <img
      src="./images/karate-2.jpg"
      class="xl:w-96 lg:w-[450px] xl:h-60 lg:h-[500px] lg:mt-0 w-[550px] mx-auto mt-10 rounded shadow-lg"
    />
  </div>
  <div class="flex justify-center">
    <a
    href="register.html"
      class="mt-10 bg-[#4b89ac] font-semibold text-white rounded-lg px-20 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
    >
      MEMBERSHIP
    </a>
  </div>
  `;
  }

  function getJudoContent() {
    return `
    <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52] mb-20">
    <img
      src="./images/judo-1.jpg"
      class="xl:w-96 lg:w-[430px] lg:mb-0 w-[550px] mx-auto mb-10 rounded shadow-lg xl:ms-10"
    />
    <p class="content-center text-white font-body lg:text-start text-center">
      At DoBu Academy, our Judo program offers an engaging and dynamic approach to
      this Olympic martial art, emphasizing throws, ground techniques, and
      submissions. Judo, meaning "the gentle way," focuses on using an opponent's
      force against them, making it an effective form of self-defense and physical
      conditioning. <br /><br />
      Our skilled instructors provide comprehensive training that balances
      physical rigor with strategic thinking, suitable for practitioners of all
      ages and skill levels. Through Judo, you'll develop strength, flexibility,
      and endurance, while also learning important values such as respect,
      discipline, and resilience. Join us at DoBu Academy to experience the
      physical and mental benefits of Judo and become part of our supportive
      martial arts community.
    </p>
  </div>
  <div class="w-[80%] mx-auto mb-20">
    <p
      class="text-center md:text-xl font-bold border-y-[10px] border-double border-zinc-900 py-5"
    >
      "Judo is the art of using balance, leverage, and timing to overcome
      strength, teaching not only physical prowess but also mental resilience and
      respect."
    </p>
  </div>
  <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52]">
    <p class="content-center text-white font-body lg:text-start text-center">
      Training in Judo at DoBu Academy offers a multitude of benefits for both
      body and mind. Physically, Judo enhances strength, flexibility, balance, and
      cardiovascular health through dynamic throws, pins, and groundwork
      techniques. It also improves coordination and reflexes, making it an
      excellent form of overall physical conditioning. <br><br> Mentally, Judo cultivates
      discipline, strategic thinking, and resilience, as practitioners learn to
      anticipate and respond to their opponents' moves. Judo fosters a sense of
      respect, humility, and camaraderie, promoting a supportive community
      environment. Additionally, the principles of leverage and efficiency learned
      in Judo provide practical self-defense skills that can be applied in
      real-life situations. At DoBu Academy, Judo training not only builds
      physical capabilities but also enriches personal growth and mental
      fortitude.
    </p>
    <img
      src="./images/judo-2.jpg"
      class="xl:w-96 lg:w-[450px] xl:h-60 lg:h-[400px] lg:mt-0 w-[550px] mx-auto mt-10 rounded shadow-lg"
    />
  </div>
  <div class="flex justify-center">
    <a
    href="register.html"
      class="mt-10 bg-[#4b89ac] font-semibold text-white rounded-lg px-20 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
    >
      MEMBERSHIP
    </a>
  </div>
  `;
  }

  function getMuayThaiContent() {
    return `
    <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52] mb-20">
    <img
      src="./images/muay-thai-1.jpg"
      class="xl:w-96 lg:w-[430px] lg:mb-0 w-[550px] mx-auto mb-10 rounded shadow-lg xl:ms-10"
    />
    <p class="content-center text-white font-body lg:text-start text-center">
      At DoBu Academy, our Muay Thai program provides an authentic and rigorous
      training experience in the "Art of Eight Limbs." Muay Thai utilizes punches,
      kicks, elbows, and knees, offering a comprehensive and effective striking
      system. <br /><br />
      Our experienced instructors guide students through a blend of traditional
      techniques and modern training methods, ensuring a well-rounded development
      of skills. Suitable for all fitness levels, our classes focus on improving
      strength, endurance, flexibility, and coordination, while also teaching
      valuable self-defense techniques. Beyond physical fitness, Muay Thai at DoBu
      Academy fosters mental resilience, discipline, and confidence, helping you
      achieve both your martial arts and personal goals in a supportive and
      empowering environment.
    </p>
  </div>
  <div class="w-[80%] mx-auto mb-20">
    <p
      class="text-center md:text-xl font-bold border-y-[10px] border-double border-zinc-900 py-5"
    >
      "Muay Thai is more than a martial art; it's a journey of mastering the mind
      and body, where every strike builds strength, resilience, and confidence."
    </p>
  </div>
  <div class="lg:flex md:px-20 md:py-10 p-5 gap-10 bg-[#303a52]">
    <p class="content-center text-white font-body lg:text-start text-center">
      Training in Muay Thai at DoBu Academy offers a wide range of benefits that
      enhance both physical and mental well-being. Physically, Muay Thai improves
      cardiovascular health, strength, endurance, and flexibility through its
      dynamic and high-intensity workouts. The use of punches, kicks, elbows, and
      knees provides a full-body workout that boosts coordination and agility. <br><br>
      Mentally, Muay Thai cultivates discipline, focus, and mental toughness,
      helping practitioners to overcome challenges and build confidence.
      Additionally, Muay Thai offers effective self-defense skills and promotes a
      sense of empowerment. At DoBu Academy, you'll join a supportive community
      that encourages personal growth and development through the art of Muay
      Thai.
    </p>
    <img
      src="./images/muay-thai-2.jpg"
      class="xl:w-96 lg:w-[450px] xl:h-60 lg:h-[400px] lg:mt-0 w-[550px] mx-auto mt-10 rounded shadow-lg"
    />
  </div>
  <div class="flex justify-center">
    <a
    href="register.html"
      class="mt-10 bg-[#4b89ac] font-semibold text-white rounded-lg px-20 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
    >
      MEMBERSHIP
    </a>
  </div>
  `;
  }

  function getJuniorProContent() {
    return `
    <div
    class="flex justify-center items-center container mx-auto p-5 mt-5"
  >
    <!-- Grid -->
    <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
      <!-- junior program 1 -->
      <div class="rounded-xl shadow-lg bg-[#303a52]">
        <div class="flex flex-col">
          <div class="rounded-xl overflow-hidden">
            <img
              src="./images/Jiu-Jitsu-kid.png"
              class="rounded-t mb-3"
            />
          </div>
          <div class="p-4 text-white flex flex-col items-center">
            <h1 class="text-3xl text-center mb-5">Jiu-Jitsu for Kids</h1>
            <p class="font-body mb-4">
              At DoBu Academy, our Kids Jiu-Jitsu program is designed to
              teach children essential skills such as self-discipline,
              confidence, and respect in a fun and engaging environment.
              Our experienced instructors provide age-appropriate training
              that enhances physical fitness, coordination, and
              self-defense abilities. <br /><br />
              Through interactive lessons and positive reinforcement,
              children learn valuable life skills while enjoying the
              excitement of martial arts. Join us at DoBu Academy to help
              your child develop a strong foundation in Jiu-Jitsu and
              build lifelong habits of health and confidence.
            </p>
            <a
            href="register.html"
              class="w-[80%] my-5 bg-[#4b89ac] font-semibold text-white text-center rounded-lg px-5 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
            >
              MEMBERSHIP
            </a>
          </div>
        </div>
      </div>
      <!-- junior program 2 -->
      <div class="rounded-xl shadow-lg bg-[#303a52]">
        <div class="flex flex-col">
          <div class="rounded-xl overflow-hidden">
            <img src="./images/kid-karate.png" class="rounded-t mb-3" />
          </div>
          <div class="p-4 text-white flex flex-col items-center">
            <h1 class="text-3xl text-center mb-5">Karate for Kids</h1>
            <p class="font-body mb-4">
              At DoBu Academy, our Kids Karate program provides a fun and
              structured environment where children can develop physical
              fitness, discipline, and self-confidence. Our experienced
              instructors use age-appropriate techniques to teach
              essential Karate skills, promoting coordination, focus, and
              respect. <br /><br />
              Through engaging lessons and positive reinforcement,
              children learn the importance of perseverance and
              goal-setting while enjoying the excitement of martial arts.
              Enroll your child in our Kids Karate program at DoBu Academy
              to help them build a strong foundation.
            </p>
            <a
            href="register.html"
              class="w-[80%] my-5 bg-[#4b89ac] font-semibold text-white text-center rounded-lg px-5 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
            >
              MEMBERSHIP
            </a>
          </div>
        </div>
      </div>
      <!-- junior program 3 -->
      <div class="rounded-xl shadow-lg bg-[#303a52]">
        <div class="flex flex-col">
          <div class="rounded-xl overflow-hidden">
            <img src="./images/kid-judo.jpg" class="rounded-t mb-3" />
          </div>
          <div class="p-4 text-white flex flex-col items-center">
            <h1 class="text-3xl text-center mb-5">Judo for Kids</h1>
            <p class="font-body mb-4">
              At DoBu Academy, our Kids Judo program offers a fun and
              supportive environment where children can learn essential
              skills such as balance, coordination, and self-discipline.
              Our experienced instructors teach age-appropriate techniques
              that emphasize safety, respect, and cooperation.
              <br /><br />
              Through interactive and engaging lessons, children develop
              physical fitness and self-confidence while learning
              effective self-defense strategies. Enroll your child in our
              Kids Judo program at DoBu Academy to help them build a
              strong foundation in martial arts and foster lifelong values
              of respect and resilience.
            </p>
            <a
            href="register.html"
              class="w-[80%] my-5 bg-[#4b89ac] font-semibold text-white text-center rounded-lg px-5 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
            >
              MEMBERSHIP
            </a>
          </div>
        </div>
      </div>
      <!-- junior program 4 -->
      <div class="rounded-xl shadow-lg bg-[#303a52]">
        <div class="flex flex-col">
          <div class="rounded-xl overflow-hidden">
            <img
              src="./images/kid-muay-thai.jpeg"
              class="rounded-t mb-3"
            />
          </div>
          <div class="p-4 text-white flex flex-col items-center">
            <h1 class="text-3xl text-center mb-5">Muay Thai for Kids</h1>
            <p class="font-body mb-4">
              At DoBu Academy, our Kids Muay Thai program provides a fun
              and engaging environment for children to learn the art of
              Muay Thai. Our experienced instructors teach age-appropriate
              techniques that enhance physical fitness, coordination, and
              self-discipline. <br><br> Through dynamic and interactive lessons,
              children develop confidence, focus, and respect while
              learning effective self-defense skills. Enroll your child in
              our Kids Muay Thai program at DoBu Academy to help them
              build a strong foundation in martial arts and foster
              lifelong values of health and confidence.
            </p>
            <a
            href="register.html"
              class="w-[80%] my-5 bg-[#4b89ac] font-semibold text-white rounded-lg px-5 py-2 md:text-xl text-xs text-center hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
            >
              MEMBERSHIP
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Grid End -->
  </div>`;
  }

  function getPrivateTuiContent() {
    return `
    <div class="mt-10 md:w-[60%] w-[80%] mx-auto">
    <img
      src="images/private-coaching.jpeg"
      class=" rounded-lg shadow-lg mb-10"
    />
    <p class="font-body bg-[#303a52] text-white p-5 rounded-lg lg:text-start text-center">
      Private coaching for martial arts at DoBu Academy offers
      personalized training tailored to your specific needs and goals.
      With one-on-one attention from our experienced instructors, you’ll
      receive customized feedback and detailed instruction that
      accelerates your progress. <br><br> Private sessions allow for flexible
      scheduling and focused practice, helping you to master techniques
      more efficiently and effectively. Whether you’re looking to refine
      your skills, boost your confidence, or achieve specific fitness
      goals, private coaching provides the dedicated support and expert
      guidance you need to succeed.
    </p>
    <div class="flex justify-center">
      <a
      href="register.html"
        class="md:mt-10 mt-5 bg-[#4b89ac] font-semibold text-white rounded-lg px-20 py-2 md:text-xl text-xs hover:bg-[#7ebbdf] hover:text-black hover:shadow-lg"
      >
        MEMBERSHIP
      </a>
    </div>
  </div>
  `;
  }

  // Function to handle button clicks
  function handleButtonClick(buttonSection) {
    buttons.forEach((item) => {
      const sectionElement = document.querySelector(item.section);
      const buttonElement = document.querySelector(item.btn);
      if (item === buttonSection) {
        sectionElement.innerHTML = item.content;
        buttonElement.classList.add("selected");
      } else {
        sectionElement.innerHTML = "";
        buttonElement.classList.remove("selected");
      }
    });
  }

  // Attach event listeners to buttons
  buttons.forEach((buttonSection) => {
    const buttonElement = document.querySelector(buttonSection.btn);
    buttonElement.addEventListener("click", () =>
      handleButtonClick(buttonSection)
    );
  });
});

// register form
// Handle form submission
const form = document.getElementById("contactForm");
const thankyou = document.getElementById("thankyou");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Show thank you message
  form.innerHTML = "";
  thankyou.innerHTML = `
  <div class="p-5 bg-white rounded-lg shadow-lg flex flex-col w-[60%] items-center mx-auto mb-32">
    <h2 class="text-3xl font-bold mb-5">Thank You!</h2>
    <p class="text-lg">
      Your information has been submitted successfully. We will contact you
      shortly.
    </p>
  </div>
  `;
});
