import React from 'react'
import styles from '../style'
import zeno from '../assets/zeno.png'


const Hero = () => {
  return (
    <section className='flex justify-center items-center w-full px-6 my-12 md:flex-row flex-col'>
        <div className='flex flex-col justify-evenly z-[1] w-full'>
            <h1 className='flex-1 hero-text font-poppins font-semibold ss:text-[72px] text-[72px]'>Engineering
                <br className='block sm:hidden'/>
                <span className='text-gradient hero-purple'> Robots </span>
                <br className='sm:block hidden'/>
                to Solve 
                <br className='sm:block hidden' />
                <span className='text-gradient hero-purple'> Tomorrow’s Challenges</span>
            </h1>
            <p className={`${styles.paragraph} hero-paragraph max-w-[470px] md:max-w-full md:pr-40 mt-5`}>Harness the power of robotics to transform industries. From improving patient care and surgical precision in healthcare to optimizing production lines and enhancing safety in manufacturing, our solutions drive efficiency and innovation. We’re not just shaping the future of automation—our technology is revolutionizing healthcare, logistics, agriculture, and beyond.</p>
        </div>
        
        <div className={`flex ${styles.flexCenter} flex-col relative slide-in-right`}>
            <img src={zeno} alt="zini" className='z-[1] h-[600px] w-[800px]' />
            <h1 className='font-["Doto"] z-[1] text-[5em]'>Z<span className='text-[0.7em]'>ENO</span></h1>
            <div className='absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient' />
            <div className='absolute z-[0] w-[100%] h-[100%] bottom-40 white__gradient' />
            <div className='absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient' />

        </div>
    </section>
  )
}

export default Hero