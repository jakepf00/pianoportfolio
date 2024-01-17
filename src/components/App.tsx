import React, { useState } from 'react';
import '../CSS/App.css';
import '../CSS/Style.css'
import About from './About'
import Listen from './Listen'
import PianoNavbar from './PianoNavbar'
import Repertoire from './Repertoire'

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

const tabs: TabsType = [
  {
    label: "About",
    index: 1,
    Component: About
  },
  {
    label: "Listen",
    index: 2,
    Component: Listen
  },
  {
    label: "Repertoire",
    index: 3,
    Component: Repertoire
  }
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <PianoNavbar selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}