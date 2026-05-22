import Hero from './components/Hero';
import Pillar1 from './components/Pillar1';
import Pillar2 from './components/Pillar2';
import Pillar3 from './components/Pillar3';
import Pillar4 from './components/Pillar4';
import FrameworkFlow from './components/FrameworkFlow';
import FailureMapping from './components/FailureMapping';
import ApplyFramework from './components/ApplyFramework';
import Methodology from './components/Methodology';

function App() {
  return (
    <div className="scroll-container">
      <Hero />
      <Pillar1 />
      <Pillar2 />
      <Pillar3 />
      <Pillar4 />
      <FrameworkFlow />
      <FailureMapping />
      <ApplyFramework />
      <Methodology />
    </div>
  );
}

export default App;
