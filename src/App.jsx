import { useState } from "react";

const steps = ["Applied", "Under Review", "Shortlisted", "Interview", "Decision"];

const cards = [
  { title: "Our Culture", content: "We value collaboration and growth." },
  { title: "Meet the Team", content: "Work with amazing people." },
  { title: "Mission & Vision", content: "We build meaningful solutions." },
  { title: "Fun Facts", content: "We love innovation and teamwork." },
];

const questions = [
  {
    q: "What matters most to you?",
    options: ["Growth", "Culture", "Flexibility"]
  },
  {
    q: "How do you prefer working?",
    options: ["Alone", "Team", "Mixed"]
  }
];

export default function App() {
  const [modal, setModal] = useState(null);
  const [qIndex, setQIndex] = useState(0);

  return (
    <div className="smartcheckin-page">

      <div className="header">
        <h2>Thanks for applying 🎉</h2>
        <p>Your application is under review</p>

        <div className="status">Under Review</div>

        <div className="progress">
          {steps.map((s, i) => (
            <div key={i} className={`step ${i === 1 ? "active" : ""}`}>
              {s}
            </div>
          ))}
        </div>
      </div>

      <h3>Discover More</h3>
      <div className="cards">
        {cards.map((c, i) => (
          <div key={i} className="card" onClick={() => setModal(c)}>
            <h4>{c.title}</h4>
            <p>{c.content}</p>
          </div>
        ))}
      </div>

      <div className="quiz">
        <h3>{questions[qIndex].q}</h3>
        {questions[qIndex].options.map((o, i) => (
          <button key={i} onClick={() => setQIndex((prev) => (prev + 1) % questions.length)}>
            {o}
          </button>
        ))}
      </div>

      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modal.title}</h3>
            <p>{modal.content}</p>
          </div>
        </div>
      )}

    </div>
  );
}
