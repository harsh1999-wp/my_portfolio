import { ExternalLink } from "lucide-react";

const Projects =[
    {
        id:1,
        title:"BGMI CALCULATOR",
        description:"BGMI CALCULATOR build using flutter",
        image: "/Projects/bgmi calculator.png",
        tags:["flutter" , "firebase"],
        demoUrl :"#",
        githubUrl:"#",
    },
    {
        id:2,
        title:"INSTA CLONE",
        description:"INSTA CLONE build using flutter",
        image: "/Projects/instagramclone.png",
        tags:["flutter" , "firebase"],
        demoUrl :"#",
        githubUrl:"#",
    },
    {
        id:3,
        title:"MedicalChatBot",
        description:"Medical chatbot build using flutter",
        image: "/Projects/medicalchatbot.png",
        tags:["flutter" , "firebase", "speech to text"],
        demoUrl :"#",
        githubUrl:"#",
    },
    {
        id:4,
        title:"School-Management-App",
        description:"Medical chatbot build using flutter",
        image: "/Projects/medicalchatbot.png",
        tags:["flutter" , "Spring-Boot", "PostMan"],
        demoUrl :"#",
        githubUrl:"#",
    },
]

export const ProjectSection = () =>{
    return(
        <section id="project" className="py-24 px-4 relative ">
            <div className="container mx-auto ">
                <h2 className="text-white text-3xl md:text-4xl font-bold m-4">
                    {" "}
                    Featured 
                <span className=" text-primary text-3xl md:text-4xl font-bold m-4">Projects
                </span>
                </h2>
                <p className="text-white text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully 
                    crafted with atttention to details, performance and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project , key) =>(
                        <div key = {key} className=" group bg-card rounded-lg overflow-hidden shadow">
                            <div className="h-48 overflow-hidden"
                            >
                                <img src = {project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></img>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) =>(
                                        <span className="text-white px-2 py-1 text-xs font-medium rounded-full bg-secondary bg-primary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            <h2 className="text-white   text-xl font-semibold mb-1">{project.title}</h2>
                            <p className="text-white text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-forground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank">
                                    <ExternalLink/></a>
                                    <a href={project.githubUrl} className="text-forground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank">
                                    
                                    <ExternalLink/></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}