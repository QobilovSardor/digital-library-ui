import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Boshlang‘ich",
      price: "Bepul",
      description: "Yangi boshlayotgan kichik kutubxonalar uchun qulay",
      features: [
        "1 000 tagacha kitob",
        "Asosiy kataloglash",
        "Bir vaqtning o‘zida 5 foydalanuvchi",
        "Email orqali yordam",
        "Asosiy hisobotlar"
      ],
      popular: false,
      cta: "Bepul boshlash",
    },
    {
      name: "Professional",
      price: "$49",
      period: "/oy",
      description: "O‘rta hajmdagi akademik kutubxonalar uchun ideal",
      features: [
        "10 000 tagacha kitob",
        "Kengaytirilgan kataloglash va qidiruv",
        "Bir vaqtning o‘zida 50 foydalanuvchi",
        "Ustuvor yordam",
        "Kengaytirilgan analitika",
        "Mobil ilova kirishi",
        "Integratsiya yordami"
      ],
      popular: true,
      cta: "Sinovni boshlash",
    },
    {
      name: "Korporativ",
      price: "Individual",
      description: "Katta muassasalar va maxsus ehtiyojlar uchun",
      features: [
        "Cheksiz kitoblar",
        "Bir nechta filiallarni qo‘llab-quvvatlash",
        "Cheksiz foydalanuvchilar",
        "24/7 maxsus yordam",
        "Moslashtirilgan integratsiyalar",
        "Oq yorliq (white-label) yechimi",
        "On-premise joylashtirish",
        "Trening va konsultatsiya"
      ],
      popular: false,
      cta: "Sotuvlar bilan bog‘lanish",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Narxlar</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-aos="fade-up">
            Oddiy, shaffof <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">narxlar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kutubxonangiz uchun mos rejani tanlang. Bepul boshlang va ehtiyoj oshgani sayin kengaytiring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-[var(--shadow-strong)] scale-105' : ''}`} data-aos="fade-up" data-aos-delay={index * 80}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Eng mashhur
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Barcha rejalar SSL xavfsizligi, muntazam zaxira va 99.9% ishlash kafolatini o‘z ichiga oladi
          </p>
          <p className="text-sm text-muted-foreground">
            Maxsus yechim kerakmi? <Button variant="link" className="p-0 h-auto text-primary">Sotuvlar jamoamiz bilan bog‘laning</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;