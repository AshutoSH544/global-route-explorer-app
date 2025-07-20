import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Star, Users, Calendar, Share, Bookmark } from "lucide-react";
import { mockTrips } from "@/data/mockTrips";

const TripDetailsPage = () => {
  const { id } = useParams();
  const trip = mockTrips.find(t => t.id === id);

  if (!trip) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Trip Not Found</h1>
          <p className="text-muted-foreground mb-4">The trip you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/trips">Browse All Trips</Link>
          </Button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Challenging: "bg-red-100 text-red-800"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/trips">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Trips
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-7xl mx-auto">
            <Badge className={`${difficultyColors[trip.difficulty]} mb-4`}>
              {trip.difficulty}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {trip.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center space-x-1">
                <Clock className="w-5 h-5" />
                <span>{trip.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-5 h-5" />
                <span>{trip.distance}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{trip.rating}</span>
                <span>({trip.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Trip</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {trip.fullDescription}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {trip.description}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
                <ul className="space-y-3">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Trip Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {trip.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trip Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Trip Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Created by</span>
                    </div>
                    <span className="font-medium">{trip.author}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <span className="font-medium">{trip.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Distance</span>
                    </div>
                    <span className="font-medium">{trip.distance}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Estimated Cost</span>
                    <span className="font-medium text-primary">{trip.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full" variant="hero" size="lg">
                <Bookmark className="w-4 h-4 mr-2" />
                Save Trip
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Share className="w-4 h-4 mr-2" />
                Share Trip
              </Button>
              <Button variant="adventure" className="w-full" size="lg" asChild>
                <Link to="/create">
                  Create Similar Trip
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{trip.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{trip.reviewCount}</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage;