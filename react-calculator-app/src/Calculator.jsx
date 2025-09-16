import { useState } from 'react';

// ボタンの配置を表す配列（記述順に表示）
const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+'
];

export function Calculator() {
  // カウント状態
  const [display, setDisplay] = useState('');
const handleClick = (btn) => {
  if (btn === 'C') {
    return setDisplay('');;
  }
  if (btn === '=') {
    return setDisplay(prev => calculate(prev));
  }
  setDisplay(prev => prev + btn);
};

  const calculate = (display) => {
  const expr = display
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\s+/g, '');

// 「整数 演算子 整数」の形式のみ許可
const validExpression = /^(\d+)([+\-*/])(\d+)$/;

// 有効な式であるかチェック
const match = display.match(validExpression);
  if (!match) return 'エラー';

  // 0:全体, 1:左オペランド, 2:演算子, 3:右オペランド
  const [, aStr, op, bStr] = match;
  const a = Number(aStr);
  const b = Number(bStr);

  switch (op) {
    case '+': return String(a + b);
    case '-': return String(a - b);
    case '*': return String(a * b);
    case '/': return b === 0 ? 'エラー' : String(a / b);
    default:  return 'エラー';
  }

  }
  return (
    <div>
      <h2>電卓アプリ</h2>
      <div className="calculator-container">
      <p>{display === '' ? '0' : display}</p>
      </div>
      <div className="button-grid">
      {buttons.map((btn) => (
  <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>))}
      </div>

    </div>
  );
};