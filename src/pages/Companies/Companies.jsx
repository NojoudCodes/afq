import Navbar from '../../layouts/Navbar/Navbar.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';
import './Companies.css';

function Companies() {
  const itCompanies = [
    {
      name:     "صقر التقنية",
      location: "جدة، السعودية",
      desc:     "شركة متخصصة في تطوير الحلول السحابية والأنظمة الذكية.",
      phone:    "+966 55 123 4567",
      email:    "info@saqrtech.sa",
    },
    {
      name:     "واحة البرمجة",
      location: "دبي، الإمارات",
      desc:     "نقدم خدمات تطوير التطبيقات والمواقع للشركات الناشئة.",
      phone:    "+971 50 234 5678",
      email:    "contact@wahatcode.ae",
    },
    {
      name:     "نظم المستقبل",
      location: "الرياض، السعودية",
      desc:     "شركة حلول تقنية متقدمة في الذكاء الاصطناعي وتحليل البيانات.",
      phone:    "+966 54 987 6543",
      email:    "hello@future-systems.sa",
    },
    {
      name:     "الرؤية الرقمية",
      location: "الدوحة، قطر",
      desc:     "تطوير برمجيات مخصصة وإدارة أنظمة المؤسسات.",
      phone:    "+974 33 112 4455",
      email:    "info@digitalvision.qa",
    },
    {
      name:     "ابتكار الشرق",
      location: "الكويت، الكويت",
      desc:     "نركز على الابتكار في تطبيقات الهاتف وحلول الأعمال.",
      phone:    "+965 99 778 8899",
      email:    "support@eastinnovation.kw",
    },
    {
      name:     "بيانات العرب",
      location: "المنامة، البحرين",
      desc:     "تحليل البيانات الضخمة وتقديم حلول ذكاء الأعمال.",
      phone:    "+973 36 445 6677",
      email:    "contact@arabdata.bh",
    },
    {
      name:     "كود مصر",
      location: "القاهرة، مصر",
      desc:     "شركة رائدة في تطوير البرمجيات وتقديم الحلول التقنية للقطاع الحكومي.",
      phone:    "+20 10 1234 5678",
      email:    "info@codemsr.eg",
    },
    {
      name:     "تك تونس",
      location: "تونس، تونس",
      desc:     "متخصصون في تطوير تطبيقات الويب والهاتف للشركات الأوروبية والعربية.",
      phone:    "+216 71 234 567",
      email:    "hello@techtunisia.tn",
    },
    {
      name:     "أطلس للحلول",
      location: "الدار البيضاء، المغرب",
      desc:     "نقدم خدمات الاستشارات التقنية وتطوير الأنظمة المؤسسية.",
      phone:    "+212 52 234 5678",
      email:    "contact@atlassolutions.ma",
    },
    {
      name:     "نيل سوفت",
      location: "الخرطوم، السودان",
      desc:     "تطوير تطبيقات الدفع الإلكتروني وحلول التجارة الرقمية.",
      phone:    "+249 91 234 5678",
      email:    "info@nilsoft.sd",
    },
    {
      name:     "ليفانت تك",
      location: "عمّان، الأردن",
      desc:     "شركة تقنية متخصصة في الأمن السيبراني وحماية البيانات.",
      phone:    "+962 79 123 4567",
      email:    "security@levantech.jo",
    },
    {
      name:     "سيدار سوفت",
      location: "بيروت، لبنان",
      desc:     "تطوير منصات التعليم الإلكتروني وإدارة المحتوى الرقمي.",
      phone:    "+961 3 123 456",
      email:    "info@cedarsoft.lb",
    },
    {
      name:     "صحراء ديجيتال",
      location: "أبوظبي، الإمارات",
      desc:     "حلول متكاملة للتحول الرقمي للمؤسسات الحكومية والخاصة.",
      phone:    "+971 56 789 0123",
      email:    "hello@saharadigital.ae",
    },
    {
      name:     "ماغريب كلاود",
      location: "الجزائر، الجزائر",
      desc:     "خدمات الحوسبة السحابية والبنية التحتية للشركات في شمال أفريقيا.",
      phone:    "+213 55 123 4567",
      email:    "cloud@maghrebcloud.dz",
    },
    {
      name:     "خليج نت",
      location: "مسقط، عُمان",
      desc:     "حلول الشبكات والاتصالات وتقنية المعلومات للشركات والأفراد.",
      phone:    "+968 92 345 678",
      email:    "info@gulfnet.om",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="main">
        <h2 className="main-title">استكشف الشركات</h2>
        <div className="companies-grid">
          {itCompanies.map((company, index) => (
            <div key={index} className="companies-card">
              <h2>{company.name}</h2>
              <h4>{company.location}</h4>
              <p>{company.desc}</p>
              <p>📞 <span style={{ direction: 'ltr', unicodeBidi: 'embed' }}> {company.phone}</span></p>
              <p>✉️ {company.email}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Companies;