import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../layouts/Navbar/Navbar.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';
import './JobsPage.css';

function JobsPage() {
  const [searchParams] = useSearchParams();

  const queryParam  = searchParams.get('q')      || '';
  const cityParam   = searchParams.get('city')   || '';
  const salaryParam = searchParams.get('salary') || '';

  const isFiltered = queryParam || cityParam || salaryParam;

  const [jobs, setJobs]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://ufuk.developpeur-informatique.com/jobs_api.php/jobs/all?page=1&limit=20'
        );
        const result = await response.json();
        const rawJobs = Array.isArray(result) ? result : (result.data || []);

        const cleanQuery  = queryParam.trim().toLowerCase();
        const cleanCity   = cityParam.trim().toLowerCase();
        const cleanSalary = salaryParam.trim().toLowerCase();

        const filtered = rawJobs.filter(job => {
          const title    = String(job.job_title    || job.title || '').toLowerCase();
          const desc     = String(job.description  || '').toLowerCase();
          const location = String(job.location     || job.city || '').toLowerCase();
          const salary   = String(job.salary       || job.salary_range || '').toLowerCase();

          const matchesQuery  = cleanQuery  ? title.includes(cleanQuery)  || desc.includes(cleanQuery)  : true;
          const matchesCity   = cleanCity   ? location.includes(cleanCity)   || cleanCity.includes(location)   : true;
          const matchesSalary = cleanSalary ? salary.includes(cleanSalary)   || cleanSalary.includes(salary)   : true;

          return matchesQuery && matchesCity && matchesSalary;
        });

        setJobs(filtered);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
        setError('حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [queryParam, cityParam, salaryParam]);

  return (
    <>
      <Navbar />

      <main className="jobs-page">
        {/* Page heading */}
        <div className="jobs-page__header">
          <h2 className="jobs-page__title">
            {isFiltered ? `نتائج البحث (${jobs.length})` : `جميع الوظائف المتاحة (${jobs.length})`}
          </h2>

          {isFiltered && (
            <p className="jobs-page__active-filters">
              تصفية نشطة:
              {queryParam  && <span className="jobs-page__filter-tag">🔍 {queryParam}</span>}
              {cityParam   && <span className="jobs-page__filter-tag">📍 {cityParam}</span>}
              {salaryParam && <span className="jobs-page__filter-tag">💰 {salaryParam}</span>}
            </p>
          )}
        </div>

        {/* States */}
        {loading && (
          <p className="jobs-page__status-message">جاري تحميل الوظائف...</p>
        )}

        {error && (
          <p className="jobs-page__status-message jobs-page__status-message--error">{error}</p>
        )}

        {!loading && !error && jobs.length === 0 && (
          <p className="jobs-page__status-message jobs-page__status-message--empty">
            لا توجد وظائف تطابق خيارات البحث الخاصة بك حالياً.
          </p>
        )}

        {/* Job cards */}
        {!loading && !error && jobs.length > 0 && (
          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <article key={job.id || index} className="job-card">
                <h3 className="job-card__title">
                  {job.job_title || job.title || 'عنوان الوظيفة غير متوفر'}
                </h3>

                <p className="job-card__meta">
                  <strong className="job-card__meta-label">الشركة:</strong>
                  {job.company || 'غير محدد'}
                </p>

                <p className="job-card__meta">
                  <strong className="job-card__meta-label">الموقع:</strong>
                  {job.location || job.city || 'غير محدد'}
                </p>

                {job.description && (
                  <p className="job-card__description">
                    {job.description.length > 120
                      ? job.description.slice(0, 120).trimEnd() + '…'
                      : job.description}
                  </p>
                )}

                <span className="job-card__type-badge">
                  {job.job_type || 'دوام كامل'}
                </span>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default JobsPage;