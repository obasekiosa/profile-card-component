import './App.scss';
import { ProfileCard } from './components/components';

function App() {
  const data = {
    name: "",
    age: 26,
    location: "",
    numberOfFollowers: 80000,
    numberOfLikes: 803000,
    numberOfPhotos: 1400
  }
  return (
    <div className="App">

      <ProfileCard profileData={data} />
     
        Victor Crest
        26
        London

        80K
        Followers

        803K
        Likes

        1.4K
        Photos
    </div>
  );
}

export default App;
