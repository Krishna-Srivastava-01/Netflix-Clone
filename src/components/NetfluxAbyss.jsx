import { useState, useEffect } from "react";
import "./NetfluxAbyss.css";

export default function NetfluxAbyss() {
  const [time, setTime] = useState("");
  const [episodeText, setEpisodeText] = useState("");
  const [yesText, setYesText] = useState("YES");
  const [noStyle, setNoStyle] = useState({});
  const [noText, setNoText] = useState("no");

  useEffect(() => {
    function tick() {
      const d = new Date();
      let h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(
        h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + " " + ampm
      );

      const workH = 8,
        workM = 0;
      let minsLeft = workH * 60 + workM - (d.getHours() * 60 + d.getMinutes());
      if (minsLeft < 0) minsLeft += 1440;

      setEpisodeText(
        "EPISODE " +
          (Math.floor(d.getTime() / 60000) % 9999 + 1) +
          " OF YOUR LIFE. REGRETS: " +
          (minsLeft > 60
            ? Math.floor(minsLeft / 60) + "hr " + (minsLeft % 60) + "min until work"
            : "ONLY " + minsLeft + " MINS LEFT. STILL WATCHING?")
      );
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="abyss-container">
      <div className="card">
        <div className="hazard"></div>

        <div className="big-n">
          <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="52" height="180" rx="4" fill="#E50914" />
            <rect x="188" y="10" width="52" height="180" rx="4" fill="#E50914" />
            <polygon points="20,10 72,10 240,190 188,190" fill="#E50914" />
            <line
              x1="90"
              y1="15"
              x2="110"
              y2="90"
              stroke="#ff4444"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <line
              x1="150"
              y1="20"
              x2="175"
              y2="110"
              stroke="#ff4444"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="logo-text">
          NET<span className="shake">FL</span>UX
        </div>

        <div className="banner">
          YOUR EX IS STILL USING YOUR ACCOUNT. AND THEY CHANGED THE LANGUAGE TO KLINGON.
        </div>

        <div className="profiles">
          <div className="av">
            <div className="av-circle you">YOU</div>
            <div className="av-label red">online</div>
          </div>
          <div className="av">
            <div className="av-circle">MOM</div>
            <div className="av-label">asleep</div>
          </div>
          <div className="av">
            <div className="av-circle">BRO</div>
            <div className="av-label">gaming</div>
          </div>
          <div className="av">
            <div className="av-circle ex">
              EX<br />
              😍
            </div>
            <div className="av-label red">
              watching<br />YOUR show
            </div>
          </div>
          <div className="av">
            <div className="av-circle" style={{ fontSize: "18px", color: "#E50914" }}>
              ?
            </div>
            <div className="av-label">WHO</div>
          </div>
        </div>

        <div className="mystery-text">
          PROFILE 5 ADDED A WATCHLIST. 847 ITEMS. ALL DOCUMENTARIES ABOUT CULTS.
        </div>

        <div className="notification">
          <div className="notif-dot"></div>
          NETFLUX: Your ex just started watching your comfort show. Again.
        </div>

        <div className="still-watching">
          <p>ARE YOU STILL WATCHING?</p>
          <div className="btns">
            <button
              className="btn yes"
              onClick={() => setYesText(yesText === "YES" ? "YES!!" : "YES")}
            >
              {yesText}
            </button>
            <button
              className="btn no"
              style={noStyle}
              onClick={() => {
                setNoStyle({ background: "#E50914", color: "#fff" });
                setNoText("FINE. YES.");
              }}
            >
              {noText}
            </button>
            <button className="btn yes">YES</button>
          </div>
        </div>

        <div className="clock-section">
          <div className="clock">{time}</div>
          <div className="clock-sub">YOU HAVE WORK IN 3 HOURS 47 MINUTES</div>
        </div>

        <div className="sleep-bar">
          <div className="sleep-label">WILL TO SLEEP</div>
          <div className="bar-track">
            <div className="bar-fill"></div>
          </div>
        </div>

        <div className="recommendations">
          <div className="rec-title">BECAUSE YOU HAVE NO SELF CONTROL</div>
          <div className="rec-row">
            <div className="rec-card">
              <div className="rec-thumb">S1-E1</div>
              <div className="rec-name">
                one more<br />episode
              </div>
              <div className="match">99% match</div>
            </div>
            <div className="rec-card">
              <div className="rec-thumb">6 SEASONS</div>
              <div className="rec-name">
                new show<br />starts now
              </div>
              <div className="match">100% match</div>
            </div>
            <div className="rec-card">
              <div className="rec-thumb">FINALE</div>
              <div className="rec-name">
                sleep is<br />for the weak
              </div>
              <div className="match">666% match</div>
            </div>
            <div className="rec-card">
              <div className="rec-thumb">2HRS+</div>
              <div className="rec-name">
                you'll regret<br />this tomorrow
              </div>
              <div className="match">obviously</div>
            </div>
          </div>
        </div>

        <div className="bottom-crisis">
          <div className="skull-row">
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
          </div>
          <div className="crisis-text">
            YOUR SLEEP SCHEDULE: GONE<br />
            YOUR SOCIAL LIFE: GONE<br />
            YOUR EX'S NETFLIX: YOURS<br />
            YOUR REGRETS: LOADING...
          </div>
          <div className="skull-row">
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
            <div className="skull"></div>
          </div>
        </div>

        <div className="episode-count">{episodeText}</div>
        <div className="hazard"></div>
      </div>
    </div>
  );
}
