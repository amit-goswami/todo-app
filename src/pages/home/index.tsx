import Home from '../../features/home';
import useAuthRedirect from '../../hooks/useAuthRedirect';

const HomePage = () => {
  useAuthRedirect();
  return <Home />;
};

export default HomePage;
