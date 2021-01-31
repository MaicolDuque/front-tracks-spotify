
export default function useArtists(artists = []) {
  const stringArtists = artists.map(({ name }) => name).join(',')
  return { stringArtists }
}
