import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './pages/game/game';
import Settings from './pages/settings/settings';
import HighScore from './pages/highscore/highscore';
import Information from './pages/information/information';

export default function App(){
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/information" element={<Information />}></Route>
            <Route path="/highscore" element={<HighScore />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

