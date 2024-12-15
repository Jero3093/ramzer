export default function useRandomResult<T>({ list }: { list: T[] }): T | null {
  if (list.length > 0) {
    const randomNumb = Math.floor(Math.random() * list.length);

    const result = list.at(randomNumb);

    return result || null;
  } else {
    return null;
  }
}
