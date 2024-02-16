import AboutSection from "../components/AboutSection";
import MoodSection from "../components/MoodSection";
import QouteSection from "../components/QuoteSection";
import AuthorSection from "../components/AuthorSection";

export default function Home(){
  return(
    <div>
      <AboutSection />
      <MoodSection />
      <QouteSection />
      <AuthorSection />
    </div>
  )
}