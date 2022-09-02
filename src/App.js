import './App.css';
import ContentCharacters from './components/ContentCharacters/ContentCharacters.jsx'
import ContentEpisodes from './components/ContentEpisode/ContentEpisode.jsx'


function App() {
  return (
   <>
      <h1 className='title'>The Rick and Morty API</h1>
      <ContentCharacters />
      <ContentEpisodes />

   </>
  );
}

export default App;
