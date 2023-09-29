import {Navbar, VideoEdits, WebsitesPage, PhotosPage, Landing} from './comps';
import './App.css';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <div className='right'>
        <Landing />
        <VideoEdits />
        <WebsitesPage/>
        <PhotosPage/>
      </div>
      <div className='oldOverlay'></div>
    </div>
  );
}

export default App;
