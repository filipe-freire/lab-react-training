import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard
        className="border"
        lastName="Doe"
        firstName="John"
        gender="male"
        height="1.78m"
        birth={new Date(1992, 14, 7)}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        className="border"
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height="1.72m"
        birth={new Date(1993, 11, 5)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings className="border" lang="de">
        {' '}
        Ludwig{' '}
      </Greetings>
      <Greetings className="border" lang="fr">
        {' '}
        François{' '}
      </Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
