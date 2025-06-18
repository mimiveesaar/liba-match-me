export function MatchCard({ planet, lookingFor, height }) {
  return (
    <div className="rounded-xl bg-pink-100 p-4 w-64 text-sm shadow-md">
      <div className="flex justify-center mb-2">
        <img src="alien.png" alt="Alien" className="rounded-xl" />
      </div>
      <div><strong>🌍 Planet:</strong> {planet}</div>
      <div><strong>💫 Looking for:</strong> {lookingFor}</div>
      <div><strong>📏 Height:</strong> {height}</div>
    </div>
  );
}