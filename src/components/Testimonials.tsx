import React from 'react';

const reviews = [
  {
    name: "Rachel Robinson",
    role: "Google Review",
    rating: 5,
    text: "I fully recommend SVR aesthetics! I was listened to, given good advice and the result of my procedure was even better than I could have hoped for. Fantastic service, amazing result."
  },
  {
    name: "Riya Patel",
    role: "Google Review",
    rating: 5,
    text: "First time visit and very good experience, felt very comfortable and would definitely recommend to friends and family! Very clean clinic and gives really good skin advice."
  },
  {
    name: "Ryan Hill",
    role: "Google Review",
    rating: 5,
    text: "Great friendly service! Great product used for lip fillers. Thanks! Holly R."
  },
  {
    name: "Anne-Marie Mosley",
    role: "Google Review",
    rating: 5,
    text: "Lovely experience and knowledgeable."
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 24px", background: "#f8f9fa", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="stag">Testimonials</span>
          <h2 className="stitle" style={{ fontSize: "2.5rem", color: "var(--navy)", marginBottom: "16px" }}>
            Don't just take our word for it.
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Hear from hundreds of our patients who have experienced the gold standard of clinical care at our Milton Keynes clinic.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          {reviews.map((r, idx) => (
            <div key={idx} style={{ background: "white", padding: "32px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {[...Array(r.rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--coral)" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p style={{ color: "#4a5568", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "24px", fontStyle: "italic" }}>
                "{r.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, var(--purple), var(--coral))", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.2rem" }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>{r.name}</div>
                  <div style={{ color: "#a0aec0", fontSize: "0.85rem" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
