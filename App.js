import Nav from './src/Navigation';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return <Nav />;
};

export default App;
