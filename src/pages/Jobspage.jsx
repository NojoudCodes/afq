import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../layouts/Navbar/Navbar';
import Footer from '../layouts/Footer/Footer';

function Jobspage() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const cityParam = searchParams.get('city') || '';
  const salaryParam = searchParams.get('salary') || '';

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ufuk.developpeur-informatique.com/jobs_api.php/jobs/all')
      .then(res => res.json())
      .then(data => {
        const fetchedJobs = Array.isArray(data) ? data : (data.data || []);
        const cleanQuery = queryParam.trim().toLowerCase();
        const cleanCity = cityParam.trim().toLowerCase();
        const cleanSalary = salaryParam.trim().toLowerCase();

        const filtered = fetchedJobs.filter(job => {
          const currentTitle = String(job.job_title || '').toLowerCase();
          const currentDesc = String(job.description || '').toLowerCase();
          const matchesQuery = cleanQuery
            ? (currentTitle.includes(cleanQuery) || currentDesc.includes(cleanQuery))
            : true;

          const currentLocation = String(job.location || '').toLowerCase();
          const matchesCity = cleanCity 
            ? currentLocation === cleanCity 
            : true;

          const currentSalary = String(job.salary || job.salary_range || '').toLowerCase();
          const matchesSalary = cleanSalary 
            ? currentSalary === cleanSalary 
            : true;

          return matchesQuery && matchesCity && matchesSalary;
        });

        setJobs(filtered);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, [queryParam, cityParam, salaryParam]); 

  return (
    <>
      <style>{`
        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        @media (max-width: 1024px) {
          .jobs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .jobs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <Navbar />
      <div className='all-jobs' style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', direction: 'rtl' }}>
        <div style={{ margin: '2rem 0', textAlign: 'right' }}>
          <h2>جميع الوظائف المتاحة ({jobs.length})</h2>
          {(queryParam || cityParam || salaryParam) && (
            <p style={{ color: 'rgba(56, 189, 248, 0.85)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              تصفية نشطة: {queryParam && `"${queryParam}"`} {cityParam && `📍 ${cityParam}`} {salaryParam && `💰 ${salaryParam}`}
            </p>
          )}
        </div>

        {loading ? (
          <p>جاري تحميل الوظائف...</p>
        ) : (
          <div className="jobs-grid">
            {jobs.length === 0 ? (
              <p style={{ color: '#aaa', padding: '2rem 0' }}>لا توجد وظائف تطابق خيارات البحث الخاصة بك حالياً.</p>
            ) : (
              jobs.map((job, index) => (
                <div
                  key={job.id || index}
                  style={{
                    background: `
                      linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8)),
                      linear-gradient(to top, rgba(0, 211, 242, 0.2), rgba(81, 162, 255, 0.2)),
                      linear-gradient(to left bottom, rgba(0, 184, 219, 0.3), rgba(43, 127, 255, 0.3), rgba(173, 70, 255, 0.2))
                    `,
                    boxShadow: `
                      0 0 0 1px rgba(56, 189, 248, 0.45),
                      0 0 12px 2px rgba(56, 189, 248, 0.35),
                      0 0 40px 6px rgba(56, 189, 248, 0.18),
                      0 0 90px 16px rgba(14, 116, 220, 0.12)
                    `,
                    border: '2px solid rgba(0, 211, 242, 0.3)',
                    borderRadius: '0.313rem',
                    padding: '1.5rem',
                  }}
                >
                  <h3 style={{ margin: '0 0 0.625rem 0', color: '#fff' }}>
                    {job.job_title || 'عنوان الوظيفة غير متوفر'}
                  </h3>
                  <p style={{ fontSize: '1rem', margin: '0.625rem 0', color: '#cbd5e1' }}>
                    <strong style={{ color: 'rgba(81, 162, 255, 1)', fontStyle: 'italic' }}>الشركة: </strong>
                    {job.company || 'غير محدد'}
                  </p>
                  <p style={{ fontSize: '1rem', margin: '0.625rem 0', color: '#cbd5e1' }}>
                    <strong style={{ color: 'rgba(81, 162, 255, 1)', fontStyle: 'italic' }}>الموقع: </strong>
                    {job.location || 'غير محدد'}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.188rem 0.5rem',
                    backgroundColor: 'rgba(81, 162, 255, 0.81)',
                    borderRadius: '0.188rem',
                    fontSize: '0.75rem',
                    color: '#fff'
                  }}>
                    {job.job_type || 'دوام كامل'}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Jobspage;