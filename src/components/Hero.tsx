import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Play } from "lucide-react";
import heroImage from "@/assets/library-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Zamonaviy kutubxona boshqaruvi 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> osonlashtirilgan</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-muted-foreground leading-relaxed">
                Kutubxonangiz jarayonlarini bizning to‘liq boshqaruv tizimimiz bilan soddalashtiring.
                Kataloglashdan tortib aylanmagacha, hammasini oson va samarali boshqaring.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Bepul sinovni boshlang
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Demoni ko‘rish
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                O‘rnatish to‘lovi yo‘q
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Bepul ko‘chirish
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                24/7 qo‘llab-quvvatlash
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-[var(--shadow-strong)]" data-aos="zoom-in">
              <img
                src={heroImage}
                alt="Kutubxona boshqaruv tizimi boshqaruv paneli"
                className="w-full h-auto object-cover"
              />
            </Card>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-primary to-accent rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;