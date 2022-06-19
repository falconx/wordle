import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

const App = ({ Component, props }) => {
  return <Component {...props} />;
};

export default App;
