'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const { t } = useI18n();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login({ usr: email, pwd: password });
        } catch (error) {
            // Error handled in login function (toast)
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full max-w-md"
                >
                    <div className="flex justify-center mb-8">
                        <Link href="/">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <span className="text-primary-foreground font-bold text-2xl">A</span>
                            </div>
                        </Link>
                    </div>

                    <Card className="border-border/40 shadow-2xl backdrop-blur-sm bg-card/95">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-3xl font-bold text-center tracking-tight">
                                {t('portal.login.title')}
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground text-base">
                                {t('portal.login.subtitle')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2 group">
                                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary" />
                                        {t('portal.login.email')}
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                                            <Lock className="w-4 h-4 text-primary" />
                                            {t('portal.login.password')}
                                        </Label>
                                        <Link
                                            href="/portal/forget-password"
                                            className="text-xs text-primary hover:underline font-medium"
                                        >
                                            {t('portal.login.forgotPassword')}
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full h-11 text-base font-semibold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-primary/20"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            {t('common.loading')}
                                        </>
                                    ) : (
                                        t('portal.login.signIn')
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4 pt-0">
                            <div className="relative w-full">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-card px-2 text-muted-foreground">{t('common.or')}</span>
                                </div>
                            </div>
                            <p className="text-sm text-center text-muted-foreground">
                                {t('portal.login.noAccount')}{' '}
                                <Link href="/portal/register" className="text-primary font-semibold hover:underline">
                                    {t('portal.register.title')}
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
