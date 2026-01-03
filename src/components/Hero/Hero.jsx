import React from 'react'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'


export default function Hero() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-5 hero px-5">
        <div className="rightPart">
          <img src={hero1} alt="Hero 1" className="w-100" />
        </div>
        <div className="leftPart">
          <img src={hero2} alt="Hero 2" className="w-100" />
        </div>
      </div>

      <div className="green w-100 mt-5">
        <div className="green-track">
          <span>
            We build respectable identities… that grow and influence. We connect
            value, design, and people.
          </span>
          <span>
            We build respectable identities… that grow and influence. We connect
            value, design, and people.
          </span>
        </div>
      </div>

      <div className="yellowCards mt-3">
        {/* الكارت الأول – marquee */}
        <div className="yellow1 marquee-card">
          <div className="marquee-track">
            <span>Clear processes based on a professional methodology</span>
            <span>Clear processes based on a professional methodology</span>
          </div>
        </div>

        {/* الكارت الأوسط – ثابت */}
        <div className="yellow2">
          <span>A team that believes in calm, respect, and results.</span>
        </div>

        {/* الكارت الأخير – marquee */}
        <div className="yellow3 marquee-card">
          <div className="marquee-track">
            <span>
              An identity inspired by cultural values and humanistic meaning
            </span>
            <span>
              An identity inspired by cultural values and humanistic meaning
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
