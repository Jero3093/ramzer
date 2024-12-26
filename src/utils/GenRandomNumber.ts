function GenRandomNumber({ totalPages }: { totalPages: number }) {
  const randomPage = Math.floor(Math.random() * totalPages);

  return randomPage;
}

export default GenRandomNumber;
