import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Materials = () => {
    const [menuOpen, setMenuOpen] = useState({});

    const toggleMenu = (index) => {
        setMenuOpen(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const menuItems = [
        { id: '1', title: '1mm Acrylic Panels', submenu: [{ id: '1', title: 'Acrylic Panels : 21 Colours' }] },
        { id: '2', title: '2mm Acrylic', submenu: [{ id: '2', title: 'Sheen : 6 Colours' }] },
        { id: '3', title: '2mm SOFT MATT', submenu: [{ id: '3', title: 'Acryl Glass : 6 Colours' }] },
        { id: '4', title: 'Glaks Shades (High Gloss 3mm)', submenu: [{ id: '4', title: 'Glaks Shades (High Gloss 2mm) : 15 Colours' }] },
        { id: '5', title: 'Glaks Shades (Matt)', submenu: [{ id: '5', title: 'Glaks Shades (Matt) : 16 Colours' }] },
        { id: '6', title: 'Fenix NTM Shades', submenu: [{ id: '6', title: 'Fenix NTM Shades : 13 Colours' }] },
        { id: '7', title: 'Fenix Bloom Shades', submenu: [{ id: '7', title: 'Fenix Bloom Shades : 10 Colours' }] },
        { id: '8', title: 'Super Matt Shades (Techno Matt)', submenu: [{ id: '8', title: 'Zenith Shades (Techno Matt) : 27 Colours' }] },
        { id: '9', title: 'Super Matt Shades (Soft Matt)', submenu: [{ id: '9', title: 'Zenith Shades (Soft Matt) : 17 Colours' }] },
        { id: '10', title: 'PU Lacquer Shades', submenu: [{ id: '10', title: 'PU Lacquer Shades : 41 Colours' }] },
        { id: '11', title: 'Ultra Italia Shades', submenu: [{ id: '11', title: 'Ultra Italia Shades : 5 Colours' }] },
        { id: '12', title: 'Velvet Shades (Soft Matt)', submenu: [{ id: '12', title: 'Velvet Shades (Soft Matt) : 12 Colours' }] },
        { id: '13', title: 'Synchron Prelam', submenu: [{ id: '13', title: 'Synchron Prelam : 12 Colours' }] },
        { id: '16', title: 'Membrane Shades', submenu: [{ id: '16', title: 'Membrane Shades : 50 Colours' }] },
        { id: '17', title: 'LEATHER ALL COLORS', submenu: [{ id: '17', title: 'Leather : 50 Colours' }] },
        { id: '18', title: 'ACRY ULTRA MATT', submenu: [{ id: '18', title: 'Fenix NTM Shades : 13 Colours' }] },
        { id: '19', title: 'CLEAN TOUCH', submenu: [{ id: '19', title: 'Fenix Bloom Shades : 10 Colours' }] },
        { id: '20', title: 'CERAMIC LAMINATE', submenu: [{ id: '20', title: 'Zenith Shades (Techno Matt) : 27 Colours' }] },
        { id: '21', title: 'VENEER LAMINATE', submenu: [{ id: '21', title: 'Zenith Shades (Soft Matt) : 17 Colours' }] },
        { id: '22', title: 'STONELAM', submenu: [{ id: '22', title: 'Stonelam : 17 Colours' }] },
        { id: '23', title: 'LAMINATE SHADES (SOLID)', submenu: [{ id: '23', title: 'Acrylic Panels : 21 Colours' }] },
        { id: '24', title: 'Laminate Shades (Textile)', submenu: [{ id: '24', title: 'Sheen : 6 Colours' }] },
        { id: '25', title: 'Laminate Shades (Trend / Woodgrain)', submenu: [{ id: '25', title: 'Acryl Glass : 6 Colours' }] }
    ];

    const ColorCard = ({ bgColor, code, name, imageSrc }) => (
        <div className="group flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            {imageSrc ? (
                <img src={imageSrc} alt={name} className="w-full h-28 object-cover rounded-lg mb-3 shadow-md" />
            ) : (
                <div className="w-full h-28 rounded-lg mb-3 shadow-md transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: bgColor }} />
            )}
            {code && <p className="text-xs text-gray-500 font-medium mt-1">{code}</p>}
            <p className="text-sm font-semibold text-gray-800 text-center mt-1 leading-tight">{name}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="">
                <Navbar />
            </div>

            <div className="container py-8 ">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Menu */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-20 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="bg-gray-800 px-5 py-3">
                                <h2 className="text-white font-semibold text-lg">Categories</h2>
                            </div>
                            <div className="max-h-[75vh] overflow-y-auto no-scrollbar">
                                {menuItems.map((item, idx) => (
                                    <div key={idx} className="border-b border-gray-100 last:border-0">
                                        <button
                                            onClick={() => toggleMenu(idx)}
                                            className="w-full text-left px-5 py-3 font-medium text-gray-700 hover:bg-red-50 transition-all duration-200 flex justify-between items-center"
                                        >
                                            <span className="text-sm">{item.title}</span>
                                            <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${menuOpen[idx] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen[idx] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-5 pr-3 pb-3">
                                                {item.submenu.map((sub, subIdx) => (
                                                    <button key={subIdx} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-xs text-gray-500 py-1.5 px-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition-colors">
                                                        {sub.title}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4 space-y-6 ">
                        {/* Section 1 */}
                        <div id="1" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">1mm Acrylic Panels</h2>
                                <p className="text-gray-300 text-sm mt-1">Acrylic panels are lightweight, durable, and highly versatile sheets made, exceptional clarity and smooth finish, these panels offer excellent transparency, easy maintenance, and long-lasting performance. Scratch resistant, available in various colours, thicknesses, and finishes. It gives your furniture Aesthetic and Elegant Look.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#f5faf4" code="LD101" name="SUPER WHITE GLOSS/MATT" />
                                    <ColorCard bgColor="#b8a594" code="LD114" name="CAPPUCCINO GLOSS/MATT" />
                                    <ColorCard bgColor="#8d877b" code="LD104" name="SLATE GREY GLOSS/MATT" />
                                    <ColorCard bgColor="#5c5451" code="LD105" name="NEUTRAL GREY GLOSS/MATT" />
                                    <ColorCard bgColor="#4c3f36" code="LD106" name="ASH GREY GLOSS/MATT" />
                                    <ColorCard bgColor="#181415" code="LD115" name="MIDNIGHT BLACK GLOSS/MATT" />
                                    <ColorCard bgColor="#88150e" code="LD118" name="CRIMSON RED GLOSS/MATT" />
                                    <ColorCard bgColor="#546225" code="LD119" name="PICKLE GREEN GLOSS/MATT" />
                                    <ColorCard bgColor="#14433b" code="LD120" name="SACRAMENTO GLOSS/MATT" />
                                    <ColorCard bgColor="#95b697" code="LD130" name="PASTEL MINT GLOSS/MATT" />
                                    <ColorCard bgColor="#ede6d4" code="LD103" name="BUTTER MILK GLOSS/MATT" />
                                    <ColorCard bgColor="#7a2d19" code="LD122" name="MARMALADE GLOSS/MATT" />
                                    <ColorCard bgColor="#7c5e54" code="LD133" name="CIDER SPICE GLOSS/MATT" />
                                    <ColorCard bgColor="#b9a985" code="LD131" name="PASTEL BROWN GLOSS/MATT" />
                                    <ColorCard bgColor="#264861" code="LD113" name="PRUSSIAN BLUE GLOSS/MATT" />
                                    <ColorCard bgColor="#afb6a6" code="LD123" name="TEA GREEN GLOSS/MATT" />
                                    <ColorCard bgColor="#2f3f4c" code="LD129" name="AEGEAN BLUE GLOSS/MATT" />
                                    <ColorCard bgColor="#1c517b" code="LD132" name="TEAL GLOSS/MATT" />
                                    <ColorCard bgColor="#dad1b4" code="LD506" name="FROZEN DEW GLOSS/MATT" />
                                    <ColorCard bgColor="#bc9e6c" code="LD136" name="DESERT SAND GLOSS/MATT" />
                                    <ColorCard bgColor="#8e958d" code="LD136" name="DESERT SAND GLOSS/MATT" />
                                    <ColorCard bgColor="#817d7a" code="LD134" name="LAVA GLOSS/MATT" />
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="2" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">2mm Acrylic</h2>
                                <p className="text-gray-300 text-sm mt-1">A lightweight, high durable Acrylic sheet with a glossy finish, offering high clarity and UV resistance. Ideal for signage, décor, and displays due to its sleek look and easy fabrication.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#979080" code="SH1071" name="SMOKE GREY" />
                                    <ColorCard bgColor="#5d5553" code="SH1061" name="DOVE GREY" />
                                    <ColorCard bgColor="#c3e8d7" code="SH1051" name="SEA GREEN" />
                                    <ColorCard bgColor="#ffffff" code="SH1002" name="WARM WHITE" />
                                    <ColorCard bgColor="#dbcdb2" code="SH1008" name="IRISH BEIGE" />
                                    <ColorCard bgColor="#f5e9d9" code="SH1006" name="IVORY" />
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="3" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">2mm SOFT MATT</h2>
                                <p className="text-gray-300 text-sm mt-1">Crafted from premium, scratch-resistant European acrylic sheets, Acryl Glass panels mimic the look and depth of real glass. This co-extruded material blends the elegant appearance of glass with the lightweight, durable, and easy-to-process benefits of acrylic.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#ffffff" code="SM1002" name="WARM WHITE" />
                                    <ColorCard bgColor="#f5e9d9" code="SM1006" name="IVORY" />
                                    <ColorCard bgColor="#dbcdb2" code="SM1008" name="IRISH BEIGE" />
                                    <ColorCard bgColor="#c3e8d7" code="SM1051" name="SEA GREEN" />
                                    <ColorCard bgColor="#5d5553" code="SM1061" name="DOVE GREY" />
                                    <ColorCard bgColor="#979080" code="SM1071" name="SMOKE GREY" />
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="4" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Glaks Shades (High Gloss 3mm)</h2>
                                <p className="text-gray-300 text-sm mt-1">Available in anti-fingerprint gloss and matte finishes, Glaks is scratch, chemical, and temperature resistant. Unbreakable and much lighter than glass, it offers both durability and easy maintenance.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#c4b4a7" code="HG021" name="TORTORA" />
                                    <ColorCard bgColor="#d0d0d0" code="HG032" name="BIANCO" />
                                    <ColorCard bgColor="#c96e59" code="HG039" name="ROSSO MATTONE" />
                                    <ColorCard bgColor="#91897e" code="HG055" name="CAMMELLO" />
                                    <ColorCard bgColor="#91897e" code="HG060" name="GRIGIO SASSO" />
                                    <ColorCard bgColor="#7c7764" code="HG064" name="VERDE MUSCHIO" />
                                    <ColorCard bgColor="#2f2b2c" code="HG067" name="GRIGIO REAL" />
                                    <ColorCard bgColor="#4a6167" code="HG089" name="BLU LAGUNA" />
                                    <ColorCard bgColor="#655244" code="HG094" name="FANGO" />
                                    <ColorCard bgColor="#9e7b65" code="HG173" name="OTTONE CHAIRO" />
                                    <ColorCard bgColor="#7f5c48" code="HG174" name="RAME" />
                                    <ColorCard bgColor="#4f4840" code="HG177" name="ARGENTO" />
                                    <ColorCard bgColor="#2e425b" code="HG200" name="BLU MARINO" />
                                    <ColorCard bgColor="#303538" code="HG201" name="BLU BALTICO" />
                                    <ColorCard bgColor="#30382b" code="HG202" name="VERDE TROPICALE" />
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="5" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Glaks Shades (Matt)</h2>
                                <p className="text-gray-300 text-sm mt-1">Glassica offers anti-fingerprint gloss and matte finishes, with resistance to scratches, chemicals, and heat. It's unbreakable, lightweight, and easy to clean.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#c4b4a7" code="GM021" name="TORTORA" />
                                    <ColorCard bgColor="#d0d0d0" code="GM032" name="BIANCO" />
                                    <ColorCard bgColor="#c96e59" code="GM039" name="ROSSO MATTONE" />
                                    <ColorCard bgColor="#91897e" code="GM055" name="CAMMELLO" />
                                    <ColorCard bgColor="#91897e" code="GM060" name="GRIGIO SASSO" />
                                    <ColorCard bgColor="#7c7764" code="GM064" name="VERDE MUSCHIO" />
                                    <ColorCard bgColor="#2f2b2c" code="GM067" name="GRIGIO REALE" />
                                    <ColorCard bgColor="#4a6167" code="GM089" name="BLU LAGUNA" />
                                    <ColorCard bgColor="#655244" code="GM094" name="FANGO" />
                                    <ColorCard bgColor="#807875" code="GM119" name="GRIGIO SINGAPORE" />
                                    <ColorCard bgColor="#9e7b65" code="GM173" name="OTTONE CHAIRO" />
                                    <ColorCard bgColor="#7f5c48" code="GM174" name="RAME" />
                                    <ColorCard bgColor="#4f4840" code="GM177" name="ARGENT" />
                                    <ColorCard bgColor="#2e425b" code="GM200" name="BLU MARINO" />
                                    <ColorCard bgColor="#303538" code="GM201" name="BLU BALTICO" />
                                    <ColorCard bgColor="#303538" code="GM202" name="VERDE TROPICALE" />
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="6" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Fenix NTM Shades</h2>
                                <p className="text-gray-300 text-sm mt-1">FENIX is an advanced surface made with cellulose, innovative resins, and nanotech. It features a soft-touch matte finish, resists fingerprints, and allows thermal healing of micro-scratches.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#ffffff" code="FX0032" name="BIANCO KOS" />
                                    <ColorCard bgColor="#908071" code="FX0717" name="CASTORO OTTAWA" />
                                    <ColorCard bgColor="#79716e" code="FX0718" name="GRIGIO LONDRA" />
                                    <ColorCard bgColor="#d4c1a1" code="FX0719" name="BEIGE LUXOR" />
                                    <ColorCard bgColor="#ab988a" code="FX0748" name="BEIGE ARIZONA" />
                                    <ColorCard bgColor="#c4c4c4" code="FX0725" name="GRIGIO EFESO" />
                                    <ColorCard bgColor="#50535a" code="FX0724" name="GRIGIO BROMO" />
                                    <ColorCard bgColor="#59695f" code="FX0750" name="VERDE COMODORO" />
                                    <ColorCard bgColor="#2a1416" code="FX0749" name="CACAO ORINOCO" />
                                    <ColorCard bgColor="#928e8b" code="FX0752" name="GRIGIO ANTRIM" />
                                    <ColorCard bgColor="#928e8b" code="FX0754" name="BLU FES" />
                                    <ColorCard bgColor="#6b2e35" code="FX0751" name="ROSSO JAIPUR" />
                                    <ColorCard bgColor="#1d1d1d" code="FX0720" name="NERO INGO" />
                                </div>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id="7" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Fenix Bloom Shades</h2>
                                <p className="text-gray-300 text-sm mt-1">FENIX is a smart material with a soft-touch matte finish, anti-fingerprint properties, and thermal healing of micro-scratches.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#7b4845" code="0770" name="ROSSO ASKJA" />
                                    <ColorCard bgColor="#7b4845" code="0771" name="AZZURRO NAXOS" />
                                    <ColorCard bgColor="#7b4845" code="0772" name="GIALLO KASHMIR" />
                                    <ColorCard bgColor="#7b4845" code="0773" name="VERDE BRAC" />
                                    <ColorCard bgColor="#a84122" code="0789" name="ROSSO NAMIB" />
                                    <ColorCard bgColor="#362633" code="0790" name="VIOLA ORISAA" />
                                    <ColorCard bgColor="#362633" code="0791" name="GIALLO EVORA" />
                                    <ColorCard bgColor="#362633" code="0792" name="BLU SHABA" />
                                    <ColorCard bgColor="#403836" code="0793" name="GRIGIO ARAGONA" />
                                    <ColorCard bgColor="#868d85" code="0794" name="VERDE KITAMI" />
                                </div>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id="8" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Super Matt Shades (Techno Matt)</h2>
                                <p className="text-gray-300 text-sm mt-1">Next-gen matte surfaces with Electron Beam Technology, offering soft touch, scratch resistance, and anti-fingerprint properties for premium furniture.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#fdf5f3" code="TM 001" name="BIANCO BAUHAUS" />
                                    <ColorCard bgColor="#cab7a9" code="TM 002" name="BEIGE TUSCON" />
                                    <ColorCard bgColor="#ad978a" code="TM 003" name="BEIGE TAUPE" />
                                    <ColorCard bgColor="#9f8c7e" code="TM 004" name="BEIGE COSMIC" />
                                    <ColorCard bgColor="#ad978a" code="TM 005" name="CACAO DAVI" />
                                    <ColorCard bgColor="#bdb5b2" code="TM 006" name="GRIGIO CUMULUS" />
                                    <ColorCard bgColor="#695753" code="TM 007" name="GRIGIO NARDO" />
                                    <ColorCard bgColor="#695753" code="TM 008" name="GRIGIO TELESTO" />
                                    <ColorCard bgColor="#8f7a77" code="TM 009" name="GRIGIO OMBRA" />
                                    <ColorCard bgColor="#3c3135" code="TM 010" name="GRIGIO ANTHRACITE" />
                                    <ColorCard bgColor="#51837a" code="TM 011" name="VERDE FRESCO" />
                                    <ColorCard bgColor="#292d2c" code="TM 012" name="VERDE ESMERALDA" />
                                    <ColorCard bgColor="#fcc453" code="TM 013" name="GIALLO NAPOLI" />
                                    <ColorCard bgColor="#8c7154" code="TM 022" name="SABBIA" />
                                    <ColorCard bgColor="#5b2a1b" code="TM 023" name="ROSSO VENEZIANO" />
                                    <ColorCard bgColor="#5b2a1b" code="TM 024" name="VERDE COMO" />
                                    <ColorCard bgColor="#881012" code="TM 015" name="ROSSO POMPEI" />
                                    <ColorCard bgColor="#881012" code="TM 014" name="ROSSO TIZIANO" />
                                    <ColorCard bgColor="#2b3036" code="TM 025" name="BLU SQUALO" />
                                    <ColorCard bgColor="#a59586" code="TM 026" name="BEIGE ATACAMA" />
                                    <ColorCard bgColor="#88807d" code="TM 027" name="GRIGIO SIENE" />
                                    <ColorCard bgColor="#8B0000" code="TM 028" name="ROSSO MARRAKESH" />
                                    <ColorCard bgColor="#17173d" code="TM 021" name="BLU NOTTE" />
                                    <ColorCard bgColor="#20171a" code="TM 018" name="NERO INTENSO" />
                                    <ColorCard bgColor="#627192" code="TM 017" name="AZZURO JODHPUR" />
                                    <ColorCard bgColor="#b7c0c7" code="TM 019" name="GRIGIO FERRO" />
                                    <ColorCard bgColor="#89aeb4" code="TM 020" name="VERDE MANTIS" />
                                </div>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div id="9" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Super Matt Shades (Soft Matt)</h2>
                                <p className="text-gray-300 text-sm mt-1">Next-gen low-reflective matte surfaces with Electron Beam Curing, offering micro-scratch resistance, soft touch, anti-stain, and anti-fingerprint properties—available in a range of prints, designs, and finishes for standout furniture.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/1.png" code="048" name="PLISSE BRONZO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/2.png" code="047" name="PLISSE ORO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/3.png" code="041" name="MARQUIANA" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/4.png" code="046" name="SIAM BRONZO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/5.png" code="045" name="SIAM ORO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/6.png" code="042" name="NERO CARRARA" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/7.png" code="040" name="GRIS CARRARA" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/8.png" code="039" name="KINTSUGI" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/9.png" code="038" name="MARMO ORO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/10.png" code="037" name="MARMO CALACATTA" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/11.png" code="036" name="CORTON TOCCO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/12.png" code="035" name="PELTRO TOCCO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/13.png" code="033" name="SIAM LAVA" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/14.png" code="032" name="SIAM GRAFITTE" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/15.png" code="031" name="SIAM BEIGE" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/16.png" code="044" name="RETTA SCURO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/17.png" code="043" name="RETTA ORO" />
                                    <ColorCard imageSrc="./js/Zenith_Shades(Soft Matt)/18.png" code="044" name="RETTA" />
                                </div>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div id="10" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">PU Lacquer Shades</h2>
                                <p className="text-gray-300 text-sm mt-1">Available in a wide range of colors, featuring MDF or Marine Ply boards coated with high-quality polyester or polyurethane lacquer, offered in matte, gloss, or metallic finishes.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#f6f3ee" code="PU 01" name="WHITE SMOKE" />
                                    <ColorCard bgColor="#eeeaeb" code="PU 02" name="SOFT PEACH" />
                                    <ColorCard bgColor="#c9c5c2" code="PU 03" name="CLOUD LAVENDER GREY" />
                                    <ColorCard bgColor="#aba3a1" code="PU 04" name="GREY OLIVE" />
                                    <ColorCard bgColor="#74706d" code="PU 05" name="DOVE GREY" />
                                    <ColorCard bgColor="#423e3b" code="PU 06" name="CHARCOAL GREY" />
                                    <ColorCard bgColor="#c9c1be" code="PU 07" name="PALE SLATE" />
                                    <ColorCard bgColor="#cbc1bf" code="PU 08" name="GREY NICKEL" />
                                    <ColorCard bgColor="#d0bdaf" code="PU 09" name="COLD TURKEY" />
                                    <ColorCard bgColor="#bb9f89" code="PU 10" name="BRONCO" />
                                    <ColorCard bgColor="#bb9f89" code="PU 12" name="DARK TAUPE" />
                                    <ColorCard bgColor="#e2ddbd" code="PU 13" name="MOON MIST" />
                                    <ColorCard bgColor="#acc19a" code="PU 14" name="FROG GREEN" />
                                    <ColorCard bgColor="#b3a576" code="PU 15" name="GREEN SMOKE" />
                                    <ColorCard bgColor="#789070" code="PU 16" name="GRANITE GREEN" />
                                    <ColorCard bgColor="#726241" code="PU 17" name="ROMAN COFFEE" />
                                    <ColorCard bgColor="#4d5f45" code="PU 18" name="MINERAL GREEN" />
                                    <ColorCard bgColor="#4d5f45" code="PU 19" name="COSMOS" />
                                    <ColorCard bgColor="#d5a49d" code="PU 20" name="PINK DAISY" />
                                    <ColorCard bgColor="#cea4a5" code="PU 21" name="RODEO DUST" />
                                    <ColorCard bgColor="#cea3ac" code="PU 22" name="PINKISH GREY" />
                                    <ColorCard bgColor="#9b5d6c" code="PU 23" name="DARK CHESTNUT" />
                                    <ColorCard bgColor="#71464f" code="PU 24" name="PURPLISH BROWN" />
                                    <ColorCard bgColor="#8fb4bd" code="PU 25" name="NEPTUNE" />
                                    <ColorCard bgColor="#8fb4bd" code="PU 26" name="MOUNTAIN MIST" />
                                    <ColorCard bgColor="#427d8f" code="PU 27" name="WEDGEWOOD" />
                                    <ColorCard bgColor="#3e526b" code="PU 28" name="BLUE JAY" />
                                    <ColorCard bgColor="#14324c" code="PU 29" name="CLOUD BURST" />
                                    <ColorCard bgColor="#14324c" code="PU 30" name="NILE BLUE" />
                                    <ColorCard bgColor="#d2e5e9" code="PU 31" name="JAGGED ICE" />
                                    <ColorCard bgColor="#628790" code="PU 32" name="STEEL GREY" />
                                    <ColorCard bgColor="#5e8d87" code="PU 33" name="VIRIDIAN GREEN" />
                                    <ColorCard bgColor="#4c7672" code="PU 34" name="MARBLE BLUE" />
                                    <ColorCard bgColor="#4c7672" code="PU 35" name="BLUE JAY" />
                                    <ColorCard bgColor="#124244" code="PU 36" name="AQUA DEEP" />
                                    <ColorCard bgColor="#d4e3de" code="PU 37" name="SURF CREST" />
                                    <ColorCard bgColor="#bacfc8" code="PU 38" name="POWDER ASH" />
                                    <ColorCard bgColor="#aecfc4" code="PU 39" name="GUM LEAF" />
                                    <ColorCard bgColor="#8ba790" code="PU 40" name="LEMON GRASS" />
                                    <ColorCard bgColor="#679082" code="PU 41" name="SLATE GREEN" />
                                    <ColorCard bgColor="#5a7562" code="PU 42" name="SPRING LEAVES" />
                                </div>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div id="11" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Ultra Italia Shades</h2>
                                <p className="text-gray-300 text-sm mt-1">Available in a wide range of colors, using MDF or Marine Ply boards coated with premium polyester or polyurethane lacquer, offered in matte, gloss, or metallic finishes.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#8e7851" code="RAL 1035" name="PEARL BEIGE" />
                                    <ColorCard bgColor="#cca94f" code="RAL 1036" name="PEARL GOLD" />
                                    <ColorCard bgColor="#898176" code="RAL 7048" name="PEARL MAUSE GREY" />
                                    <ColorCard bgColor="#a2a6a9" code="RAL 9006" name="WHITE ALUMINIUM" />
                                    <ColorCard bgColor="#878b8e" code="RAL 9023" name="PEARL DARK GREY" />
                                </div>
                            </div>
                        </div>

                        {/* Section 12 */}
                        <div id="12" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Velvet Shades (Soft Matt)</h2>
                                <p className="text-gray-300 text-sm mt-1">The surface is fully anti-glare, with an opacity level of ≤5 gloss units. Its finish features thermal healing properties, allowing light scratches to be repaired with heat, restoring the original smoothness and compactness without damage.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#fff2ec" code="VM 301" name="MOON BIANCO" />
                                    <ColorCard bgColor="#e3e3e3" code="VM 302" name="CORDO GREY" />
                                    <ColorCard bgColor="#635f5c" code="VM 303" name="SABBIA GREY" />
                                    <ColorCard bgColor="#e3e3e3" code="VM 304" name="TERRA BEIGE" />
                                    <ColorCard bgColor="#998675" code="VM 305" name="VISION CAPPUCCINO" />
                                    <ColorCard bgColor="#998675" code="VM 306" name="PEPE GREY" />
                                    <ColorCard bgColor="#d7c4b6" code="VM 307" name="FAMO GREY" />
                                    <ColorCard bgColor="#563331" code="VM 308" name="ROSSO RUBINO" />
                                    <ColorCard bgColor="#303344" code="VM 309" name="BLUE AVIO" />
                                    <ColorCard bgColor="#d59c4d" code="VM 310" name="SALVIO YELLOW" />
                                    <ColorCard bgColor="#484f48" code="VM 313" name="BASALTO OLIVE" />
                                    <ColorCard bgColor="#537866" code="VM 314" name="TIMO GREEN" />
                                </div>
                            </div>
                        </div>

                        {/* Section 13 */}
                        <div id="13" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Synchron Prelam</h2>
                                <p className="text-gray-300 text-sm mt-1">Impressions are synchronized textured plywood, offering innovative designs with the authentic feel of real wood and veneer. A curated collection designed to inspire, ideal for creating 9-foot-high wardrobe units.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/Synchron_Prelam/1.png" code="1218" name="TUSCANY TAUPE" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/2.png" code="3135" name="GRIGIO BURL" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/3.png" code="3137" name="ANTHRACITE BURL" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/4.png" code="3093" name="SIENNA OAK" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/5.png" code="3092" name="TRUE OAK" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/6.png" code="1215" name="PATINA ASH" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/7.png" code="1214" name="OAK NATURALE" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/8.png" code="1212" name="MOLTENI BRUNO" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/9.png" code="1062" name="GRIGIO OAK" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/10.png" code="1055" name="BURMEST" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/11.png" code="1054" name="NOCE WALNUT" />
                                    <ColorCard imageSrc="./js/Synchron_Prelam/12.png" code="1053" name="WHITE WALNUT" />
                                </div>
                            </div>
                        </div>

                        {/* Section 16 */}
                        <div id="16" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Membrane Shades</h2>
                                <p className="text-gray-300 text-sm mt-1">Membrane shutters combine seamless design with durability, offering smooth edges, easy maintenance, and long-lasting performance for elegant modular furniture.</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/color-img/ITALIANWALNUT.png" name="ITALIAN WALNUT" />
                                    <ColorCard imageSrc="./js/color-img/TOBACCOASHSC.png" name="TOBACCO ASH SC" />
                                    <ColorCard imageSrc="./js/color-img/MILLANOWALNUT.png" name="MILLANO WALNUT" />
                                    <ColorCard bgColor="#15120d" name="EURO WENGE" />
                                    <ColorCard imageSrc="./js/color-img/MOLDAU.png" name="MOLDAU ACACIA DARKBROWN" />
                                    <ColorCard bgColor="#110200" name="VERMONT V" />
                                    <ColorCard imageSrc="./js/color-img/image5.png" name="PECIFIC V" />
                                    <ColorCard imageSrc="./js/color-img/image6.png" name="MOLDAU ACACIA LIGHT" />
                                    <ColorCard imageSrc="./js/color-img/image7.png" name="MESSINA PC" />
                                    <ColorCard imageSrc="./js/color-img/image8.png" name="TIEPOLO PC" />
                                    <ColorCard imageSrc="./js/color-img/image9.png" name="AMATI PC" />
                                    <ColorCard imageSrc="./js/color-img/image10.png" name="MALI WENGE NATURAL" />
                                    <ColorCard imageSrc="./js/color-img/image11.png" name="MONTANA PE" />
                                    <ColorCard imageSrc="./js/color-img/image12.png" name="OAK ENDGRAIN COGNAC SYNCHRON" />
                                    <ColorCard imageSrc="./js/membrane_shades/1.png" name="AMATI PD" />
                                    <ColorCard imageSrc="./js/membrane_shades/2.png" name="OAK ENDGRAIN DELIGHT SYNCHRON" />
                                    <ColorCard bgColor="#9d9a8b" name="HG MAGNOLIA" />
                                    <ColorCard bgColor="#000c39" name="BLUE" />
                                    <ColorCard bgColor="#393a34" name="CHICAGO CONCRETE 2SC" />
                                    <ColorCard imageSrc="./js/membrane_shades/3.png" name="PECAN SNOW WHITE" />
                                    <ColorCard imageSrc="./js/membrane_shades/5.png" name="GRAN SASSO SANBEIGE CLASSIC" />
                                    <ColorCard bgColor="#333333" name="CARBON GREY PREMIER MATT" />
                                    <ColorCard bgColor="#050819" name="INDIGO BLUE PAINTLOFW PREMIER MATT" />
                                    <ColorCard bgColor="#54533f" name="LICHEN GREEN PAINTLOFW PREMIER MATT" />
                                    <ColorCard bgColor="#434c4b" name="MONUMENT GREY PAINTLOFW PREMIER MATT" />
                                    <ColorCard bgColor="#13171a" name="GRAPHITE PAINTLOFW PREMIER MATT" />
                                    <ColorCard bgColor="#474c45" name="REDGREEN PAINTLOFW PREMIER MATT" />
                                    <ColorCard bgColor="#7f7e7c" name="PEARL GREN PAINTLOFW PREMIER MEATT" />
                                    <ColorCard bgColor="#7f7e7c" name="LIGHT GREY PAINTLOFW PREMIER MEATT" />
                                    <ColorCard bgColor="#515151" name="DUST GREY PREMIER MATT" />
                                    <ColorCard bgColor="#7a756f" name="CASHMERE" />
                                    <ColorCard bgColor="#7a756f" name="STONE GREY PREMIER MATT" />
                                    <ColorCard bgColor="#323937" name="HIGHLAND GREEN PREMIER MATT" />
                                    <ColorCard bgColor="#7a756f" name="TAUPE GREY PREMIER MATT" />
                                    <ColorCard bgColor="#2f3034" name="ORIA BLUE PREMIER MATT" />
                                    <ColorCard bgColor="#1b1310" name="WENGE REALISTIC PORE" />
                                    <ColorCard bgColor="#64564d" name="MOCCA NET TREND" />
                                    <ColorCard bgColor="#847a73" name="SAND SATIN" />
                                    <ColorCard bgColor="#7a7b76" name="LIGHT GREY MODERN ASH" />
                                    <ColorCard bgColor="#9d9e99" name="PREMIUM WHITE SUEDETTE MATT" />
                                    <ColorCard bgColor="#918785" name="STONE GREY SUEDETTE MATT" />
                                    <ColorCard bgColor="#000001" name="ORCHEDIA NERA SUPER MATT" />
                                    <ColorCard bgColor="#302929" name="RIVERSTONE SUPER MATT" />
                                    <ColorCard bgColor="#670815" name="HG PEPERONCINO ROSSO" />
                                    <ColorCard bgColor="#9a9a9a" name="CALLA BIANCA SUPER MATT" />
                                    <ColorCard bgColor="#a09e9f" name="HG MARGHERITA" />
                                    <ColorCard bgColor="#8f948e" name="WHITE RECOATABLE" />
                                    <ColorCard bgColor="#9f978a" name="NOVA MAGNOLIA" />
                                    <ColorCard bgColor="#1b1d2a" name="WAVE BLUE" />
                                    <ColorCard bgColor="#959691" name="OFF WHITE" />
                                </div>
                            </div>
                        </div>

                        {/* Section 17 */}
                        <div id="17" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">LEATHER ALL COLORS</h2>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">DIMENSION : 8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#d2ccc0" code="911" name="MACADA" />
                                    <ColorCard bgColor="#a99a93" code="921" name="CAMEO" />
                                    <ColorCard bgColor="#63493c" code="927" name="CREST" />
                                    <ColorCard bgColor="#bfbab6" code="994" name="FLAN" />
                                    <ColorCard bgColor="#989793" code="996" name="SILANCE" />
                                    <ColorCard bgColor="#75706d" code="997" name="CHAPEL" />
                                </div>
                            </div>
                        </div>

                        {/* Section 18 */}
                        <div id="18" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">ACRY ULTRA MATT</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#ffffff" code="AU 001" name="" />
                                    <ColorCard bgColor="#ffffff" code="AU 002" name="" />
                                    <ColorCard bgColor="#fcf8f0" code="AU 003" name="" />
                                    <ColorCard bgColor="#ffffff" code="AU 004" name="" />
                                    <ColorCard bgColor="#ffffff" code="AU 005" name="" />
                                    <ColorCard bgColor="#fdf9f1" code="AU 006" name="" />
                                    <ColorCard bgColor="#c9e9e4" code="AU 007" name="" />
                                    <ColorCard bgColor="#b5c0bc" code="AU 008" name="" />
                                    <ColorCard bgColor="#c9e9e4" code="AU 009" name="" />
                                    <ColorCard bgColor="#b5c0bc" code="AU 0010" name="" />
                                    <ColorCard bgColor="#c6beb1" code="AU 0011" name="" />
                                    <ColorCard bgColor="#298b94" code="AU 0012" name="" />
                                    <ColorCard bgColor="#4d5d5d" code="AU 0013" name="" />
                                </div>
                            </div>
                        </div>

                        {/* Section 19 */}
                        <div id="19" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">CLEAN TOUCH</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#333333" code="CT 001" name="" />
                                    <ColorCard bgColor="#654b4a" code="CT 002" name="" />
                                    <ColorCard bgColor="#252525" code="CT 003" name="" />
                                    <ColorCard bgColor="#919191" code="CT 004" name="" />
                                    <ColorCard bgColor="#2a2a2a" code="CT 005" name="" />
                                    <ColorCard bgColor="#b7b7b7" code="CT 006" name="" />
                                    <ColorCard bgColor="#dfdfdf" code="0791" name="" />
                                    <ColorCard bgColor="#6c6c6c" code="CT 007" name="" />
                                    <ColorCard bgColor="#494949" code="CT 008" name="" />
                                    <ColorCard bgColor="#4e4e4e" code="CT 009" name="" />
                                    <ColorCard bgColor="#202020" code="CT 0010" name="" />
                                    <ColorCard bgColor="#262626" code="CT 0011" name="" />
                                </div>
                            </div>
                        </div>

                        {/* Section 20 */}
                        <div id="20" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">CERAMIC LAMINATE</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl001.png" code="CL 001" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl002.png" code="CL 002" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl003.png" code="CL 003" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl004.png" code="CL 004" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl005.png" code="CL 005" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl006.png" code="CL 006" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl007.png" code="CL 007" name="" />
                                    <ColorCard imageSrc="./js/Cermic_Laminate/cl008.png" code="CL 008" name="" />
                                </div>
                            </div>
                        </div>

                        {/* Section 21 */}
                        <div id="21" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">VENEER LAMINATE</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/vanner_laminate/001.png" code="VL 001" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/002.png" code="VL 002" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl003.png" code="VL 003" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl004.png" code="VL 004" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl005.png" code="VL 005" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl006.png" code="VL 006" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl007.png" code="VL 007" name="" />
                                    <ColorCard imageSrc="./js/vanner_laminate/vl008.png" code="VL 008" name="" />
                                </div>
                            </div>
                        </div>

                        {/* Section 22 */}
                        <div id="22" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">STONELAM</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/stonelam/1.jpeg" code="SL 001" name="Terra Di Matera Fiammato" />
                                    <ColorCard imageSrc="./js/stonelam/2.webp" code="SL 002" name="Terra Di Matera Fiammato" />
                                    <ColorCard imageSrc="./js/stonelam/3.webp" code="SL 003" name="" />
                                    <ColorCard imageSrc="./js/stonelam/4.webp" code="SL 004" name="" />
                                    <ColorCard imageSrc="./js/stonelam/5.webp" code="SL 005" name="" />
                                    <ColorCard imageSrc="./js/stonelam/6.webp" code="SL 006" name="" />
                                    <ColorCard imageSrc="./js/stonelam/7.webp" code="SL 007" name="" />
                                    <ColorCard imageSrc="./js/stonelam/8.webp" code="SL 008" name="" />
                                    <ColorCard imageSrc="./js/stonelam/9.webp" code="SL 009" name="" />
                                    <ColorCard imageSrc="./js/stonelam/10.webp" code="SL 010" name="" />
                                    <ColorCard imageSrc="./js/stonelam/11.webp" code="SL 011" name="" />
                                    <ColorCard imageSrc="./js/stonelam/12.webp" code="SL 012" name="" />
                                    <ColorCard imageSrc="./js/stonelam/13.webp" code="SL 013" name="" />
                                    <ColorCard imageSrc="./js/stonelam/14.webp" code="SL 014" name="" />
                                    <ColorCard imageSrc="./js/stonelam/15.webp" code="SL 015" name="" />
                                    <ColorCard imageSrc="./js/stonelam/16.webp" code="SL 016" name="" />
                                    <ColorCard imageSrc="./js/stonelam/17.webp" code="SL 017" name="" />
                                    <ColorCard imageSrc="./js/stonelam/18.webp" code="SL 018" name="" />
                                    <ColorCard imageSrc="./js/stonelam/19.webp" code="SL 019" name="" />
                                    <ColorCard imageSrc="./js/stonelam/20.webp" code="SL 020" name="" />
                                    <ColorCard imageSrc="./js/stonelam/21.webp" code="SL 021" name="" />
                                    <ColorCard imageSrc="./js/stonelam/22.webp" code="SL 022" name="" />
                                    <ColorCard imageSrc="./js/stonelam/23.webp" code="SL 023" name="" />
                                    <ColorCard imageSrc="./js/stonelam/24.webp" code="SL 024" name="" />
                                    <ColorCard imageSrc="./js/stonelam/25.webp" code="SL 025" name="" />
                                    <ColorCard imageSrc="./js/stonelam/26.webp" code="SL 026" name="" />
                                    <ColorCard imageSrc="./js/stonelam/27.webp" code="SL 027" name="" />
                                    <ColorCard imageSrc="./js/stonelam/28.webp" code="SL 028" name="" />
                                    <ColorCard imageSrc="./js/stonelam/29.webp" code="SL 029" name="" />
                                    <ColorCard imageSrc="./js/stonelam/30.webp" code="SL 030" name="" />
                                    <ColorCard imageSrc="./js/stonelam/31.webp" code="SL 031" name="" />
                                    <ColorCard imageSrc="./js/stonelam/32.webp" code="SL 032" name="" />
                                    <ColorCard imageSrc="./js/stonelam/33.webp" code="SL 033" name="" />
                                    <ColorCard imageSrc="./js/stonelam/34.webp" code="SL 034" name="" />
                                    <ColorCard imageSrc="./js/stonelam/35.webp" code="SL 035" name="" />
                                    <ColorCard imageSrc="./js/stonelam/36.webp" code="SL 036" name="" />
                                    <ColorCard imageSrc="./js/stonelam/37.webp" code="SL 037" name="" />
                                    <ColorCard imageSrc="./js/stonelam/38.webp" code="SL 038" name="" />
                                    <ColorCard imageSrc="./js/stonelam/39.webp" code="SL 039" name="" />
                                    <ColorCard imageSrc="./js/stonelam/40.webp" code="SL 040" name="" />
                                    <ColorCard imageSrc="./js/stonelam/41.webp" code="SL 041" name="" />
                                    <ColorCard imageSrc="./js/stonelam/42.webp" code="SL 042" name="" />
                                    <ColorCard imageSrc="./js/stonelam/43.webp" code="SL 043" name="" />
                                    <ColorCard imageSrc="./js/stonelam/44.webp" code="SL 044" name="" />
                                </div>
                            </div>
                        </div>

                        {/* Section 23 */}
                        <div id="23" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">LAMINATE SHADES (SOLID)</h2>
                                <p className="text-gray-300 text-sm mt-1">Exclusive shades in solid, textile, and woodgrain finishes enhance furniture design, blending easily with diverse applications.</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">DIMENSION : 8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard bgColor="#fefefe" code="CS 101" name="FROSTY WHITE" />
                                    <ColorCard bgColor="#dddcda" code="CS 103" name="PUMIC GREY" />
                                    <ColorCard bgColor="#807d76" code="CS 117" name="MIST GREY" />
                                    <ColorCard bgColor="#9e9180" code="CS 113" name="TAUPE" />
                                    <ColorCard bgColor="#c0b8ad" code="CS 102" name="GREY" />
                                    <ColorCard bgColor="#5c5e5b" code="CS 114" name="ANTHRACITE GREY" />
                                </div>
                            </div>
                        </div>

                        {/* Section 24 */}
                        <div id="24" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Laminate Shades (Textile)</h2>
                                <p className="text-gray-300 text-sm mt-1">Our exclusive shades and finishes—featuring a rich mix of solid colors, textiles, and woodgrain textures—enhance furniture aesthetics, seamlessly blending with diverse applications while offering complete design freedom</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">DIMENSION : 8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/Laminate_Shades(Textile)/cs104.png" code="CS 104" name="LIGHT TEXTIL" />
                                    <ColorCard imageSrc="./js/Laminate_Shades(Textile)/cs105.png" code="CS 105" name="DARK TEXTILE" />
                                </div>
                            </div>
                        </div>

                        {/* Section 25 */}
                        <div id="25" className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-24">
                            <div className="bg-gray-800 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Laminate Shades (Trend / Woodgrain)</h2>
                                <p className="text-gray-300 text-sm mt-1">Exclusive shades and finishes in solid colors, textiles, and woodgrain enhance furniture, blending with any style while offering design flexibility</p>
                                <span className="inline-block text-xs bg-gray-300 font-medium text-black px-2 py-0.5 rounded-full mt-2">DIMENSION : 8 x 4 FEET</span>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    <ColorCard imageSrc="./js/Laminates_shades(trend_woodgrain)/cs109.png" code="CS 112" name="DARK WALNUT" />
                                    <ColorCard imageSrc="./js/Laminates_shades(trend_woodgrain)/cs110.png" code="CS 111" name="CANADIAN OAK" />
                                    <ColorCard imageSrc="./js/Laminates_shades(trend_woodgrain)/cs111.png" code="CS 110" name="ELEGANT ASH" />
                                    <ColorCard imageSrc="./js/Laminates_shades(trend_woodgrain)/cs112.png" code="CS 109" name="SPRING OAK" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materials;