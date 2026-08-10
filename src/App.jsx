import { ThemeProvider } from './ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeCustomizer from './components/ThemeCustomizer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <ThemeCustomizer />
    </ThemeProvider>
  )
}
