export const randomIds = (id: number) => {
  const newArray: number[] = [];
  let randomId;
  while (newArray.length < 3) {
    randomId = Math.floor(Math.random() * 7);
    if (randomId !== 0 && !newArray.includes(randomId) && randomId !== id) {
      newArray.push(randomId);
    }
  }

  return newArray;
};
