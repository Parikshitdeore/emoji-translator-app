import React, { useState } from "react";
import "./styles.css";

var emojiBook = {
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Grinning",
  "๐": "Grinning with Big Eyes",
  "๐": "Grinning with Smiling Eye",
  "๐": "Beaming with Smiling Eyes",
  "๐": "Grinning Squinting ",
  "๐": "Grinning with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": " with Tears of Joy",
  "๐": "Slightly Smiling ",
  "๐": "Upside-Down ",
  "๐": "Winking ",
  "๐": "Smiling with closed Eyes",
  "๐": "Smiling with Halo",
  "๐ฅฐ": "Smiling with Hearts",
  "๐": "Smiling with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": " Blowing a Kiss",
  "๐": "Kissing",
  "๐": "Kissing with Closed Eyes",
  "๐": "Kissing with Smiling Eyes",
  "๐": "Savoring Food",
  "๐": "with Tongue",
  "๐": "Winking with Tongue",
  "๐คช": "Zany",
  "๐": "Squinting with Tongue",
  "๐ค": "Money-Mouth",
  "๐ค": "Smiling with Open Hands",
  "๐คญ": " with Hand Over Mouth",
  "๐คซ": "Shushing",
  "๐ค": "Thinking",
  "๐ค": "Zipper-Mouth",
  "๐คจ": " with Raised Eyebrow",
  "๐": "Neutral",
  "๐": "Expressionless",
  "๐ถ": " Without Mouth",
  "๐": "Smirking",
  "๐": "Unamused",
  "๐": " with Rolling Eyes",
  "๐ฌ": "Grimacing",
  "๐คฅ": "Lying",
  "๐": "Relieved",
  "๐": "Pensive",
  "๐ช": "Sleepy",
  "๐คค": "Drooling",
  "๐ด": "Sleeping"
};

var emojiArray = Object.keys(emojiBook);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function eInputHandler(event) {
    var userEmoji = event.target.value;

    var meaning = emojiBook[userEmoji];

    if (meaning === undefined) {
      meaning = "This emoji is not available in our Database";
    }
    setMeaning(meaning);
  }

  function eClickHandler(emoji) {
    var meaning = emojiBook[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Welcome to <span style={{ color: "goldenrod" }}>Emoji</span> Translator
      </h1>

      <input placeholder="Enter Emoji" onChange={eInputHandler} />

      <h2>
        {" "}
        <span style={{ color: "goldenrod" }}>"{meaning}" </span>
      </h2>
      <h3> Emojis in our Dictionary </h3>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => eClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
