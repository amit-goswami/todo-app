import useAuthRedirect from '../../hooks/useAuthRedirect';
import withAuthGuard from '../../middlewares/withAuthGuard';

const HomePage = () => {
  useAuthRedirect();
  return (
    <div className="home-page">
      <h1>Welcome to the HomePage Page</h1>
      <p>This is the main page of our application.</p>
    </div>
  );
};

export default withAuthGuard(HomePage);
