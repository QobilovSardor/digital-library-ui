import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import AuthModal from "./AuthModal";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">LibraryPro</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Xususiyatlar</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Narxlar</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Sharhlar</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Aloqa</a>
        </nav>

        <div className="flex items-center space-x-4">
          <AuthModal />
          <Button>
            Boshlash
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;