import githubLogo from '../assets/github.png'

import { Container } from './styles';


function App() {
  return (
    <Container>
      <img src={githubLogo} width={72} height={72} alt="github logo"/>
    </Container>
  );
}

export default App;