export default async function useTvShows() {
  try {
    const totalPages = 500;

    const randomPage = Math.floor(Math.random() * totalPages);

    const url = `${process.env.TMDB_TV_URL}&page=${randomPage}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION}`,
      },
    };

    const req = await fetch(url, options);

    const result = await req.json();

    if (result.results) {
      return result.results;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
}
