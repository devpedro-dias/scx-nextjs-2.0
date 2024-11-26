"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { navbarItems } from "@/app/_lib";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ModeToggle } from "./ThemeToggle";
import QuotationClient from "./QuotationClient";

const Header = () => {
    const locale = useLocale();
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Card className="">
            <CardContent className="flex justify-between items-center m-0 p-3 md:max-w-[85%] mx-auto">
                <div className="flex gap-2">
                    <Link href="/" className="flex gap-1">
                        <Image
                            src="/logo-scx.png"
                            alt="logo-SCX"
                            width={110}
                            height={90}
                            className="display-block"
                        />
                        <div className="flex flex-col items-left justify-center text-primary">
                            <span className="text-3xl md:text-5xl font-semibold">SCX</span>
                            <span className="text-md md:text-xl font-semibold">
                                Agenciamentos Marítimos
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex gap-2">
                    <ModeToggle />
                    <LanguageToggle />

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger>
                            <MenuIcon width={34} height={34} color="#31859B" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="mb-10">
                                <SheetTitle className="text-primary text-2xl font-light text-center">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            {navbarItems.map(({ id, href, icon: Icon, nameKey }) => (
                                <Button
                                    className="flex justify-center text-primary text-xl my-4"
                                    variant="ghost"
                                    asChild
                                    key={id}
                                >
                                    <Link href={href} locale={locale} onClick={handleLinkClick}>
                                        <Icon width={30} height={40} />
                                        {t(`header.${nameKey}`)}
                                    </Link>
                                </Button>
                            ))}
                        </SheetContent>
                    </Sheet>
                </div>
            </CardContent>

            <div>
                <QuotationClient />
            </div>
        </Card>
    );
};

export default Header;
