import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, BookOpen, Clock, Shield } from "lucide-react";

const Solutions = () => {
  const problems = [
    {
      title: "Qo‘lda hisob yuritish",
      description: "An’anaviy qog‘oz tizimlari xatolarga moyil va ko‘p vaqt oladi",
      icon: BookOpen,
    },
    {
      title: "Kitoblarni kuzatish muammolari",
      description: "Kitob mavjudligi va qarz tarixini kuzatish qiyin",
      icon: Clock,
    },
    {
      title: "Uzun navbatlar",
      description: "Talabalar kitob olish va topshirishda uzoq navbat kutishadi",
      icon: Users,
    },
  ];

  const solutions = [
    {
      title: "Raqamli kataloglash",
      description: "Tezkor qidiruv va filtrlash imkoniyatlariga ega to‘liq raqamli baza",
      icon: CheckCircle,
      benefit: "99% xato kamayishi",
    },
    {
      title: "Real vaqtli kuzatuv",
      description: "Kitob mavjudligi, bron va muddatlar haqida jonli yangilanishlar",
      icon: TrendingUp,
      benefit: "Zudlik bilan yangilanish",
    },
    {
      title: "O‘z-o‘ziga xizmat tizimi",
      description: "Talabalar mustaqil ravishda ko‘rish, bron qilish va boshqarishlari mumkin",
      icon: Shield,
      benefit: "Navbatsiz xizmat",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Yechimlar</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-aos="fade-up">
            Muammolardan <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">aqlli yechimlargacha</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kutubxonalar duch keladigan muammolarni yaxshi bilamiz. Tizimimiz an’anaviy boshqaruvni zamonaviy va samarali tajribaga aylantiradi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-8 text-destructive">An’anaviy kutubxona muammolari</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20" data-aos="fade-up" data-aos-delay={index * 80}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded-lg">
                        <problem.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Bizning aqlli yechimlarimiz</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-primary/20 bg-primary/5" data-aos="fade-up" data-aos-delay={index * 80}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{solution.title}</h4>
                          <Badge variant="secondary" className="text-xs">{solution.benefit}</Badge>
                        </div>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;