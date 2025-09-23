import { useGame } from "../hooks/useGame";



export const GameGrid = () => {
    
   const{games, error}= useGame();
  return (
    <>
    {error && <text>{error}</text>}
    <ul>
        {games.map(g=><li key={g.id}>{g.name}</li>)}
    </ul></>
    
  );
};