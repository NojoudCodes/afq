import './Market.css'
import ContentCard from "@/components/ContentCard";
import city from '@/assets/icon-city-signal.png';
import code from '@/assets/icon-code-circle.png';
import browser from '@/assets/icon-browser-config.png';


function Market() {
  return(
    <>
      <section className="market">
        <div className="glow-line"></div>
        <h2>
          ملامح السوق التقني
        </h2>
        <div className="content-container">
          <ContentCard
            icon={city}
            title="الرياض"
            subtitle="المدينة ذات أكثر توظيف"
            showGlowLine
          />
          <ContentCard
            icon={code}
            title="بايثون"
            subtitle="المهارة الأعلى طلباً"
            showGlowLine
          />
          <ContentCard
            icon={browser}
            title="مطور ويب"
            subtitle="الوظيفة الأعلى طلباً"
            showGlowLine
          />
        </div>
      </section>
    </>
  )
}

export default Market


