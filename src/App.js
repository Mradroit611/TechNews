import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  // BrowserRouter,
  Routes,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Topscroll from './components/Topscroll';


const App =()=>{

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
        <BrowserRouter>
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color= 'red'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route path="/Home" element={<News setProgress={setProgress} apiKey={apiKey}   key='home' pagesize={6} country="in"category="general"/>}/>

        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-general' pagesize={6} country="in"category="general"/>}/>
        <Route path="/Business" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-business' pagesize={6} country="in"category="business"/>}/>
        <Route path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-entertainment' pagesize={6} country="in"category="entertainment"/>}/>
        <Route path="/General" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-general' pagesize={6} country="in"category="general"/>}/>
        <Route path="/Health" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-health' pagesize={6} country="in"category="health"/>}/>
        <Route path="/Science" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-science' pagesize={6} country="in"category="science"/>}/>
        <Route path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-sports' pagesize={6} country="in"category="sports"/>}/>
        <Route path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey}   key='in-technology' pagesize={6} country="in"category="technology"/>}/>

        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-general' pagesize={6} country="us"category="general"/>}/>
        <Route path="/Business1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-business' pagesize={6} country="us"category="business"/>}/>
        <Route path="/Entertainment1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-entertainment' pagesize={6} country="us"category="entertainment"/>}/>
        <Route path="/General1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-general' pagesize={6} country="us"category="general"/>}/>
        <Route path="/Health1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-health' pagesize={6} country="us"category="health"/>}/>
        <Route path="/Science1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-science' pagesize={6} country="us"category="science"/>}/>
        <Route path="/Sports1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-sports' pagesize={6} country="us"category="sports"/>}/>
        <Route path="/Technology1" element={<News setProgress={setProgress} apiKey={apiKey}   key='us-technology' pagesize={6} country="us"category="technology"/>}/>

        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-general' pagesize={6} country="jp"category="general"/>}/>
        <Route path="/Business2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-business' pagesize={6} country="jp"category="business"/>}/>
        <Route path="/Entertainment2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-entertainment' pagesize={6} country="jp"category="entertainment"/>}/>
        <Route path="/General2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-general' pagesize={6} country="jp"category="general"/>}/>
        <Route path="/Health2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-health' pagesize={6} country="jp"category="health"/>}/>
        <Route path="/Science2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-science' pagesize={6} country="jp"category="science"/>}/>
        <Route path="/Sports2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-sports' pagesize={6} country="jp"category="sports"/>}/>
        <Route path="/Technology2" element={<News setProgress={setProgress} apiKey={apiKey}   key='jp-technology' pagesize={6} country="jp"category="technology"/>}/>

        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-general' pagesize={6} country="gb"category="general"/>}/>
        <Route path="/Business3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-business' pagesize={6} country="gb"category="business"/>}/>
        <Route path="/Entertainment3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-entertainment' pagesize={6} country="gb"category="entertainment"/>}/>
        <Route path="/General3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-general' pagesize={6} country="gb"category="general"/>}/>
        <Route path="/Health3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-health' pagesize={6} country="gb"category="health"/>}/>
        <Route path="/Science3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-science' pagesize={6} country="gb"category="science"/>}/>
        <Route path="/Sports3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-sports' pagesize={6} country="gb"category="sports"/>}/>
        <Route path="/Technology3" element={<News setProgress={setProgress} apiKey={apiKey}   key='gb-technology' pagesize={6} country="gb"category="technology"/>}/>

        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-general' pagesize={6} country="cn"category="general"/>}/>
        <Route path="/Business4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-business' pagesize={6} country="cn"category="business"/>}/>
        <Route path="/Entertainment4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-entertainment' pagesize={6} country="cn"category="entertainment"/>}/>
        <Route path="/General4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-general' pagesize={6} country="cn"category="general"/>}/>
        <Route path="/Health4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-health' pagesize={6} country="cn"category="health"/>}/>
        <Route path="/Science4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-science' pagesize={6} country="cn"category="science"/>}/>
        <Route path="/Sports4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-sports' pagesize={6} country="cn"category="sports"/>}/>
        <Route path="/Technology4" element={<News setProgress={setProgress} apiKey={apiKey}   key='cn-technology' pagesize={6} country="cn"category="technology"/>}/>
        </Routes>
      <Topscroll/>
      </div>
        </BrowserRouter>
    )
}

export default App;
