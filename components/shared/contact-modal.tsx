"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n/context"

interface ContactModalProps {
    color: string
    email: string
    services: { value: string; label: string }[]
    title: string
    subtitle: string
    trigger: React.ReactNode
}

export function ContactModal({ color, email, services, title, subtitle, trigger }: ContactModalProps) {
    const { t } = useI18n()
    const [submitted, setSubmitted] = useState(false)
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Integration logic would go here
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setOpen(false)
        }, 3000)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-background rounded-2xl shadow-2xl">
                <div className="relative">
                    {/* Header with Color Accent */}
                    <div className="h-2 w-full" style={{ backgroundColor: color }} />

                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <DialogHeader className="mb-6">
                                        <DialogTitle className="text-2xl font-serif font-bold text-foreground">
                                            {title}
                                        </DialogTitle>
                                        <DialogDescription className="text-muted-foreground mt-2">
                                            {subtitle}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="text-sm font-medium">
                                                {t("contact.firstName")} {t("contact.lastName")}
                                            </Label>
                                            <Input
                                                id="fullName"
                                                placeholder={t("contact.firstName")}
                                                required
                                                className="bg-secondary/30 border-border focus:ring-1 transition-all"
                                                style={{ '--tw-ring-color': color } as React.CSSProperties}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-medium">
                                                    {t("contact.email")}
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    required
                                                    className="bg-secondary/30 border-border focus:ring-1 transition-all"
                                                    style={{ '--tw-ring-color': color } as React.CSSProperties}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-medium">
                                                    {t("contact.phone")}
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    placeholder="+966"
                                                    className="bg-secondary/30 border-border focus:ring-1 transition-all"
                                                    style={{ '--tw-ring-color': color } as React.CSSProperties}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="service" className="text-sm font-medium">
                                                {t("contact.department")}
                                            </Label>
                                            <Select required>
                                                <SelectTrigger className="bg-secondary/30 border-border focus:ring-1 transition-all"
                                                    style={{ '--tw-ring-color': color } as React.CSSProperties}>
                                                    <SelectValue placeholder={t("contact.department")} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service) => (
                                                        <SelectItem key={service.value} value={service.value}>
                                                            {service.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-medium">
                                                {t("contact.message")}
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder={t("contact.message")}
                                                rows={4}
                                                required
                                                className="bg-secondary/30 border-border focus:ring-1 transition-all resize-none"
                                                style={{ '--tw-ring-color': color } as React.CSSProperties}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-12 text-white font-semibold flex items-center justify-center gap-2 rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
                                            style={{ backgroundColor: color }}
                                        >
                                            {t("contact.send")}
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center text-center"
                                >
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${color}20` }}
                                    >
                                        <CheckCircle className="w-10 h-10" style={{ color }} />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                                        {t("contact.success")}
                                    </h2>
                                    <p className="text-muted-foreground mb-4 max-w-sm">
                                        {t("contact.successDetail")}
                                    </p>
                                    <p className="text-sm font-medium" style={{ color }}>
                                        {email}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
