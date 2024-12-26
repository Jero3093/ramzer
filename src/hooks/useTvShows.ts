import GenRandomNumber from "@/utils/GenRandomNumber";

export default async function useTvShows() {
  try {
    const randomPage = GenRandomNumber({ totalPages: 500 });

    const req = await fetch(`${process.env.TMDB_TV_URL}&page=${randomPage}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION}`,
      },
    });

    const result = await req.json();

    if (result.results) {
      return result.results;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}
