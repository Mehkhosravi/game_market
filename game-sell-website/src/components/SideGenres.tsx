import { useGenre } from '../hooks/useGenre'

export const SideGenres = () => {
    const {genres}= useGenre();
  return (
    <ul>
        {genres.map(genre=> <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}
