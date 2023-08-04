import './App.css';
import Items from '../Items/Items';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/items' element={<Items />} />
      <Route path='/items/:itemsId' element={<Items />} />
    </Routes>
  );
}

export default App;
