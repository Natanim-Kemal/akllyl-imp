"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        service: "Portrait",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            // Could reset form here
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center container-custom text-center">
                <h1 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">Booking Request Received!</h1>
                <p className="text-xl text-stone-600 mb-8 max-w-md">
                    Thank you, {formData.name}. We'll be in touch shortly to confirm your {formData.service} session details.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline">Book Another Session</Button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 container-custom min-h-screen">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100">
                <h1 className="text-4xl font-bold mb-2">Book Your Session</h1>
                <p className="text-stone-500 mb-8">Tell us about your vision, and let's create something beautiful together.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">Full Name</label>
                        <input
                            id="name"
                            required
                            type="text"
                            className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">Email Address</label>
                        <input
                            id="email"
                            required
                            type="email"
                            className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-bold uppercase tracking-wide">Preferred Date</label>
                            <input
                                id="date"
                                required
                                type="date"
                                className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                value={formData.date}
                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-bold uppercase tracking-wide">Service Type</label>
                            <select
                                id="service"
                                className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] appearance-none"
                                value={formData.service}
                                onChange={e => setFormData({ ...formData, service: e.target.value })}
                            >
                                <option>Portrait Session</option>
                                <option>Wedding Photography</option>
                                <option>Event Coverage</option>
                                <option>Commercial Shoot</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">Any specific details?</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-4 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="brand"
                        className="w-full h-14 text-lg font-bold mt-4"
                        disabled={status === "submitting"}
                    >
                        {status === "submitting" ? "Sending Request..." : "Confirm Booking Request"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
