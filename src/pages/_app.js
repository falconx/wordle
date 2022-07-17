import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';

const config = {
  ...awsconfig,
  ssr: true,
};

// mocking AppSync subscriptions is not yet supported
// https://github.com/aws-amplify/amplify-category-api/issues/122 
// 
// if (process.env.NODE_ENV === 'development') {
//   config.aws_appsync_graphqlEndpoint = 'http://localhost:20002';
// }

Amplify.configure(config);

const App = ({ Component, props }) => {
  return <Component {...props} />;
};

export default App;
