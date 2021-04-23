import React from 'react';

export default function Form() {
    const [names, setNames] = React.useState(['name']);
    const [userNameInput, setUserNameInput] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserNameInput('');
        setNames([...names, userNameInput]);
    };

    return (

        <form onSubmit={handleSubmit}>
            <h2>If you have some questions, you can fill in the form bellow to contact us</h2>
            <div>
                <div>
                    <label htmlFor="name">
                        Name :
              <input
                            id="userName"
                            type="text"
                            required
                            value={userNameInput}
                            onChange={(event) => setUserNameInput(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="userEmail">
                        E-mail :
              <input id="userEmail" type="text" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="userMessage">
                        Message :
              <input
                            id="userMessage"
                            type="text"
                            required
                        />
                    </label>
                    <div>
                        <button id="submit" type="submit" />
                    </div>
                </div>
            </div>
        </form>
    );
}
