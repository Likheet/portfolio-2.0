"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

type FormData = {
    name: string;
    email: string;
    message: string;
    botcheck: boolean;
};

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Honeypot check
        if (data.botcheck) {
            // If the hidden checkbox is checked, it's likely a bot.
            // We can just pretend it succeeded or return.
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    subject: `New Contact Form Message from ${data.name}`,
                    from_name: data.name,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    botcheck: false, // Explicitly send false to Web3Forms
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                reset();
            } else {
                setError(result.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="container py-section relative z-10" id="contact">
            <SectionTitle title="Get in Touch" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
                <div className="space-y-8 lg:sticky lg:top-32">
                    <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-none tracking-tight">
                        Say <span className="text-portfolio-red">Hello</span>
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl font-roboto-flex font-light leading-relaxed">
                        Whether you have a project in mind, a question to ask, or just want to say hi — I&apos;m always open to new ideas and connections.
                    </p>
                    
                    <div className="pt-8 sm:pt-10 space-y-3 sm:space-y-4">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">Or email me directly</p>
                        <a href="mailto:likheet.s@gmail.com" className="block text-2xl sm:text-3xl md:text-4xl font-bodoni italic hover:text-portfolio-red transition-colors duration-300 break-words">
                            likheet.s@gmail.com
                        </a>
                    </div>
                </div>

                <div className="pt-8 lg:pt-0">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-24 border-y border-border/30">
                            <div className="w-24 h-24 bg-portfolio-red/10 rounded-full flex items-center justify-center text-portfolio-red text-5xl animate-in zoom-in duration-500">
                                ✓
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-anton uppercase">Message Sent</h4>
                                <p className="text-xl text-muted-foreground font-light">
                                    Thanks for reaching out. I&apos;ll get back to you soon.
                                </p>
                            </div>
                            <Button 
                                as="button" 
                                onClick={() => setIsSuccess(false)}
                                variant="link"
                                className="text-portfolio-red hover:text-white"
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 sm:space-y-12">
                            <div className="space-y-10 sm:space-y-12">
                                <div className="group relative">
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        id="name"
                                        type="text"
                                        suppressHydrationWarning
                                        className={cn(
                                            "w-full bg-transparent border-b border-border py-4 text-xl sm:text-2xl md:text-3xl font-light focus:outline-none focus:border-portfolio-red transition-colors rounded-none placeholder:text-muted-foreground/30",
                                            errors.name && "border-destructive"
                                        )}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && (
                                        <span className="absolute -bottom-6 left-0 text-sm text-destructive uppercase tracking-wider">{errors.name.message}</span>
                                    )}
                                </div>

                                <div className="group relative">
                                    <input
                                        {...register('email', { 
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        id="email"
                                        type="email"
                                        suppressHydrationWarning
                                        className={cn(
                                            "w-full bg-transparent border-b border-border py-4 text-xl sm:text-2xl md:text-3xl font-light focus:outline-none focus:border-portfolio-red transition-colors rounded-none placeholder:text-muted-foreground/30",
                                            errors.email && "border-destructive"
                                        )}
                                        placeholder="Your Email"
                                    />
                                    {errors.email && (
                                        <span className="absolute -bottom-6 left-0 text-sm text-destructive uppercase tracking-wider">{errors.email.message}</span>
                                    )}
                                </div>

                                <div className="group relative">
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        id="message"
                                        rows={4}
                                        suppressHydrationWarning
                                        className={cn(
                                            "w-full bg-transparent border-b border-border py-4 text-xl sm:text-2xl md:text-3xl font-light focus:outline-none focus:border-portfolio-red transition-colors resize-none rounded-none placeholder:text-muted-foreground/30",
                                            errors.message && "border-destructive"
                                        )}
                                        placeholder="Your Message..."
                                    />
                                    {errors.message && (
                                        <span className="absolute -bottom-6 left-0 text-sm text-destructive uppercase tracking-wider">{errors.message.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                {/* Honeypot field - hidden from users but visible to bots */}
                                <input 
                                    type="checkbox" 
                                    id="botcheck"
                                    {...register("botcheck")}
                                    className="hidden" 
                                    style={{ display: 'none' }}
                                />

                                {error && (
                                    <p className="text-destructive text-sm uppercase tracking-wider">{error}</p>
                                )}

                                <Button
                                    as="button"
                                    type="submit"
                                    disabled={isSubmitting}
                                    loading={isSubmitting}
                                    className="w-full md:w-auto bg-portfolio-red hover:bg-portfolio-red/90 text-white border-none group-hover:text-black"
                                    variant="no-color"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
