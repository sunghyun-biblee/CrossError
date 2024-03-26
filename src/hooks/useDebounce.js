import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  //value와 딜레이를 파라미터로 받음
  const [debouneceValue, setDebounceValue] = useState(value);
  // 렌더링관련하여 useEffect 사용
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
      // clearTimeout 알아보기
    };
  }, [value, delay]);

  return debouneceValue;
};
