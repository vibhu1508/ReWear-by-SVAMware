"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { Menu, Search, Heart, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rewear-gradient-primary rounded-lg flex items-center justify-center rewear-warm-shadow">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-2xl font-bold rewear-gradient-text">
                ReWear
              </span>
            </button>

            <nav className="hidden md:flex items-center space-x-6">
              {["Browse", "Categories", "How it Works", "Community"].map(
                (text) => (
                  <Link
                    key={text}
                    to="#"
                    className="text-sm font-medium hover:rewear-text-forest transition-colors"
                  >
                    {text}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <Button variant="ghost" size="icon">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </div>

            <ThemeToggle />

            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Sign In
              </Button>
              <Button
                className="rewear-gradient-primary text-white rewear-warm-shadow hover:opacity-90"
                onClick={() => navigate("/signup")}
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-4">
                <nav className="flex flex-col gap-4 mt-6">
                  {["Browse", "Categories", "How it Works", "Community"].map(
                    (text) => (
                      <Link
                        key={text}
                        to="#"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium hover:rewear-text-forest transition-colors"
                      >
                        {text}
                      </Link>
                    )
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="rewear-gradient-primary text-white rewear-warm-shadow hover:opacity-90"
                    onClick={() => {
                      navigate("/signup");
                      setIsOpen(false);
                    }}
                  >
                    Join Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
