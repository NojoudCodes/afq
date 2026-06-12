import './About.css'
import ContentCard from "../../components/ContentCard";
import checked from '../../assets/icon-check-circle.png';
import growth from '../../assets/icon-growth-chart.png';
import target from '../../assets/icon-target.png';


function About() {
  return(
    <>
      <section className="about">
        <h2>
          <span className="different">أفق </span>
          أوسع لفهم سوق العمل 
          <br/>التقني
        </h2>
        <p>
          منصة توظيف ذكية تعتمد على الذكاء الاصطناعي <br/>
          لمطابقة أفضل المواهب مع أفضل الشركات
        </p>
        <div className="content-container">
          <ContentCard
            icon={checked}
            title= "ماهو أفق؟"
            subtitle="فهم أعمق لسوق العمل"
            paragraph="
            أفق منصة تجمع بيانات الوظائف
            الفنية وتحللها لتمنحك صورة واضحة
            عن السوق، تبحث عن وظيفة أو اتجاه
            قرارات مبنية على واقع السوق، لا على
            التخمين.
            "
          />
          <ContentCard
            icon={growth}
            title="ماذا يقدم؟"
            subtitle="تحليل ذكي يعتمد على البيانات"
            paragraph="
              نستخدم تقنيات الذكاء الاصطناعي
              لتحليل آلاف الوظائف، استخراج أهمّ
              المتطلبات، رفوع الطلبات التوظيف
              بشكل عملي ومبسط
            "
          />
          <ContentCard
            icon={target}
            title= "لماذا أفق؟"
            subtitle="قرارات أوضح بخطوات أذكى"
            paragraph="
            سواء كنت تبحث عن وظيفة أو اتجاه
            قرارات مبنية على واقع السوق، لا على
            التخمين.
            "
          />
        </div>
      </section>
    </>
  )
}

export default About