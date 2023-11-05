import logo from './logo.svg';
import './App.css';
import './backend/canvas.js'
import { canvasConnect } from './backend/canvas.js';
import { Courses } from './frontend/courses.js'
import { Channels } from './frontend/channels.js'
import { Chat } from './backend/chat.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='main-grid'>
          <div className='courses-grid'>
            <img src={require("./user-pfp.png")} 
              className='user-pfp'/>

            <div className='courses-list'>
              {Courses()}
            </div>
            
          </div>
          <div className='channels-list'>
            <div className='text-window'>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
