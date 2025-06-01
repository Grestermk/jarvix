import React, { useState } from 'react';
import '/src/App.css'

const Home = () => {

    const [userInput, setUserInput] = useState();

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const chatbox = document.querySelector(".chat-box");

        const user_query = document.createElement("div");
        user_query.className = "user-query";
        user_query.innerHTML = userInput;

        const bot_response = document.createElement("div");
        bot_response.className = "bot-response";
        bot_response.innerHTML = "Loading.."
        
        chatbox.append(user_query);
        chatbox.append(bot_response);

        setTimeout(() => {
            bot_response.innerHTML = userInput;
        }, 1000)
    }


    return(
        <>
        <div className='body-container'>
            <div className='header'>
                <h1>Jarvis</h1>
                <button type='button' className='menu-btn'><i class="fa-solid fa-bars"></i></button>
            </div>
            <div className='chat-box'>

            </div>
            <div className='input-box'>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} placeholder='Ask' required/>
                    <button type='submit' className='submit-btn'>GO</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home;