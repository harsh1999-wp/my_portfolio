import { Section } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Programming Languages
  { name: "C", level: 90, category: "programming-language" },
  { name: "C++", level: 90, category: "programming-language" },
  { name: "JavaScript", level: 92, category: "programming-language" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Dart", level: 80, category: "programming-language" },
  { name: "Python", level: 90, category: "programming-language" },

  // Databases
  { name: "MongoDB Atlas", level: 88, category: "database" },
  { name: "Firebase", level: 85, category: "database" },
  { name: "AWS RDS SQL", level: 80, category: "database" },
  { name: "NoSQL", level: 85, category: "database" },
  { name: "Amazon DynamoDB", level: 82, category: "database" },

  // APIs & Hosting
  { name: "Google Maps API", level: 80, category: "api-hosting" },
  { name: "Heroku", level: 78, category: "api-hosting" },
  { name: "Amazon EC2", level: 82, category: "api-hosting" },

  // Version Control
  { name: "Git", level: 90, category: "version-control" }
];

const categories =["all","programming-language" ,"version-control","api-hosting","database","backend"];

export const SkillsSection = () =>{
    const [ActiveCategories , setActiveCategories]= useState("all")

    const fillteredSkills = skills.filter(
        (skill) => ActiveCategories === "all" || skill.category === ActiveCategories
    );
    return(
        <section id ="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className = "container mx-auto max-w-5xl">
                <h2 className="  text-white text-3xl md:text-4 font-bold mb-12 text-center" >
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category ,key) => (
                        <button key={key} 
                        onClick={() => setActiveCategories(category)}
                        className={ cn ("text-white px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            ActiveCategories===category
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )
                     } >{category}</button>))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fillteredSkills.map((skill ,key)=>(
                        <div key = {key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                              <h3 className=" text-white font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                            <div
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}
                            ></div>
                            <div className="text-right mt-1">
                                <span className="text-white text-lg ">
                                    {skill.level}%
                                </span>
                            </div>
                            </div>
                        </div>
                    ))}</div>
            </div>

        </section>
    );    
}