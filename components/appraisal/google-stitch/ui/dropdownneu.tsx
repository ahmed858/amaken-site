
"use client"

import { User, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/appraisal/auth-context"
import { useI18n } from "@/lib/i18n/context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardHeader } from "../client-dashboard/DashboardHeader"



export default function DropdownNeu() {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const { t, locale } = useI18n();

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();
    };


    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <Avatar className="w-8 h-8 border border-slate-200">
                        <AvatarImage src={user?.image} alt={user?.name} />
                        <AvatarFallback className="bg-[#006A66] text-white text-xs">
                            {getInitials(user?.full_name || user?.name || "U")}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <Link href="/appraisal/me">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user?.full_name || user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                        </div>
                    </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/appraisal/client-dashboard" className="cursor-pointer w-full">
                        <User className="mr-2 h-4 w-4" />
                        <span>{t("nav.portal")}</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => logout()}
                    className="text-red-600 cursor-pointer"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{locale === 'ar' ? 'تسجيل الخروج' : 'Logout'}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}