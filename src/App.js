import './App.scss';
import topImage from "./assets/images/bg-pattern-top.svg";
import bottomImage from "./assets/images/bg-pattern-bottom.svg";
import { AttributeCard, ProfileCard } from './components/components';

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
      <div className='main'>
        <ProfileCard profileData={data} />
      </div>

      <div className='top-bg-img'>
        <img src={topImage} alt='' />
      </div>
      
      <div className='bottom-bg-img'>
        <img src={bottomImage} alt=''/>
      </div>

      <div style={{ position: "relative", left: "0px", bottom: "-50px" }}>
        <AttributeCard url="https://github.com/obasekiosa" name="obasekiosa" />
      </div>
    </div>
  );
}

export default App;
