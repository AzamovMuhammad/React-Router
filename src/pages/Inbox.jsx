import React from "react";

const emails = [
  {
    sender: "Fitbit",
    subject: "Ваш недельный отчет Fitbit!",
    time: "10:44 PM",
    unread: true,
  },
  {
    sender: "Creately",
    subject: "Hey muhammadullo, Creately tips & tricks for getting started",
    time: "3:32 PM",
  },
  {
    sender: "HeadHunter",
    subject: "Код подтверждения - 8806 — ваш код для авторизации на hh.uz",
    time: "2:52 PM",
  },
  {
    sender: "HeadHunter",
    subject: "Muhammadullo, подходящие вакансии",
    time: "12:27 PM",
  },
  {
    sender: "HeadHunter",
    subject: "Работодатель не готов пригласить вас на собеседование",
    time: "9:12 AM",
  },
  {
    sender: "Steam",
    subject:
      "Ваш аккаунт Steam: доступ из нового браузера или мобильного устройства",
    time: "Apr 7",
  },
  {
    sender: "LottieFiles",
    subject: "🎓 Introducing LottieFiles for AE Certification",
    time: "Apr 7",
  },
  {
    sender: "FutureMe",
    subject: "Wish your *future self* a happy birthday! 🎂",
    time: "Apr 7",
  },
];

function Inbox() {
  return (
    <div className="email-list">
      <div className="email-header">
        <h2>Primary</h2>
        <div className="categories">
          <span>
            Promotions <span className="badge">3 new</span>
          </span>
          <span>
            Social <span className="badge">1 new</span>
          </span>
          <span>
            Updates <span className="badge">2 new</span>
          </span>
        </div>
      </div>
      <ul className="emails">
        {emails.map((email, index) => (
          <li key={index} className={email.unread ? "email unread" : "email"}>
            <span className="email-sender">{email.sender}</span>
            <span className="email-subject">{email.subject}</span>
            <span className="email-time">{email.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
