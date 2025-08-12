import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, BarChart3, Search, Clock, Shield } from "lucide-react";
import catalogingImage from "@/assets/cataloging-feature.jpg";
import membersImage from "@/assets/members-feature.jpg";
import circulationImage from "@/assets/circulation-feature.jpg";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Aqlli kataloglash",
      description: "ISBN skanerlash, avtomatik metadata olish va aqlli klassifikatsiya tizimlari bilan ilg‘or kataloglash.",
      image: catalogingImage,
      badge: "AI asosida"
    },
    {
      icon: Users,
      title: "A’zolarni boshqarish",
      description: "Ro‘yxatdan o‘tish, profil kuzatuvi, a’zolik darajalari va aloqa vositalari bilan to‘liq foydalanuvchi boshqaruvi.",
      image: membersImage,
      badge: "Qulay"
    },
    {
      icon: Clock,
      title: "Aylanmani boshqarish",
      description: "Avtomatik muddat kuzatuvi, yangilashlar va kechikish bildirishnomalari bilan tezkor qabul/berish jarayoni.",
      image: circulationImage,
      badge: "Avtomatlashtirilgan"
    },
    {
      icon: Search,
      title: "Kengaytirilgan qidiruv",
      description: "Butun to‘plamingiz bo‘ylab filtrlar, fasetlangan qidiruv va tezkor natijalar bilan kuchli qidiruv tizimi.",
      badge: "Yashin tezligida"
    },
    {
      icon: BarChart3,
      title: "Tahlil va hisobotlar",
      description: "Aylanma statistikasi, mashhur nomlar va foydalanish tahlillari bilan keng qamrovli hisobotlar.",
      badge: "Ma’lumotga asoslangan"
    },
    {
      icon: Shield,
      title: "Xavfsizlik va zaxira",
      description: "Avtomatik zaxira nusxalari, rollarga asoslangan ruxsat va audit jurnallari bilan korporativ darajadagi xavfsizlik.",
      badge: "Korporativ daraja"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Xususiyatlar</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground" data-aos="fade-up">
            Kutubxonani boshqarish uchun zarur hamma narsa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kichik jamoat kutubxonalaridan tortib yirik akademik muassasalargacha — platformamiz ehtiyojingiz bilan birga o‘sadi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 border-border"
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <CardContent className="p-6 space-y-4">
                {feature.image && (
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="outline">{feature.badge}</Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;