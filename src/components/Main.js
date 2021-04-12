import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import ContactPage from '../screens/ContactPage';
import LibraryPage from '../screens/LibraryPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/library" component={LibraryPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}
