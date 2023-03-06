import { Text, TextAs } from './lib/components';
import Colors from './lib/properties/colors';

const App = () => {
  return (
    <div>
      <Text color={Colors.amber[300]} as={TextAs.H1}>
        Test
      </Text>
    </div>
  );
};

export default App;
