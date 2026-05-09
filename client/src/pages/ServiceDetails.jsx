import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '../data/servicesData';
import { Star, CheckCircle, ArrowRight, Phone, Calendar, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find((item) => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${service?.title || 'Service'} - Premium Interiors`;
    }, [slug, service]);

    if (!service) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center px-6">
                    <div className="text-8xl mb-6">🔍</div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Service Not Found</h1>
                    <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#c9a46c] hover:bg-[#b88d4d] text-black px-8 py-3 rounded-none transition-all"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white overflow-hidden">
            <div>
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-[#c9a46c]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#c9a46c] rounded-full animate-pulse"></span>
                            <span className="text-[#c9a46c] text-sm tracking-wide">Premium Service</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6">
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            {service.subtitle}
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="group bg-[#c9a46c] hover:bg-[#b88d4d] text-black px-8 py-4 flex items-center gap-2 transition-all duration-300">
                                Explore Designs
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border border-white/30 hover:border-[#c9a46c] px-8 py-4 flex items-center gap-2 transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a46c] text-sm tracking-[4px] uppercase">What Makes Us Different</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4">Premium Features</h2>
                        <div className="w-20 h-[2px] bg-[#c9a46c] mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden border border-white/10 p-8 hover:border-[#c9a46c] transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a46c]/0 to-[#c9a46c]/0 group-hover:from-[#c9a46c]/5 group-hover:to-transparent transition-all duration-500"></div>
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a46c] text-sm tracking-[4px] uppercase">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4">Design Gallery</h2>
                        <div className="w-20 h-[2px] bg-[#c9a46c] mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.gallery.map((img, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
                            >
                                <img
                                    src={img}
                                    alt={`${service.title} design ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <button className="bg-[#c9a46c] text-black px-6 py-2 text-sm">View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a46c] text-sm tracking-[4px] uppercase">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4">Excellence Guaranteed</h2>
                        <div className="w-20 h-[2px] bg-[#c9a46c] mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.whyChoose.length > 0 ? service.whyChoose.map((item, idx) => (
                            <div key={idx} className="text-center p-6 border border-white/10 hover:border-[#c9a46c] transition-all duration-300">
                                <CheckCircle className="w-12 h-12 text-[#c9a46c] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        )) : (
                            <>
                                <div className="text-center p-6 border border-white/10"><CheckCircle className="w-12 h-12 text-[#c9a46c] mx-auto mb-4" /><h3 className="text-xl">Quality Assured</h3><p className="text-gray-400 text-sm">Premium materials only</p></div>
                                <div className="text-center p-6 border border-white/10"><CheckCircle className="w-12 h-12 text-[#c9a46c] mx-auto mb-4" /><h3 className="text-xl">Expert Team</h3><p className="text-gray-400 text-sm">Skilled professionals</p></div>
                                <div className="text-center p-6 border border-white/10"><CheckCircle className="w-12 h-12 text-[#c9a46c] mx-auto mb-4" /><h3 className="text-xl">On Time Delivery</h3><p className="text-gray-400 text-sm">Commitment to deadlines</p></div>
                                <div className="text-center p-6 border border-white/10"><CheckCircle className="w-12 h-12 text-[#c9a46c] mx-auto mb-4" /><h3 className="text-xl">Best Support</h3><p className="text-gray-400 text-sm">24/7 customer care</p></div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a46c] text-sm tracking-[4px] uppercase">How We Work</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4">Simple Process</h2>
                        <div className="w-20 h-[2px] bg-[#c9a46c] mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="text-center relative">
                                <div className="w-16 h-16 rounded-full border-2 border-[#c9a46c] flex items-center justify-center mx-auto mb-4 bg-black">
                                    <span className="text-2xl font-serif text-[#c9a46c]">{idx + 1}</span>
                                </div>
                                <p className="text-sm font-medium">{step}</p>
                                {idx < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#c9a46c]/50 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {service.faq.length > 0 && (
                <section className="py-24 border-b border-white/10">
                    <div className="max-w-4xl mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <span className="text-[#c9a46c] text-sm tracking-[4px] uppercase">FAQ</span>
                            <h2 className="text-4xl md:text-5xl font-serif mt-4">Frequently Asked Questions</h2>
                            <div className="w-20 h-[2px] bg-[#c9a46c] mx-auto mt-6"></div>
                        </div>

                        <div className="space-y-4">
                            {service.faq.map((item, idx) => (
                                <details key={idx} className="group border border-white/10 p-6 open:border-[#c9a46c] transition-all">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <span className="font-semibold text-lg">{item.q}</span>
                                        <span className="text-[#c9a46c] group-open:rotate-45 transition-transform text-2xl">+</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4 pt-4 border-t border-white/10">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <img
                        src={service.bannerImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Let's create something beautiful together. Get a free consultation and quote today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="bg-[#c9a46c] hover:bg-[#b88d4d] text-black px-10 py-4 flex items-center gap-2 transition-all duration-300">
                            <Calendar className="w-5 h-5" />
                            Free Consultation
                        </button>
                        <button className="border border-white/30 hover:border-[#c9a46c] px-10 py-4 transition-all duration-300">
                            Call Now: +91 98765 43210
                        </button>
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default ServiceDetails;