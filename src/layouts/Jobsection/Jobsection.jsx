import './Jobsection.css'
import ContentCard from "@/components/ContentCard";
import arrow from '@/assets/icon-arrow-right.png';

function Jobs() {
  return(
    <>
      <section className="jobs">
        <div className="glow-line"></div>
        <h2>
          مسارات اليوم
        </h2>
        <div className="glowing"></div>
        <div className="content-container">
          <ContentCard
            icon={arrow}
            title="مسوق الكتروني"
            subtitle="الرياض - STC - عن بعد - دوام كامل"
            info="Meta Ads — Google — GA4"
            showIcons
            showButton
            buttonText="اعرف اكثر"
          />
          <ContentCard
            icon={arrow}
            title="مهندس برمجيات"
            subtitle="الرياض - STC - دوام كامل"
            info="Backend — Node.js — API — Visa Sponsorship"
            showIcons
            showButton
            buttonText="اعرف اكثر"
          />
          <ContentCard
            icon={arrow}
            title="مسوق الكتروني"
            subtitle="الرياض - STC - عن بعد - دوام كامل"
            info="Google Ads — SEO — GA4"
            showIcons
            showButton
            buttonText="اعرف اكثر"
          />
        </div>
        <button className="cta-btn">استعراض السوق الوظيفي</button>
      </section>
    </>
  )
}

export default Jobs


