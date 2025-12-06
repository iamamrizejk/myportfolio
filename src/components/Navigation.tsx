import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  colorTheme: 'default' | 'rose' | 'mint';
  setColorTheme: (theme: 'default' | 'rose' | 'mint') => void;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'hobbies', label: 'Hobbies' },
];

export const Navigation = ({ isDark, toggleTheme, colorTheme, setColorTheme }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navigation
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = currentScrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1 left-0 right-0 z-40 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
            <motion.div 
              className="relative text-xl font-heading font-bold gradient-text overflow-hidden cursor-default"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover="hover"
            >
              {/* Static AZ */}
              <motion.div
                className="flex"
                variants={{
                  hover: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                AZ
              </motion.div>
              
              {/* Expanding AMRIZE */}
              <motion.div
                className="absolute left-0 flex"
                initial={{ opacity: 0 }}
                variants={{
                  hover: { opacity: 1 }
                }}
              >
                {['A', 'M', 'R', 'I', 'Z', 'E'].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    variants={{
                      hover: { 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: index * 0.05,
                          duration: 0.2
                        }
                      }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Change color theme"
                  >
                    <Palette className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setColorTheme('default')}>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-800"></div>
                      <span>Classic</span>
                      {colorTheme === 'default' && <span className="ml-auto">✓</span>}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setColorTheme('rose')}>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #FCF7F8, #A31621)' }}></div>
                      <span>Rose</span>
                      {colorTheme === 'rose' && <span className="ml-auto">✓</span>}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setColorTheme('mint')}>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #F8FFE5, #06D6A0)' }}></div>
                      <span>Mint</span>
                      {colorTheme === 'mint' && <span className="ml-auto">✓</span>}
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Toggle light/dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};