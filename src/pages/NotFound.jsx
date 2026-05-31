import Navbar from '../layouts/Navbar/Navbar';
import Footer from '../layouts/Footer/Footer';

function NotFound() {
  return (
    <>
      <style>{`
        .not-found {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 700px;
          gap: 3rem;
          color: #FFF
        }

        h2 {
          font-size: 6rem;
          margin-bottom: 0;
          padding-bottom: 0;
          color: rgba(56, 189, 248, 1);
        }
        
        h4 {
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 0;
          padding-top: 0;
        }
      `}</style>

      <Navbar />
      <div className='not-found'>
        <h2>404</h2>
        <h4>الصفحة غير موجودة.....</h4>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;