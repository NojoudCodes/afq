import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import Navbar from '../../layouts/Navbar/Navbar.jsx'

function Hero() {
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [city, setCity] = useState('');

  const [citiesList, setCitiesList] = useState([]);
  const [salariesList, setSalariesList] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    const loadFiltersFromJobs = async () => {
      try {
        const response = await fetch('https://ufuk.developpeur-informatique.com/jobs_api.php/jobs/all?page=1&limit=20');
        const result = await response.json();
        const jobsArray = result && Array.isArray(result.data) ? result.data : [];

        if (jobsArray.length > 0) {
          const uniqueCities = [...new Set(jobsArray.map(item => item.location || item.city).filter(Boolean))];
          const uniqueSalaries = [...new Set(jobsArray.map(item => item.salary || item.salary_range).filter(Boolean))];

          setCitiesList(uniqueCities);
          setSalariesList(uniqueSalaries);
        }
      } catch (error) {
        console.error("Error loading jobs data for filters:", error);
      }
    };

    loadFiltersFromJobs();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    
    const params = new URLSearchParams();
    if (jobTitle.trim()) params.append('q', jobTitle.trim());
    if (salary) params.append('salary', salary);
    if (city) params.append('city', city);

    const queryString = params.toString();
    if (queryString) {
      navigate(`/jobs?${queryString}`);
    } else {
      navigate('/jobs');
    }
  };

  return (
    <>
      <header className="hero">
        <Navbar />
        <div className="hero-caption">
          <h1>اكتشف وظيفتك القادمة في السعودية</h1>
          <p>منصة ذكية تربطك بأفرص التقنية الأنسب، وتوضح لك الصورة قبل اتخاذ القرار</p>

          <form className='search-form' onSubmit={handleSearchSubmit}>
            <div className="input-wrap">
              <input 
                type="text" 
                name="job-title" 
                id="job-title" 
                placeholder='المسمى الوظيفي...' 
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            
            <div className="select-wrap">
              <select 
                name="salary" 
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="">نطاق الراتب</option>
                {salariesList.map((salRange, index) => (
                  <option key={index} value={salRange}>
                    {salRange}
                  </option>
                ))}
              </select>
              <select 
                name="city" 
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">المدينة</option>
                {citiesList.map((cityName, index) => (
                  <option key={index} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
            
            <button type="submit" className='btn-search'>ابحث الآن</button>
          </form>
        </div>
      </header>
    </>
  )
}

export default Hero