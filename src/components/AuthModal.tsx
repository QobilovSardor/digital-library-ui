import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AuthModal: React.FC = () => {
  const { toast } = useToast();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    toast({
      title: "Tizimga kirdingiz",
      description: `Yana xush kelibsiz, ${fd.get("email")}`,
    });
  };

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password") || "");
    const confirm = String(fd.get("confirm") || "");

    if (password !== confirm) {
      toast({ title: "Parollar mos kelmayapti", description: "Iltimos, qayta urinib ko‘ring." });
      return;
    }

    toast({
      title: "Hisob yaratildi",
      description: "Tasdiqlash uchun elektron pochtangizni tekshiring.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="hidden md:inline-flex">Kirish</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>LibraryPro-ga xush kelibsiz</DialogTitle>
          <DialogDescription>
            Davom etish uchun tizimga kiring yoki ro‘yxatdan o‘ting.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Kirish</TabsTrigger>
            <TabsTrigger value="register">Ro‘yxatdan o‘tish</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={onLogin} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Elektron pochta</Label>
                <Input
                  id="login-email"
                  name="email"
                  type="email"
                  placeholder="siz@universitet.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Parol</Label>
                <Input id="login-password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Kirish</Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={onRegister} className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="register-name">To‘liq ism</Label>
                  <Input id="register-name" name="name" placeholder="Ali Vali" required />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="register-email">Elektron pochta</Label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="siz@universitet.edu"
                    required
                  />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="register-password">Parol</Label>
                  <Input id="register-password" name="password" type="password" required />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="register-confirm">Parolni tasdiqlang</Label>
                  <Input id="register-confirm" name="confirm" type="password" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Hisob yaratish</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
