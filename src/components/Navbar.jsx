import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu } from "lucide-react";

const navItems =[
    {name: "Home" , href: "#hero"},
    {name: "About" , href: "#about"},
    {name: "Project" , href: "#project"},
    {name: "Skills" , href: "#skills"},
    {name: "Contact" , href: "#contact"},
]

export const Navbar = () =>{
    const [isScrolled , setIsScrolled] = useState(false);
    const [isMenuOpen , setisMenuOpen] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll" , handleScroll );
        return () => window.removeEventListener("scroll" , handleScroll );
    },[]);
    return (
       <nav className="fixed w-full z-40 transition-all duration-300">

    {/* Logo */}
    <div className="absolute top-5 left-8">
        <a
            className="text-xl font-bold text-primary"
            href="#hero"
        >
            <span className="text-glow">Harsh's </span>
            Portfolio
        </a>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8">

        {navItems.map((item, key) => (
            <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
                {item.name}
            </a>
        ))}

    </div>

    {/* Mobile button */}
    <button
        onClick={() => setisMenuOpen((prev) => !prev)}
        className="md:hidden fixed top-5 right-5 p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    {/* Mobile menu */}
    <div
        className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
        )}
    >
        <div className="flex flex-col space-y-8 text-xxl">
            {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setisMenuOpen(false)}
                >
                    {item.name}
                </a>
            ))}
        </div>
    </div>

</nav>
    );
};