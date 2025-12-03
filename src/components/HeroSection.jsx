
import { Rocket } from "lucide-react";
export const  HeroSection = () =>{
    return (<section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className=" text-primary opacity-0 animate-fade-in">Hi,I'm</span>
                <span className="text-primary opacity-60 animate-fade-in-delay-2">
                    {" "} 
                    Harsh   
                    </span>
                <span className="text-white ml-2 ">
                    {""}
                    kandoi</span>
            </h1>
            <p className="text-white text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-3">
                I’m a software developer who loves turning ideas into clean, functional, and visually stunning digital experiences. From crafting intuitive mobile apps to building modern, eye-catching websites, I focus on blending solid engineering with thoughtful design. I’m always exploring new technologies, solving problems creatively, and pushing myself to build products that feel as good as they look.     
            </p>
        </div>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#project" className="cosmic-button">
            View my Work 
        </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-primary">Scroll</span>
        <Rocket className="h-5 w-5 text-primary rotate-90"/>
      </div>
    </section>
    );
}