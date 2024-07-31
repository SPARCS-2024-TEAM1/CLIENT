export const getTodayData = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해야 합니다.
  const day = today.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
