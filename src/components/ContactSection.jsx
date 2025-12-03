import { Mail, Map, MapMinus, MapPin, Phone } from "lucide-react";

export const ContactSection = () =>{
    return(<section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary"> Touch</span> 
            </h2>

            <p>Thank you for visiting my portfolio! I’m always open to new opportunities, interesting problems to solve.
                If you’re interested in my experience or want to discuss a role.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-white text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="text-white font-medium gap-2 ">
                                    Email
                                </h4>
                                <a href="mailto:harshkandoi8@gmail.com" 
                                    className="text-white text-muted-foreground hover:text-primary transition-colors">
                                        harshkandoi8@gmail.com
                                    </a>
                            </div>
                        </div>  
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="text-white font-medium gap-2 ">
                                    Phone
                                </h4>
                                <a href="Tel:8777033780" 
                                    className="text-white text-muted-foreground hover:text-primary transition-colors">
                                        8777033780
                                    </a>
                            </div>
                        </div>  
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="text-white font-medium gap-2 ">
                                    Location
                                </h4>
                                <a 
                                    className="text-white text-muted-foreground hover:text-primary transition-colors">
                                       Pune,India
                                    </a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </section>);
}