import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { toast } from 'react-toastify'
import Questions from './components/questions';
import QuestionModal from './components/question-modal';
import Add from './add.svg'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure(); // -- 1
const client = new ApolloClient({
  uri: 'https://api.8base.com/ck37ef1pe000201jv5njf6hsf'
})

function App() {
const [modalOpen, setModalOpen] = useState(false); // --2
const closeModal = () => {
  setModalOpen(false); // -- 3
}

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header>
        <div>Game of Thrones Quizzical</div>
      </header>
      <Questions />
      <button className="add-question" onClick={_ => setModalOpen(true)}>
        <img src={Add} alt="Click to create a new question"/>
      </button>
      <QuestionModal // --- 5
          isOpen={modalOpen}
          closeModal={closeModal}
        />
    </div>
    </ApolloProvider>
  );
}

export default App;
