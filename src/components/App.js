import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    {Calculate}
    <ButtonPanel />
  </>
);

export default App;
