import { NavLink } from 'react-router-dom'
import './Dashboard.css'
import { VictoryBar, VictoryChart, VictoryPie, VictoryStack, VictoryTheme } from 'victory'

function Dashboard() {

  return(
    <>
      <div className="dashboard">
        <div className="sidebar">
          <NavLink to='/'>الرئيسية</NavLink>
        </div>
        <div className="main">
          <h2> لوحة البيانات</h2>
          <div className="cards-grid">
            <div className="card">
              <p>وظيفة شاغرة</p>
              <h4>1529k</h4>
            </div>{/** card */}
            <div className="card">
              <p>شركة</p>
              <h4>750</h4>
            </div>{/** card */}
            <div className="card">
              <VictoryPie
                innerRadius={50}
                data={[
                  { x: "Cats", y: 30 },
                  { x: "Dogs", y: 35 },
                  { x: "Birds", y: 25 },
                  { x: "Rabbits", y: 10 },
                ]}
                theme={VictoryTheme.clean}
              />
            </div>{/** card */}
            <div className="card">
              <VictoryChart
                domainPadding={{ x: 40 }}
                theme={VictoryTheme.clean}
              >
                <VictoryStack>
                  <VictoryBar
                    data={[
                      { x: "Sales", y: 2 },
                      { x: "Marketing", y: 3 },
                      { x: "Finance", y: 5 },
                    ]}
                  />
                </VictoryStack>
              </VictoryChart>
            </div>{/** card */}
          </div>
        </div>
      </div>
    </>
  )
}


export default Dashboard