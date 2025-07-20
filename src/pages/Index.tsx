import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Users, Star, Compass, Mountain, Camera, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-roadtrip.jpg";
import { mockTrips } from "@/data/mockTrips";

const Index = () => {
  const featuredTrips = mockTrips.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Epic road trip landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the World's Most
            <span className="bg-gradient-to-r from-adventure-orange to-adventure-warm bg-clip-text text-transparent block">
              Epic Road Trips
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create, share, and explore handcrafted road trip adventures from passionate travelers around the globe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" asChild>
              <Link to="/trips">
                Explore Trips
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="adventure" className="text-lg px-8 py-6" asChild>
              <Link to="/create">
                Create Your Trip
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-adventure-sky/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RoadTrip?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a community of adventurers sharing the world's most incredible road trip experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Compass,
                title: "Curated Routes",
                description: "Handpicked road trips from experienced travelers worldwide"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Real experiences shared by passionate road trip enthusiasts"
              },
              {
                icon: Camera,
                title: "Visual Stories",
                description: "Stunning photography and detailed trip documentation"
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Discover amazing road trips on every continent"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-adventure transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-adventure-sunset to-adventure-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Road Trips
              </h2>
              <p className="text-xl text-muted-foreground">
                Start your adventure with these popular destinations
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/trips">
                View All Trips
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
              <Card key={trip.id} className="group hover:shadow-adventure transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {trip.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {trip.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{trip.rating}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full" variant="adventure">
                    <Link to={`/trip/${trip.id}`}>
                      Explore Trip
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/trips">
                View All Trips
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-adventure-sunset via-adventure-orange to-adventure-warm text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Mountain className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers sharing unforgettable road trip experiences. Create your first trip today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/create">
                Share Your Trip
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-adventure-sunset" asChild>
              <Link to="/trips">
                Browse Adventures
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
