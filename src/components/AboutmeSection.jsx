import { BrainCircuit, Code, Smartphone } from "lucide-react";

export const AboutmeSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="conatiner mx-auto max-w-5xl">
                <h2 className="text-white text-3xl  md:text-4xl font-bold md-12 text-center">
                  About <span className="text-primary "> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        <h3 className=" text-white text-2xl font-semibold">Web Developer and ML Enthasiast</h3>

                        <p classname= "text-primary  font-semibold">
                            I have two years of experience in the technology domain, with a strong foundation in web development, backend engineering, and machine learning. My background includes building and optimizing web applications, developing robust backend services, creating and training machine learning models, and deploying end-to-end solutions. I am proficient in working across the full development lifecycle—from designing system architectures and implementing features to deploying scalable, high-performance applications in production environments.
                        </p>

                        <p classname = "text-white text-bold text-2xl text-muted-foreground">
                        Enthusiastic web development intern skilled in HTML, CSS, and JavaScript.
                        Demonstrated ability to create responsive websites and collaborate effectively on
                        projects. Eager to contribute technical expertise, creativity, and a passion for learning to a
                        dynamic web development team.

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact " className="cos  mic-button">
                                {" "}
                                Get In Touch 
                            </a>

                            <a
                            href=""
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV

                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white ">Web Development</h4>
                                    <p className="text-white "></p>
                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Smartphone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white ">Flutter development</h4>
                                    <p className="text-white "></p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white ">Machine learning</h4>
                                    <p className="text-white "></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}  