import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <ul className='container'>
        <li>
          <div className='primaryImageContainer'>
            <img src='/images/image-equilibrium.jpg' alt='equilibrium' className='primaryImage' />
          </div>
        </li>
        <li>
          <h3 className='heading'>Equilibrium #3429</h3>
          <p className='primaryDescription'>Our Equilibrium collection promotes balance and calm.</p>
          <div className='icons'>
            <div>
              <img src='/images/icon-ethereum.svg' alt='etherumIcon' className='ethImage'/>
              <span className='ethDetail'>0.014ETH</span>
            </div>
            <div>
              <img src='/images/icon-clock.svg' alt='clockIcon' />
              <span className='timeLine'>3 days left</span>
            </div>
          </div>
        </li>
        <li className='creatorContainer'>
          <div>
            <img src='images/image-avatar.png' alt='favicon' className='avatar' />
          </div>
          <p className='creatorDetails'>Creation of <span className='primaryCreator'>Jules Wyvern</span></p>
        </li>
      </ul>
    </>
  );
}

export default App;
