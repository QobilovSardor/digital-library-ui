import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Bosh kutubxonachi",
      institution: "Stanford University",
      content: "Ushbu tizim kutubxona ish jarayonlarimizni tubdan o‘zgartirdi. Avtomatlashtirish funksiyalari ish yukini 60% ga kamaytirdi va talabalar mamnunligini sezilarli oshirdi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Kutubxona direktori",
      institution: "MIT Libraries",
      content: "Analitika va hisobot funksiyalari a’lo darajada. Endi foydalanish naqshlarini kuzatib, to‘plamni boshqarishda ma’lumotga asoslangan qarorlar qabul qilamiz.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Prof. Emily Rodriguez",
      role: "Axborot texnologiyalari professori",
      institution: "UC Berkeley",
      content: "Talabalarga mobil interfeys va o‘z-o‘ziga xizmat ko‘rsatish juda yoqadi. Joriy qilingandan beri bronlar 40% ga oshdi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Tizim administratori",
      institution: "Harvard Library",
      content: "Integratsiya juda oson bo‘ldi va qo‘llab-quvvatlash jamoasi a’lo. Tizim 50 000+ kitob to‘plamimizni bemalol boshqaradi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Kutubxona menejeri",
      institution: "Yale University",
      content: "Ko‘p filialli qo‘llab-quvvatlash zo‘r. Barcha bo‘lim kutubxonalarimizni bitta boshqaruv panelidan to‘liq ko‘rinishda boshqaramiz.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "IT direktori",
      institution: "Princeton University",
      content: "Xavfsizlik funksiyalari yuqori darajada va tizim pik paytlarda ham zo‘r ishlaydi. Juda tavsiya qilaman!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Sharhlar</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-aos="fade-up">
            Yetakchi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">universitetlar</span> ishonadi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Platformamiz yordamida kutubxona ishlarini zamonaviylashtirgan yuzlab muassasalarga qo‘shiling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 80}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.institution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>200+ sharhlardan 4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;