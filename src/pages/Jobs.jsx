import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '@/layouts/Navbar/Navbar.jsx'

function Jobs() {
  const [searchParams] = useSearchParams();
  
  const queryParam = searchParams.get('q') || '';
  const cityParam = searchParams.get('city') || '';
  const salaryParam = searchParams.get('salary') || '';

  const [allRawJobs, setAllRawJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndFilterJobs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://ufuk.developpeur-informatique.com/jobs_api.php/jobs/all?page=1&limit=20');
        const result = await response.json();
        const rawJobs = result && Array.isArray(result.data) ? result.data : [];

        setAllRawJobs(rawJobs);

        const cleanQuery = queryParam.trim().toLowerCase();
        const cleanCity = cityParam.trim().toLowerCase();
        const cleanSalary = salaryParam.trim().toLowerCase();

        const matchedResults = rawJobs.filter(job => {n
          const jobTitleStr = String(job.title || job.name || job.job_title || '').toLowerCase();
          const jobDescStr = String(job.description || job.desc || '').toLowerCase();
          
          const matchesQuery = cleanQuery 
            ? (jobTitleStr.includes(cleanQuery) || jobDescStr.includes(cleanQuery))
            : true;

          const jobCityStr = String(job.location || job.city || job.city_name || '').toLowerCase();
          const matchesCity = cleanCity 
            ? jobCityStr.includes(cleanCity) || cleanCity.includes(jobCityStr)
            : true;

          const jobSalaryStr = String(job.salary || job.salary_range || job.min_salary || '').toLowerCase();
          const matchesSalary = cleanSalary 
            ? jobSalaryStr.includes(cleanSalary) || cleanSalary.includes(jobSalaryStr)
            : true;

          return matchesQuery && matchesCity && matchesSalary;
        });

        setFilteredJobs(matchedResults);
      } catch (err) {
        console.error("Fetch failure error detail:", err);
        setError("حدث خطأ أثناء تحميل البيانات.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndFilterJobs();
  }, [queryParam, cityParam, salaryParam]);

  return (
    <div className="jobs-page-container" style={{ fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <main className="results-wrapper" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ background: '#f4f6f8', border: '2px dashed #0070f3', borderRadius: '8px', padding: '1rem', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#0070f3' }}>🕵️ Live Debug Tracker Panel</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <strong>Values read from your URL Bar:</strong>
              <ul>
                <li><code>q</code> = "{queryParam}"</li>
                <li><code>city</code> = "{cityParam}"</li>
                <li><code>salary</code> = "{salaryParam}"</li>
              </ul>
            </div>
            <div>
              <strong>API Data Inspection:</strong>
              <ul>
                <li>Total raw items received from server: {allRawJobs.length}</li>
                <li>Filtered items currently rendering: {filteredJobs.length}</li>
                {allRawJobs.length > 0 && (
                  <li>
                    <strong>Keys inside item[0]:</strong> 
                    <code style={{ background: '#e3e3e3', padding: '2px 4px', display: 'block', wordBreak: 'break-all', marginTop: '4px' }}>
                      {JSON.stringify(Object.keys(allRawJobs[0]))}
                    </code>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {allRawJobs.length > 0 && (
            <div style={{ marginTop: '0.5rem', background: '#fff', padding: '0.5rem', border: '1px solid #ddd' }}>
              <strong>Raw Job Item [0] Structure:</strong>
              <pre style={{ margin: '5px 0 0 0', overflowX: 'auto' }}>{JSON.stringify(allRawJobs[0], null, 2)}</pre>
            </div>
          )}
        </div>

        <div className="results-header" style={{ marginBottom: '2rem', textAlign: 'right', direction: 'rtl' }}>
          <h2>نتائج البحث ({filteredJobs.length})</h2>
        </div>

        {isLoading && <p style={{ textAlign: 'center' }}>جاري تحميل البيانات...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {!isLoading && filteredJobs.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#888', direction: 'rtl' }}>
            <h3>لم نجد وظائف تطابق خيارات البحث الخاصة بك.</h3>
          </div>
        )}

        {!isLoading && filteredJobs.length > 0 && (
          <div className="jobs-grid" style={{ display: 'grid', gap: '1.5rem', direction: 'rtl' }}>
            {filteredJobs.map((job) => (
              <div key={job.id || Math.random()} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{job.title || job.name}</h3>
                <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <span>📍 {job.location || job.city || 'غير محدد'}</span>
                  <span>💰 {job.salary || job.salary_range || 'غير محدد'}</span>
                </div>
                <p style={{ color: '#444', fontSize: '0.95rem' }}>{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Jobs;