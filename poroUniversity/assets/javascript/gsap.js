      // 섹션이동 부드럽게
      $(document).ready(function () {
        $("a").on("click", function (event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                window.location.hash = hash;
              }
            );
          }
        });
      });

      // 스크롤 트리거
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // GSAP 효과
      // intro 전체 이질감 투명도
      let intro = gsap.timeline({delay: 0.5});
      intro.to(
        "#intro",
        {
          scrollTrigger: {
            trigger: "#intro",
            start: "20% 10%",
            end: "100%",
            markers: false,
            scrub: 2,
          },
          y: -20,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );

      // intro 타이틀 이질감 투명도
      let intro_title = gsap.timeline({delay: 0.5});
      intro_title.to(
        ".intro__title",
        {
          scrollTrigger: {
            trigger: "#intro",
            start: "20% 10%",
            end: "100%",
            markers: false,
            scrub: 2,
          },
          y: -20,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );

      // intro 포로 이미지 스케일 투명도
      let intro_poro = gsap.timeline({delay: 0.5});
      intro_poro.to(
        ".intro__poroImage",
        {
          scrollTrigger: {
            trigger: "#intro",
            start: "20% 10%",
            end: "100%",
            markers: false,
            scrub: 2,
          },
          scale: 0.9,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );

      // introduction 섹션
      let introduction_end = gsap.timeline({delay: 1});
      introduction_end.to(
        "#introduction",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "70% 30%",
            end: "100%",
            markers: false,
            scrub: 2,
          },
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );

      let introduction = gsap.timeline({delay: 1});
      introduction.from(
        "#introduction",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "0% 50%",
            end: "20%",
            markers: false,
            scrub: 2,
          },
          duration: 2,
          ease: "power4",
        },
        0
      );
      // 섹션02 타이틀
      let introduction_title = gsap.timeline({delay: 1});
      introduction_title.from(
        ".introduction__title",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-20% 20%",
            end: "0",
            markers: false,
            scrub: 2,
          },
          x: -50,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );

      // 섹션02 bar요소01
      let introduction_bar01 = gsap.timeline({delay: 1});
      introduction_bar01.from(
        ".introduction__leftBar01",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "0% 30%",
            end: "40%",
            markers: false,
            scrub: 2,
          },
          x: -200,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );
      // 섹션02 bar요소02
      let introduction_bar02 = gsap.timeline({delay: 1});
      introduction_bar02.from(
        ".introduction__leftBar02",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "10% 35%",
            end: "40%",
            markers: false,
            scrub: 2,
          },
          x: -200,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );
      // 섹션02 bar요소03
      let introduction_bar03 = gsap.timeline({delay: 1});
      introduction_bar03.from(
        ".introduction__rightBar01",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "0% 30%",
            end: "40%",
            markers: false,
            scrub: 2,
          },
          x: 200,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );
      // 섹션02 bar요소04
      let introduction_bar04 = gsap.timeline({delay: 1});
      introduction_bar04.from(
        ".introduction__rightBar02",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "10% 35%",
            end: "40%",
            markers: false,
            scrub: 2,
          },
          x: 200,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );
      // 섹션02 첫째
      let desc__first = gsap.timeline({delay: 1});
      desc__first.from(
        ".desc__first",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-15% 20%",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0
      );
      let desc__firstDesc = gsap.timeline({delay: 1});
      desc__firstDesc.from(
        ".desc__firstDesc",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-15% 20%",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );
      let desc__second = gsap.timeline({delay: 1});
      desc__second.from(
        ".desc__second",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-10% 10%",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );
      let desc__secondDesc = gsap.timeline({delay: 1});
      desc__secondDesc.from(
        ".desc__secondDesc",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-10% 10%",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );
      let desc__third = gsap.timeline({delay: 1});
      desc__third.from(
        ".desc__third",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-5% 0",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );
      let desc__thirdDesc = gsap.timeline({delay: 1});
      desc__thirdDesc.from(
        ".desc__thirdDesc",
        {
          scrollTrigger: {
            trigger: "#introduction",
            start: "-5% 0",
            end: "5%",
            markers: false,
            scrub: 2,
          },
          y: -30,
          opacity: 0,
          duration: 2,
          ease: "power3",
        },
        0
      );