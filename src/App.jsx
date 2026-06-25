import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React from "react";

export default function App() {
  const skills = [
    "Python","SQL","Pandas","NumPy","Matplotlib","Seaborn",
    "Scikit-learn","TensorFlow","Power BI","Excel","Git","GitHub"
  ];

  const projects = [
    {
      title:"Employee Salary Prediction",
      tech:"Python • Pandas • Scikit-learn",
      desc:"Built a regression model to predict employee salaries using preprocessing, feature engineering and model evaluation."
    },
    {
      title:"Customer Churn Prediction",
      tech:"Python • ML • Classification",
      desc:"Developed a customer churn prediction system using Logistic Regression and Random Forest to identify customers likely to leave."
    },
    {
      title:"Python Data Analysis & EDA Dashboard",
      tech:"Pandas • Matplotlib • Seaborn",
      desc:"Performed exploratory data analysis, data cleaning, visualization and generated business insights from real-world datasets."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between p-5">
          <h1 className="text-2xl font-bold text-cyan-400">Abhay.dev</h1>
          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="uppercase tracking-[6px] text-cyan-400">Machine Learning Engineer</p>
          <h1 className="text-6xl md:text-8xl font-black mt-4">
            Abhay <span className="text-cyan-400">Singh Rathore</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
            Passionate Machine Learning Engineer specializing in Python, Data Analysis,
            Machine Learning and AI solutions. I enjoy building predictive models,
            extracting business insights from data and solving real-world problems.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="bg-cyan-500 px-6 py-3 rounded-xl">View Projects</a>
            <a href="#contact" className="border border-white/20 px-6 py-3 rounded-xl">Contact</a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
          <p className="leading-8 text-gray-300">
            I am Abhay Singh Rathore, an aspiring Machine Learning Engineer with a strong
            interest in Artificial Intelligence, Data Science and Analytics. I have hands-on
            experience with Python, SQL, Pandas, NumPy, Scikit-learn and visualization tools.
            I enjoy building end-to-end ML projects and continuously improving my technical skills.
          </p>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(s=>(
            <span key={s} className="px-4 py-2 rounded-full border border-cyan-500 bg-cyan-500/10">{s}</span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold">Bachelor's Degree</h3>
            <p className="text-gray-400">Himachal Pradesh University (HPU)</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold">Senior Secondary (Class XII)</h3>
            <p className="text-gray-400">CBSE Board</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p)=>(
            <div key={p.title} className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-cyan-400 mt-2">{p.tech}</p>
              <p className="text-gray-300 mt-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-2">
          <p>Email: abhay@example.com</p>
          <p>GitHub: github.com/abhaysinghrathore</p>
          <p>LinkedIn: linkedin.com/in/abhaysinghrathore</p>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-white/10 text-gray-400">
        © 2026 Abhay Singh Rathore • Machine Learning Engineer
      </footer>
    </div>
  );
}
