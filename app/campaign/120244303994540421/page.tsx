"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { User, Phone, Mail, ArrowRight, Loader2, CheckCircle2, ClipboardList, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
    phone: z.string().min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل" }),
    email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }).optional().or(z.literal("")),
    custom_appraisal_property_type: z.string({ required_error: "يرجى اختيار نوع الخدمة" }).min(1, { message: "يرجى اختيار نوع الخدمة" }),
});

export default function CampaignPage() {
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            custom_appraisal_property_type: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {

            const response = await fetch('/api/appraisal/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: values.name,
                    mobile_no: values.phone,
                    email_id: values.email || undefined,
                    appraisal: 1,
                    campaign_name: "120244303994540421",
                    source2: "فيسبوك",
                    custom_appraisal_property_type: values.custom_appraisal_property_type,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit');
            }

            setIsSubmitted(true);
            toast.success("تم تسجيل بياناتك بنجاح!");

            // Redirect to portal after a short delay to show success state
            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (error) {

            const message = error instanceof Error ? error.message : "حدث خطأ ما، يرجى المحاولة مرة أخرى.";
            toast.error(message);
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#0a0a0a]" dir="rtl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    // src="/appraisal/kfd.png"
                    src="/appraisal/kfd.png"
                    alt="Campaign Background"
                    fill
                    className="object-cover opacity-40 scale-100 animate-pulse-slow"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-appraisal/10 to-black/80" />
            </div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-lg z-10"
            >
                <Card className="border-none bg-zinc-900/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10">
                    <CardHeader className="space-y-2 text-center pb-8 pt-10 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-appraisal rounded-b-full shadow-[0_4px_20px_var(--appraisal)]" />

                        <div className="flex justify-center mb-8">

                            <Image
                                src="/white-appraisal-logo.png"
                                alt="Amaken"
                                width={200}
                                height={60}
                                className="h-16 w-auto object-contain"
                                priority
                            />

                        </div>

                        <CardTitle className="text-2xl font-bold font-cairo text-white tracking-tight">
                            سجل اهتمامك الآن
                        </CardTitle>
                        <CardDescription className="text-zinc-400 font-tajawal text-lg leading-relaxed max-w-sm mx-auto">
                            للحصول على تقييم عقاري معتمد
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="px-8 pb-8">
                        {!isSubmitted ? (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-zinc-300 font-tajawal text-sm flex items-center gap-2 pr-1">
                                                    <User className="size-4 text-appraisal" /> الاسم بالكامل <span className="text-red-500">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="الاسم بالكامل"
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white h-12 focus:border-appraisal/50 focus:ring-appraisal/20 transition-all font-tajawal placeholder:text-zinc-600"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400 font-tajawal text-xs mt-1" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-zinc-300 font-tajawal text-sm flex items-center gap-2 pr-1">
                                                    <Phone className="size-4 text-appraisal" /> رقم الجوال <span className="text-red-500">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="05xxxxxxxx"
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white h-12 focus:border-appraisal/50 focus:ring-appraisal/20 transition-all font-tajawal placeholder:text-zinc-600"
                                                        dir="ltr"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400 font-tajawal text-xs mt-1" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-zinc-300 font-tajawal text-sm flex items-center gap-2 pr-1">
                                                    <Mail className="size-4 text-appraisal" /> البريد الإلكتروني
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="example@mail.com"
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white h-12 focus:border-appraisal/50 focus:ring-appraisal/20 transition-all font-tajawal placeholder:text-zinc-600"
                                                        dir="ltr"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400 font-tajawal text-xs mt-1" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="custom_appraisal_property_type"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-zinc-300 font-tajawal text-sm flex items-center gap-2 pr-1">
                                                    <ClipboardList className="size-4 text-appraisal" /> نوع العقار <span className="text-red-500">*</span>
                                                </FormLabel>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-appraisal/50 focus:ring-appraisal/20 transition-all font-tajawal">
                                                            <SelectValue placeholder="اختر نوع العقار" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-zinc-900 border-white/10 text-white font-tajawal">
                                                        <SelectItem value="أرض">أرض</SelectItem>
                                                        <SelectItem value="شقة">شقة</SelectItem>
                                                        <SelectItem value="فيلا">فيلا</SelectItem>
                                                        <SelectItem value="اخرى">اخرى</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="text-red-400 font-tajawal text-xs mt-1" />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-lg font-bold font-cairo bg-white text-black hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-4 shadow-xl shadow-white/5"
                                        disabled={form.formState.isSubmitting}
                                    >
                                        {form.formState.isSubmitting ? (
                                            <span className="flex items-center gap-3">
                                                <Loader2 className="size-5 animate-spin" /> جاري الإرسال...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                تسجيل البيانات <ArrowRight className="size-5 mr-1 rotate-180" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="bg-green-500/10 p-5 rounded-full mb-6">
                                    <CheckCircle2 className="size-16 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold font-cairo text-white mb-3">تم التسجيل بنجاح!</h3>
                                <p className="text-zinc-400 font-tajawal mb-8">نشكرك على اهتمامك، سيتم توجيهك إلى البوابة خلال لحظات...</p>
                                <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-appraisal"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </CardContent>

                    <CardFooter className="pb-10 pt-4 flex flex-col gap-4">
                        <p className="text-[18px] text-zinc-300 text-center uppercase tracking-widest pt-2">

                            للاستفسارت الرجاء التواصل على:
                        </p>
                        <div className="flex gap-4 w-full px-4">
                            <Button
                                variant="outline"
                                className="flex-1 bg-[#25D366]/10 border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all h-12 gap-2 font-tajawal group"
                                asChild
                            >
                                <Link href="https://wa.me/966920003401" target="_blank">
                                    <MessageCircle className="size-5 transition-transform group-hover:scale-110" />
                                    <span>واتساب</span>
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white hover:text-black transition-all h-12 gap-2 font-tajawal group"
                                asChild
                            >
                                <a href="tel:+966920003401">
                                    <Phone className="size-5 transition-transform group-hover:scale-110" />
                                    <span>اتصال</span>
                                </a>
                            </Button>
                        </div>
                        <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest pt-2">
                            Amaken Valuation Company &copy; 2026
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>


            {/* Aesthetic Background Elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-appraisal/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-appraisal/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
}
