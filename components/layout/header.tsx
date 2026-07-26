"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
// import { useAuth } from "@/lib/auth/auth-context"
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/group/auth-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
interface NavItem {
  key: string;
  href: string;
  children?: { key: string; href: string; label: string }[];
}

const navigation: NavItem[] = [
  { key: "home", href: "/" },
  { key: "realEstate", href: "/real-estate" },
  { key: "projects", href: "/group/projects" },
  { key: "miscellaneousUnits", href: "/group/miscellaneous-units" },
  { key: "about", href: "/about" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];

export function Header({ links, color, logo }: { links?: NavItem[]; color?: string; logo?: string }) {
  const { t, locale, setLocale, direction } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const router = useRouter();

  const navItems = links || navigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm "
          : "text-white bg-transparent py-6",
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/group" className="flex items-center gap-3">
            {logo ? (
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            ) : (
              <span className="text-2xl font-bold tracking-tighter text-white">
                AMAKEN
              </span>
            )}
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.key)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all rounded-md inline-flex items-center gap-1",
                    isScrolled
                      ? "text-white/80 hover:text-foreground hover:bg-secondary"
                      : "text-black/80 hover:text-white hover:bg-white/10",
                  )}

                  style={color && isScrolled ? { color: 'white' } : {}}
                >
                  {t(`nav.${item.key}`) || item.key}
                  {/* Fallback to key if translation missing, useful for dynamic links */}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={cn(
                "gap-2 transition-colors",
                isScrolled
                  ? "text-white hover:bg-secondary"
                  : "text-white hover:bg-white/10",
              )}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{t("nav.language")}</span>
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "gap-2 transition-colors",
                      isScrolled
                        ? "text-white hover:bg-secondary"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.full_name || user.name || "User"}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant={isScrolled ? "default" : "secondary"}
                size="sm"
                asChild
              >
                <Link href="/portal/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
