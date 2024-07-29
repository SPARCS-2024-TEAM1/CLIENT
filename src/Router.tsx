import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
// import Main from './pages/main/Main';
import Step문자인증 from './pages/onboarding/components/Step문자인증';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding/1" element={<Step문자인증 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
