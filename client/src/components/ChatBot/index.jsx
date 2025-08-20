import React, { useState, useRef, useEffect } from 'react';

const Index = () => {
  const [showBotSubject, setShowBotSubject] = useState(false);
  const [showMessenger, setShowMessenger] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (showBotSubject) {
      inputRef.current.focus();
    }
  }, [showBotSubject]);

  const handleIconClick = () => {
    setShowBotSubject(true);
  };

  const handleCloseClick = () => {
    setShowBotSubject(false);
    setShowMessenger(false);
  };

  const handleBotSubjectSubmit = (e) => {
    e.preventDefault();
    setShowBotSubject(false);
    setShowMessenger(true);
  };

  const handleMessengerSubmit = (e) => {
    e.preventDefault();
    const mainVal = inputValue.toLowerCase();
    const nowTime = new Date();
    const nowHour = nowTime.getHours();

    const userMsg = (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: msg },
      ]);
    };

    const appendMsg = (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: msg },
      ]);
      setInputValue('');
    };

    userMsg(inputValue);

    if (
      ["hello", "hi", "good morning", "good afternoon", "good evening", "good night"].some((greet) => mainVal.includes(greet))
    ) {
      if (nowHour >= 12 && nowHour <= 16) appendMsg('Good afternoon');
      else if (nowHour >= 10 && nowHour < 12) appendMsg('Hi');
      else if (nowHour < 10) appendMsg('Good morning');
      else appendMsg('Good evening');
      
      appendMsg("What's your name?");
    } else if (mainVal.includes("i have problem with")) {
      if (mainVal.includes("girlfriend") || mainVal.includes("gf")) {
        appendMsg("Take out your girlfriend for dinner or a movie.");
        appendMsg("Is it helpful? (yes/no)");
      } else if (mainVal.includes("boyfriend") || mainVal.includes("bf")) {
        appendMsg("Buy something for him.");
        appendMsg("Is it helpful? (yes/no)");
      } else {
        appendMsg("Sorry, I'm not able to get your point. Please ask something else.");
      }
    } else if (mainVal.includes("yes")) {
      appendMsg("I'm glad I could help you.");
      sayBye();
    } else if (mainVal.includes("no")) {
      appendMsg("I'm sorry I couldn't help you. Please try again later.");
      sayBye();
    } else if (mainVal.startsWith("my name is") || mainVal.startsWith("i am") || mainVal.startsWith("i'm")) {
      const name = mainVal.replace("my name is", "").replace("i am", "").replace("i'm", "").trim();
      appendMsg(`Hi ${name}, how can I help you?`);
    } else {
      appendMsg("Sorry, I don't understand what you want to say.");
    }
  };

  const sayBye = () => {
    const nowHour = new Date().getHours();
    if (nowHour <= 10) appendMsg("Have a nice day! :)");
    else if (nowHour <= 20) appendMsg("Bye!");
    else appendMsg("Good night!");
  };

  return (
    <>
      <div className="botIcon">
        <div className="botIconContainer" onClick={handleIconClick}>
          <div className="iconInner">
            <i className="fa fa-commenting" aria-hidden="true" />
          </div>
        </div>
        {showBotSubject && (
          <div className="Layout Layout-open Layout-expand Layout-right">
            <div className="Messenger_messenger">
              <div className="Messenger_header">
                <h4 className="Messenger_prompt">How can we help you?</h4>
                <span className="chat_close_icon" onClick={handleCloseClick}>
                  <i className="fa fa-window-close" aria-hidden="true" />
                </span>
              </div>
              <div className="Messenger_content">
                <div className="Messages">
                  <div className="Messages_list">
                    {messages.map((msg, index) => (
                      <div key={index} className={`msg ${msg.type}`}>
                        <span className="avtr">
                          <figure
                            style={{
                              backgroundImage: `url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)`,
                            }}
                          />
                        </span>
                        <span className="responsText">{msg.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <form onSubmit={handleMessengerSubmit}>
                  <div className="Input Input-blank">
                    <input
                      ref={inputRef}
                      name="msg"
                      className="Input_field"
                      placeholder="Send a message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="Input_button Input_button-send">
                      <div className="Icon">
                        <svg
                          viewBox="1496 193 57 54"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Group-9-Copy-3"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            transform="translate(1523.000000, 220.000000) rotate(-270.000000) translate(-1523.000000, -220.000000) translate(1499.000000, 193.000000)"
                          >
                            <path
                              d="M5.42994667,44.5306122 L16.5955554,44.5306122 L21.049938,20.423658 C21.6518463,17.1661523 26.3121212,17.1441362 26.9447801,20.3958097 L31.6405465,44.5306122 L42.5313185,44.5306122 L23.9806326,7.0871633 L5.42994667,44.5306122 Z M22.0420732,48.0757124 C21.779222,49.4982538 20.5386331,50.5306122 19.0920112,50.5306122 L1.59009899,50.5306122 C-1.20169244,50.5306122 -2.87079654,47.7697069 -1.64625638,45.2980459 L20.8461928,-0.101616237 C22.1967178,-2.8275701 25.7710778,-2.81438868 27.1150723,-0.101616237 L49.6075215,45.2980459 C5.08414042,47.7885641 49.1422456,50.5306122 46.3613062,50.5306122 L29.1679835,50.5306122 C27.7320366,50.5306122 26.4974445,49.5130766 26.2232033,48.1035608 L24.0760553,37.0678766 L22.0420732,48.0757124 Z"
                              id="sendicon"
                              fill="#96AAB4"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
