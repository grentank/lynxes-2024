import React, { useEffect, useState } from 'react';

export default function EffectPage() {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    console.log(`Вы нажали ${clickCount} раз`);
  });

  const [value, setValue] = useState('');
  const [countChanges, setCountChanges] = useState(-1);
  const onChange = ({ target }) => setValue(target.value);

  useEffect(() => {
    setCountChanges((prev) => prev + 1);
  }, [value]);

  return (
    <>
      <div>
        <p>Вы нажали {clickCount} раз</p>
        <button onClick={() => setClickCount(clickCount + 1)}>
          Press
        </button>
      </div>
      <div>
        <input type="text" value={value} onChange={onChange} />
        <div>Количество изменений: {countChanges}</div>
      </div>
    </>
  );
}
