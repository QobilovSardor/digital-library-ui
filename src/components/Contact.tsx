import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Biz bilan bog‘laning</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-aos="fade-up">
            Kutubxonangizni <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">o‘zgartirishga tayyormisiz?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Demo rejalashtirish yoki ehtiyojlaringizni muhokama qilish uchun jamoamiz bilan bog‘laning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-2xl">Demo so‘rash</CardTitle>
              <p className="text-muted-foreground">
                Quyidagi formani to‘ldiring — 24 soat ichida siz bilan bog‘lanamiz.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ism</Label>
                  <Input id="firstName" placeholder="Ali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiya</Label>
                  <Input id="lastName" placeholder="Valiyev" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Elektron pochta</Label>
                <Input id="email" type="email" placeholder="ali.valiyev@universitet.edu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon raqami</Label>
                <Input id="phone" type="tel" placeholder="+998 (90) 123-45-67" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Muassasa nomi</Label>
                <Input id="institution" placeholder="Excellence Universiteti" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Rolingiz</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Rolingizni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="librarian">Kutubxonachi</SelectItem>
                    <SelectItem value="director">Kutubxona direktori</SelectItem>
                    <SelectItem value="admin">Universitet administratori</SelectItem>
                    <SelectItem value="it">IT menejeri</SelectItem>
                    <SelectItem value="other">Boshqa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Xabar</Label>
                <Textarea 
                  id="message" 
                  placeholder="Kutubxonangiz ehtiyojlari va muammolari haqida qisqacha yozing..."
                  className="min-h-[100px]"
                />
              </div>

              <Button size="lg" className="w-full">
                Demo so‘rash
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ushbu formani yuborish orqali Xizmat ko‘rsatish shartlari va Maxfiylik siyosatiga rozilik bildirasiz.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Aloqa ma’lumotlari</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">sales@librarysystem.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">+1 (800) 123-LIBS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Manzil</p>
                      <p className="text-muted-foreground">
                        123 Education St, Suite 456<br />
                        Innovation City, IC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ish vaqti</p>
                      <p className="text-muted-foreground">
                        Du-Ju: 9:00 - 18:00 (PST)<br />
                        Hafta oxiri: faqat shoshilinch qo‘llab-quvvatlash
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tezkor amallar</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Jonli demo rejalashtirish
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Tijorat taklifi so‘rash
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Broshyurani yuklab olish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;