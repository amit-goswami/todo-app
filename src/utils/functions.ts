const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const getCurrentMonth = (): number => {
  return new Date().getMonth() + 1; // Months are zero-indexed in JavaScript
};

const getCurrentDay = (): number => {
  return new Date().getDate();
};

const getCurrentDate = (): string => {
  const year = getCurrentYear();
  const month = String(getCurrentMonth()).padStart(2, '0');
  const day = String(getCurrentDay()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const purgeLocalStorage = (): void => {
  localStorage.clear();
};

export {
  getCurrentYear,
  getCurrentMonth,
  getCurrentDay,
  getCurrentDate,
  purgeLocalStorage,
};
