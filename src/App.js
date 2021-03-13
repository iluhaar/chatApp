import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm /> 

  return (
      <ChatEngine 
        height="100vh"
        projectID="d9d2c016-ebfc-4164-8f63-4d03db42479d"
        userName={localStorage.getItem('username')}
		  	userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    );
}

export default App;
