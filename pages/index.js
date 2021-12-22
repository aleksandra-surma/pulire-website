import BaseLayout from 'components/BaseLayout/BaseLayout';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import About from './o-nas';

const Home = () => {
  return <BaseLayout />;
};
//
// const Home = () => {
//   return (
//     <Router>
//       <BaseLayout>
//         <Routes>
//           <Route
//             path="/"
//             element={<div className="flex flex-col justify-center items-center min-h-screen">Home</div>}
//           />
//           <Route path="/o-nas" element={<Navigate replace to="/o-nas" />} />
//           <Route path="/o-nas" element={<About />} />
//
//           <Route
//             path="/oferta"
//             element={<div className="flex flex-col justify-center items-center min-h-screen">Home</div>}
//           />
//           <Route
//             path="/kontakt"
//             element={<div className="flex flex-col justify-center items-center min-h-screen">Home</div>}
//           />
//         </Routes>
//       </BaseLayout>
//     </Router>
//   );
// };

export default Home;
