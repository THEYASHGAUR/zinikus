import  { useEffect, useState, useRef } from "react";
import styles, { layout } from '../style'
import zeno1 from '../assets/Zeno-1.png'
import zoro from '../assets/zoro-transparent.png'
import zini from '../assets/zini-transparent.png'
import zarm from '../assets/zarm-transparent.png'

const Buisness = () => {

  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if section is in the viewport
        if (rect.top < windowHeight * 0.8 && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optional: Reset when scrolling away
        }
      }
    };

    // Attach scroll event
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      {/* section-1 */}
      <section className={`${layout.sectionReverse} flex-col-reverse`}>

        <div
          ref={sectionRef}
          className={`${layout.sectionInfo} gap-y-12 ${isVisible ? "slide-in-left" : "opacity-0"
            }`}
        >
          {zeno1 && <img src={zeno1} alt="" className=' w-[80%] h-[90%] relative z-[5]' />}

          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

        </div>

        <div
          ref={sectionRef}
          className={`${layout.sectionInfo} gap-y-12 ${isVisible ? "slide-in-right" : "opacity-0"
            }`}
        >
          <h2 className={`${styles.heading2}`}>Transforming Customer Service with ZENO</h2>
          <p className={`${styles.paragraph}`}>ZENO, the Advanced Lobby Robot, revolutionizes hospitality with 24/7 support, autonomous navigation, and multilingual communication. By automating routine tasks and gathering valuable customer insights, it boosts efficiency and enhances visitor interactions. A true innovation, ZENO sets a new standard for smart, seamless service.</p>
        </div>
      </section>
      {/* section-2 */}
      <section className={`${layout.sectionReverse} flex-col`}>
        <div className={`${layout.sectionInfo} gap-y-12`}>
          <h2 className={`${styles.heading2}`}>Redefining Workplace Efficiency with ZINI</h2>
          <p className={`${styles.paragraph}`}>Meet ZINI, the Reception Robot transforming how businesses welcome and assist visitors. With advanced AI, seamless navigation, and multilingual communication, ZINI delivers personalized greetings, streamlines check-ins, and guides guests with ease. By automating routine tasks, it enhances productivity, saves resources, and provides valuable data insights—all while creating a lasting impression of innovation. ZINI isn't just a robot; it's the future of efficient and engaging workplace interactions.</p>
        </div>
        <div className={layout.sectionImgReverse}>
          {zini && <img src={zini} alt="" className='w-[80%] h-[90%] scale-125 pb-40 relative z-[5]' />}

          <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
          <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

        </div>

      </section>

      {/* section-3 */}
      <section className={`${layout.sectionReverse} flex-col-reverse`}>
        <div className={layout.sectionImgReverse}>
          {zoro && <img src={zoro} alt="" className='w-[80%] h-[90%] relative z-[5]' />}

          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

        </div>
        <div className={`${layout.sectionInfo} gap-y-12`}>
          <h2 className={`${styles.heading2}`}>Transforming Workplace Logistics with ZORO</h2>
          <p className={`${styles.paragraph}`}>ZORO, the revolutionary Butler/Delivery Robot, redefines efficiency with seamless navigation, smart routing, and secure access. Its versatile cargo space and real-time optimization streamline deliveries while enhancing workplace security. By automating routine tasks, ZORO saves time, boosts productivity, and creates a lasting impression of innovation, making it an essential asset for the modern workplace.</p>
        </div>
      </section>

      {/* section-4 */}
      <section className={`${layout.sectionReverse} sm:flex-col`}>
        <div className={`${layout.sectionInfo} gap-y-12`}>
          <h2 className={`${styles.heading2}`}>Redefining Workplace Reception with Zarm</h2>
          <p className={`${styles.paragraph}`}>Zarm, the advanced Reception Robot, transforms workplace efficiency with intelligent greetings, seamless navigation, and smart visitor management. Its interactive touchscreen and multilingual support ensure effortless communication, while automated check-ins save time and resources. By combining innovation with practicality, Zarm delivers a lasting impression and enhances productivity, making it an indispensable asset for modern businesses.</p>
        </div>
        <div className={layout.sectionImgReverse}>
          {zarm && <img src={zarm} alt="" className='w-[80%] h-[90%] relative z-[5]' />}

          <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
          <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />

        </div>
      </section>
    </>
  )
}

export default Buisness