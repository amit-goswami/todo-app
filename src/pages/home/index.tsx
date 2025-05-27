import withAuthRedirect from '../../middlewares/withAuthRedirect';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the HomePage Page</h1>
      <p>This is the main page of our application.</p>
    </div>
  );
};

export default withAuthRedirect(HomePage);
