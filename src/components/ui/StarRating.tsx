import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, size = 16, className = "" }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(star <= rating ? "fill-gold-400 text-gold-400" : "fill-gray-200 text-gray-200")}
        />
      ))}
    </div>
  );
}
