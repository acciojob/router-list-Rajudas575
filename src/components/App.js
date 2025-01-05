
import React from "react";
import UserDetail from "./UserDetails";
import UserList from "./UserList";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
   <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App
