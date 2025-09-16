import React from 'react';

// 子側（ProfileCard.jsx）
export function ProfileCard({ name, age, bio, onNext }) {
  return (
    <main>
      <section>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
          <h2>{name}</h2>
          <p>【年齢】{age}歳</p>
          <p>【自己紹介】{bio}</p>
          <button onClick={onNext}>次のプロフィール</button>
        </div>
      </section>
    </main>
  );
}
