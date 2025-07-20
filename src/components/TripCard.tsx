import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface TripCardProps {
  trip: {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    distance: string;
    difficulty: "Easy" | "Moderate" | "Challenging";
    rating: number;
    reviewCount: number;
    price: string;
    tags: string[];
    author: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Challenging: "bg-red-100 text-red-800"
  };

  return (
    <Card className="group hover:shadow-adventure transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={difficultyColors[trip.difficulty]}>
            {trip.difficulty}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {trip.price}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {trip.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {trip.description}
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{trip.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{trip.distance}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{trip.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({trip.reviewCount})
              </span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{trip.author}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 pt-2">
            {trip.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Button asChild className="w-full mt-4" variant="adventure">
            <Link to={`/trip/${trip.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripCard;