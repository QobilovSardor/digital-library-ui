import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Biz haqimizda", href: "#about" },
    { label: "Xususiyatlar", href: "#features" },
    { label: "Narxlar", href: "#pricing" },
    { label: "Aloqa", href: "#contact" },
    { label: "Blog", href: "#blog" },
    { label: "Yordam markazi", href: "#help" },
  ];

  const services = [
    { label: "Kutubxona boshqaruvi", href: "#services" },
    { label: "Raqamli kataloglash", href: "#cataloging" },
    { label: "A’zolarni boshqarish", href: "#members" },
    { label: "Tahlil va hisobotlar", href: "#analytics" },
    { label: "Mobil ilova", href: "#mobile" },
    { label: "API integratsiyasi", href: "#api" },
  ];

  const legal = [
    { label: "Maxfiylik siyosati", href: "#privacy" },
    { label: "Xizmat ko‘rsatish shartlari", href: "#terms" },
    { label: "Cookie siyosati", href: "#cookies" },
    { label: "GDPR talablari", href: "#gdpr" },
    { label: "Xavfsizlik", href: "#security" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6" data-aos="fade-up">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold">LibrarySystem</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Zamonaviy kutubxona boshqaruvi — sodda. Dunyo bo‘ylab universitetlar ishonch bildirgan kompleks raqamli yechim bilan jarayonlaringizni soddalashtiring.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>sales@librarysystem.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (800) 123-LIBS</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Innovation City, IC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6" data-aos="fade-up">
              <h3 className="font-semibold text-lg">Tezkor havolalar</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6" data-aos="fade-up">
              <h3 className="font-semibold text-lg">Xizmatlar</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6" data-aos="fade-up">
              <h3 className="font-semibold text-lg">Yangiliklardan xabardor bo‘ling</h3>
              <p className="text-muted-foreground text-sm">
                So‘nggi yangiliklar, funksiyalar va kutubxona boshqaruvi bo‘yicha maslahatlar uchun axborot byulletenimizga obuna bo‘ling.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Emailingizni kiriting"
                  className="bg-background"
                />
                <Button size="sm" className="w-full">
                  Obuna bo‘lish
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Obuna bo‘lish orqali Maxfiylik siyosati va Xizmat ko‘rsatish shartlariga rozilik bildirasiz.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} LibrarySystem. Barcha huquqlar himoyalangan.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;