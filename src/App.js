import './App.css';
import {ResponsiveContainer ,LineChart , Line,XAxis,YAxis,Tooltip,Legend,CartesianGrid ,Bar,BarChart,AreaChart,Area} from 'recharts'
import data from './data.js'


function App() {
  return (
    <>
      <h1 className='chart-heading'>Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart data={data} width={500} height={250} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          {/* Tooltips display informative text when users hover over, focus on, or tap an element.  */}
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} /> 
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 className='chart-heading'>Bar Chart</h1>
      <ResponsiveContainer width='100%' aspect={5}>
        <BarChart width={500} height={250} data={data} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={5}>
        <AreaChart width={500} height={250} data={data} margin={{ top: 5,right: 300,left: 20,bottom: 5}} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor : 'yellow'}}/>
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
          <Area type='monotone' dataKey="fees"  stroke='#82ca9d' fill='#82ca9d'/>
        </AreaChart>
      </ResponsiveContainer>
    </>
    
  );
}

export default App;
