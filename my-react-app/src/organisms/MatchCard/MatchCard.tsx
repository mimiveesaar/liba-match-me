import { MatchCardBackground } from "../../atoms/Match_Cards/MatchCardBackround/match_card_background";
import { MatchCardProfilePic } from "../../atoms/Match_Cards/ProfilePicture/match_card_profile_pic";


type MatchCardProps = {
  profilePicSrc?: string;
  alt?: string;
  cardColor?: "amberglow" | "olive" | "peony" | "minty" | "moss" | "coral";
};

export function MatchCard({
  profilePicSrc,
  alt,
  cardColor = "olive",
}: MatchCardProps) {
  return (
    <MatchCardBackground color={"olive"}>
      <div className="flex flex-col items-center justify-top h-full">
        <MatchCardProfilePic src={"default-profile.png"} alt={alt} />
      </div>
    </MatchCardBackground>
  );
}