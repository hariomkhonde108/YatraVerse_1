import React from 'react';
import './About.css'; // Assume this CSS file contains styling to match the design

const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-us">
        <h2>About us</h2>
        <p>
          boOkBuS is India's largest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. Founded in 2006, boOkBuS is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT). By providing the widest choice, superior customer service, lowest prices, and unmatched benefits, boOkBuS has served over 18 million customers. boOkBuS has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia, and Peru apart from India.
        </p>
      </section>

      <section className="management-team">
        <h2>Management Team</h2>
        <div className="team-member">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Tejas S K, CEO" className="team-photo" />
          <div className="team-details">
            <h3>Tejas S K, CEO</h3>
            <p>
              Tejas S K has been Chief Executive Officer of boOkBuS since 2022. A visionary leader, he brings deep expertise in digital transformation and customer-focused solutions. Before boOkBuS, Tejas held leadership roles in prominent tech firms, driving innovation and growth. He holds an MBA from IIM Bangalore and a degree in Computer Science Engineering from PES University.
            </p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Thrishul Swamy, CTO" className="team-photo" />
          <div className="team-details">
            <h3>Thrishul Swamy, CTO</h3>
            <p>
              Thrishul Swamy serves as the Chief Technology Officer at boOkBuS. With over 15 years of experience in designing cutting-edge technology solutions, he ensures the seamless integration of modern systems for customers and operators. A strong advocate of innovation, Thrishul specializes in scalable and high-performing platforms. He holds a BE in Electronics and Communication Engineering from RVCE and is passionate about AI, gaming, and trekking.
            </p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Tippanna, COO" className="team-photo" />
          <div className="team-details">
            <h3>Tippanna, COO</h3>
            <p>
              Tippanna is the Chief Operating Officer of boOkBuS, overseeing day-to-day operations and ensuring seamless collaboration between teams to deliver unparalleled service. With a decade of experience in operations management, he specializes in optimizing processes and enhancing customer satisfaction. Tippanna holds an MBA in Operations from Symbiosis Institute and a Bachelor's degree in Mechanical Engineering from VTU. A problem-solver at heart, he is passionate about leveraging data-driven strategies to improve efficiency. In his free time, he enjoys exploring new technologies and mentoring young professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
