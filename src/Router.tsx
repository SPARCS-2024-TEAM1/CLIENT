import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Step닉네임 from './pages/onboarding/components/Step닉네임';
import Step문자인증 from './pages/onboarding/components/Step문자인증';
import Step핸드폰번호입력 from './pages/onboarding/components/Step핸드폰번호입력';
import TodayFeeling from './pages/todayFeeling/TodayFeeling';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding/1" element={<Step핸드폰번호입력 />} />
        <Route path="/onboarding/2" element={<Step문자인증 />} />
        <Route path="/onboarding/3" element={<Step닉네임 />} />
        <Route path="/main" element={<Main />} />
        <Route path="/todayFeeling" element={<TodayFeeling />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
