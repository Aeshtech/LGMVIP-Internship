import React, { useState } from 'react';
import { fetchAPI} from "./components/config";
import Navbar from "./components/navbar";
import  Users  from "./components/users";
import { Loader } from "./components/loader";
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const userDataPresent = userData.length !== 0;       //when the length of userData = 0 then  it assigns false since, 0 !== 0 is false

    const getUserData = async () => {
        if (userData.length !== 0) {           //this means we have data already
            return
        }

        setLoading(true);
        const users = await fetchAPI();
        setLoading(false);
        setUserData([...users.data]);
    };

    return (
        <div className="App">
            <Navbar getUserData={getUserData} />
            { !loading && !userDataPresent && (
                <div className="container">
                    <div className="typewriter">
                        <div className="typewriter-text">Show Data Of The Users </div>
                    </div>
                </div>

            ) }

            {loading && (
                <Loader />
            )}

            {!loading && <Users userData={userData} />}

        </div>
    );
}

export default App;