import { MatchCardBackground } from "../../atoms/Match_Cards/MatchCardBackround/match_card_background";
import { MatchCardProfilePic } from "../../atoms/Match_Cards/ProfilePicture/match_card_profile_pic";
import { LocationTag } from "../../atoms/Match_Cards/Tags/LocationTag/location_tag";



type MatchCardProps = {
  profilePicSrc?: string;
  alt?: string;
  cardColor?: "amberglow" | "olive" | "peony" | "minty" | "moss" | "coral";
  location?: string;
};

export function MatchCard({
  profilePicSrc,
  alt,
  cardColor = "olive",
  location = "Mars",
}: MatchCardProps) {
  return (
    <MatchCardBackground color={"olive"}>
      <div className="flex flex-col items-center h-full">
            <MatchCardProfilePic src={"default-profile.png"} alt={alt} />

        <div className="w-full pt-2 pl-4 self-start">
            <LocationTag location={location} /> 
        </div>

      </div>
    </MatchCardBackground>
  );
}