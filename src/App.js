import React, { useState } from "react";
import "./styles.css";

var emojiBook = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning",
  "😃": "Grinning with Big Eyes",
  "😄": "Grinning with Smiling Eye",
  "😁": "Beaming with Smiling Eyes",
  "😆": "Grinning Squinting ",
  "😅": "Grinning with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": " with Tears of Joy",
  "🙂": "Slightly Smiling ",
  "🙃": "Upside-Down ",
  "😉": "Winking ",
  "😊": "Smiling with closed Eyes",
  "😇": "Smiling with Halo",
  "🥰": "Smiling with Hearts",
  "😍": "Smiling with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": " Blowing a Kiss",
  "😗": "Kissing",
  "😚": "Kissing with Closed Eyes",
  "😙": "Kissing with Smiling Eyes",
  "😋": "Savoring Food",
  "😛": "with Tongue",
  "😜": "Winking with Tongue",
  "🤪": "Zany",
  "😝": "Squinting with Tongue",
  "🤑": "Money-Mouth",
  "🤗": "Smiling with Open Hands",
  "🤭": " with Hand Over Mouth",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "🤐": "Zipper-Mouth",
  "🤨": " with Raised Eyebrow",
  "😐": "Neutral",
  "😑": "Expressionless",
  "😶": " Without Mouth",
  "😏": "Smirking",
  "😒": "Unamused",
  "🙄": " with Rolling Eyes",
  "😬": "Grimacing",
  "🤥": "Lying",
  "😌": "Relieved",
  "😔": "Pensive",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping"
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
