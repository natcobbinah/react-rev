import './App.css';
import { Routes, Route } from 'react-router-dom'
import Contacts from './components/Contact';
import Search from './components/Search';
import Home from './components/Home';
import ContactDetails from './components/ContactDetails';
import NoMatch from './components/NoMatch';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>

          <Route element={<PageLayout />}>
            <Route index element={<h1>Select any menu items from the navigation bar!</h1>} />

            <Route path='contacts' element={<Contacts />}>
              <Route path=":contactId" element={<ContactDetails />} />
            </Route>

            <Route path='search' element={<Search />} />

            <Route path="*" element={
              <NoMatch message="The page you are looking for is not here!" />
            } />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
