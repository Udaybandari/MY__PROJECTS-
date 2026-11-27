
import Child from './COmponents/Child';
import UseMemo from './COmponents/UseMemo';
import Modal from './COmponents/Modal';
import { useState } from 'react';
import Users from './COmponents/Users';

import Posts from './COmponents/Posts';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>

      <Child />
      <UseMemo />
      <Users/>
      <Posts/>
    </div>
  );
};

export default App;
