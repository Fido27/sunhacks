import logo from './logo.svg';
import './App.css';
import './backend/canvas.js'
import { canvasConnect } from './backend/canvas.js';
import { Courses } from './frontend/courses.js'
import { Channels } from './frontend/channels.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-grid'>
          <div className='courses-grid'>
            <a className='course-list' href='https://tanay-jaiman.github.io/portfolio'>
              <img src={require("./user-pfp.png")} 
                className='user-pfp'/>
            </a>

            <div className='courses-list'>
              {Courses()}
            </div>
            
          </div>

          <div className='channels-list'>
            {Channels()}
          </div>
          
          <div className='text-window'>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
