type UsernameProps = {
  username: string;
};

export function Username({ username }: UsernameProps) {
  return (
    <span className="text-ivory text-lg font-medium font-ibm_plex_sans">
      {username}
    </span>
  );
}