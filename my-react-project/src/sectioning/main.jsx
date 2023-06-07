import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cateogory, Landing, Quiz, Error } from '../views';

const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/category" element={<Cateogory />} />
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
};

export default Main;
