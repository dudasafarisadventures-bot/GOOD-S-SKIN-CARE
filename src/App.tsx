/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Truck,
  Sparkles,
  Heart,
  Clock,
  Star,
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  Check
} from 'lucide-react';

// Product images generated via studio photography
import heroImg from './assets/images/hero_gods_skincare_1792739064802.jpg';
import lipstickImg from './assets/images/product_lipstick_1792739064116.jpg';
import soapImg from './assets/images/product_soap_1792739065582.jpg';
import skinOilImg from './assets/images/product_skin_oil_1792739065652.jpg';

const WHATSAPP_PHONE = '255740221000';
const DEFAULT_WA_MESSAGE = "Habari G's Skin Care, nataka kuagiza";
const BASE_WA_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`;

interface Product {
  id: string;
  name: string;
  subname: string;
  price: number;
  formattedPrice: string;
  image: string;
  benefitShort: string;
  benefitFull: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'lipstick',
    name: 'Lipstick',
    subname: 'Rangi Nzuri Inayodumu',
    price: 7000,
    formattedPrice: 'TSh 7,000',
    image: lipstickImg,
    benefitShort: 'Rangi nzuri inayodumu, midomo ipendeze',
    benefitFull: 'Ina rangi maridadi inayokaa kwa muda mrefu bila kufifia wala kukausha midomo. Huacha midomo yako ikiwa na unyevu, ulaini na muonekano wa kuvutia siku nzima.',
    badge: 'Popular',
  },
  {
    id: 'sabuni',
    name: 'Sabuni (Best Soap)',
    subname: 'Asili & Laini kwa Ngozi',
    price: 10000,
    formattedPrice: 'TSh 10,000',
    image: soapImg,
    benefitShort: 'Inasafisha na kuacha ngozi laini na yenye harufu nzuri',
    benefitFull: 'Inasafisha uchafu na mafuta ya ziada kwa kina bila kukausha ngozi. Ina viungo vya asili vinavyoacha ngozi yako nyororo, yenye mng\'ao na harufu nzuri ya kupendeza.',
    badge: 'Best Seller',
  },
  {
    id: 'skin-oil',
    name: 'Skin Oil',
    subname: 'Lishe & Mng\'ao wa Asili',
    price: 12000,
    formattedPrice: 'TSh 12,000',
    image: skinOilImg,
    benefitShort: 'Inalainisha na kulinda ngozi isikauke',
    benefitFull: 'Mafuta yenye virutubisho vya asili yanayopenya haraka mwilini. Hulinda unyevu wa ngozi masaa 24, huzuia mikunjo na kupambana na ukavu wa hali ya hewa.',
    badge: 'Kipenzi cha Wengi',
  },
];

const REVIEWS = [
  {
    name: 'Neema Mwakyusa',
    location: 'Kinondoni, Dar es Salaam',
    rating: 5,
    date: 'Mteja wa kudumu',
    comment:
      'Sabuni hii ni ya kipekee sana! Ngozi yangu imekuwa laini na harufu yake inabaki siku nzima. Niliagiza asubuhi na saa sita mchana nililetewa Mikocheni bila malipo ya delivery.',
    favorite: 'Sabuni (Best Soap)',
  },
  {
    name: 'Amina Kassim',
    location: 'Sinza, Dar es Salaam',
    rating: 5,
    date: 'Wiki iliyopita',
    comment:
      'Skin Oil inanipa glow nzuri sana bila kuteleza au kung\'aa vibaya. Haichubui kabisa bali inalinda ngozi na kuifanya inawiri. Bei yake ni nafuu sana kulinganisha na ubora wake!',
    favorite: 'Skin Oil',
  },
  {
    name: 'Diana Shija',
    location: 'Mikocheni, Dar es Salaam',
    rating: 5,
    date: 'Siku 3 zilizopita',
    comment:
      'Lipstick yao inashika vizuri sana na haikauki mdomoni. Rangi inapendeza sana kazini na kwenye mitoko. Huduma yao ya WhatsApp ni ya haraka na ya heshima mno.',
    favorite: 'Lipstick',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Generate WhatsApp order URL for a specific product
  const getProductOrderUrl = (productName: string, price: string) => {
    const text = `Habari G's Skin Care, nataka kuagiza ${productName} (${price})`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  // Special offer WhatsApp URL
  const specialOfferUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Habari G's Skin Care, nataka kuagiza Offer Maalum ya TSh 25,000 (Seti Kamili)"
  )}`;

  return (
    <div className="min-h-screen bg-[#FCF9F7] text-[#2C211E] flex flex-col font-sans selection:bg-[#FCE7EB] selection:text-[#771C35]">
      {/* Top Announcement Bar */}
      <div className="bg-[#2C211E] text-[#F7EBE1] text-xs font-medium py-2 px-4 text-center tracking-wide">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[#E6C374]">
            <Truck className="w-3.5 h-3.5" />
            <span>Delivery Bure Dar es Salaam nzima</span>
          </span>
          <span className="text-[#8C7A73]">·</span>
          <span>Mikocheni A, Dar es Salaam</span>
          <span className="text-[#8C7A73]">·</span>
          <span className="text-[#E6C374]">Simu: 0704 221 000</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FCF9F7]/95 backdrop-blur-md border-b border-[#F0E4DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Logo / Wordmark */}
          <a href="#" className="flex flex-col items-start group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C211E] group-hover:text-[#A87E1A] transition-colors">
              GOOD&apos;S SKIN CARE STORE
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#A87E1A] font-medium">
              Ngozi yako, uzuri wako
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5F4B43]">
            <a href="#bidhaa" className="hover:text-[#A87E1A] transition-colors">
              Bidhaa Zetu
            </a>
            <a href="#offer" className="hover:text-[#A87E1A] transition-colors">
              Offer Maalum
            </a>
            <a href="#kwa-nini" className="hover:text-[#A87E1A] transition-colors">
              Kwa Nini Sisi
            </a>
            <a href="#faida" className="hover:text-[#A87E1A] transition-colors">
              Faida
            </a>
            <a href="#ushuhuda" className="hover:text-[#A87E1A] transition-colors">
              Wateja Wetu
            </a>
            <a href="#mawasiliano" className="hover:text-[#A87E1A] transition-colors">
              Mawasiliano
            </a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-2">
            <a
              href={BASE_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Agiza kwa WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5F4B43] hover:text-[#2C211E] rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF5F2] border-b border-[#E8DCD4] px-4 py-4 space-y-3">
            <a
              href="#bidhaa"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Bidhaa Zetu
            </a>
            <a
              href="#offer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Offer Maalum (TSh 25,000)
            </a>
            <a
              href="#kwa-nini"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Kwa Nini G&apos;s Skin Care
            </a>
            <a
              href="#faida"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Faida za Bidhaa
            </a>
            <a
              href="#ushuhuda"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Ushuhuda wa Wateja
            </a>
            <a
              href="#mawasiliano"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5F4B43] hover:text-[#A87E1A]"
            >
              Mawasiliano & Mahali
            </a>
            <a
              href={BASE_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold py-3 px-4 rounded-xl w-full text-center shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Agiza kwa WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF3F5] via-[#FCF9F7] to-[#FCF9F7] pt-8 pb-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#F3D6DE] text-xs font-medium text-[#9E3E5C] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Vipodozi Bora vya Asili Tanzania</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2C211E] leading-tight">
                GOOD&apos;S SKIN CARE STORE
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#A87E1A] font-medium">
                &ldquo;Ngozi yako, uzuri wako&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#6E584F] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tunakuletea vipodozi laini na salama vinavyolinda afya ya ngozi yako, kukuacha na
                mng&apos;ao wa asili na muonekano wa kuvutia kila siku.
              </p>

              {/* Big Green WhatsApp Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={BASE_WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>Agiza kwa WhatsApp</span>
                </a>

                <a
                  href="#bidhaa"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF4F0] text-[#2C211E] border border-[#E6D4CB] text-sm sm:text-base font-semibold px-6 py-4 rounded-full transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#A87E1A]" />
                  <span>Angalia Bidhaa</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-2 border-t border-[#F0DFD7] text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FCE7EB] flex items-center justify-center text-[#9E3E5C] shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2C211E]">Delivery Bure</p>
                    <p className="text-[11px] text-[#7E6961]">Dar es Salaam</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#A87E1A] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2C211E]">100% Salama</p>
                    <p className="text-[11px] text-[#7E6961]">Haichubui ngozi</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EAFBF0] flex items-center justify-center text-[#25D366] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2C211E]">Mwitikio wa Haraka</p>
                    <p className="text-[11px] text-[#7E6961]">WhatsApp 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow backing */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FCE7EB] via-[#F8E3C2]/50 to-[#FCF9F7] rounded-3xl blur-lg opacity-70"></div>

                <div className="relative rounded-2xl overflow-hidden border border-[#F2DEDE] shadow-xl bg-white">
                  <img
                    src={heroImg}
                    alt="Vipodozi vya asili vya GOOD'S SKIN CARE STORE - Sabuni, Skin Oil na Lipstick"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#F0E4DE] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#A87E1A]">
                        Mkusanyiko Maalum
                      </p>
                      <p className="text-sm font-bold text-[#2C211E]">Seti ya Ngozi Yenye Mng&apos;ao</p>
                    </div>
                    <span className="text-xs font-semibold text-[#25D366] bg-[#EAFBF0] px-3 py-1 rounded-full border border-[#D0F5DC]">
                      Zipo Tayari
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCTS */}
      <section id="bidhaa" className="py-16 bg-white border-y border-[#F0E4DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A87E1A]">
              Bidhaa Maarufu
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C211E] mt-1">
              Chagua Bidhaa Yako
            </h2>
            <p className="text-sm text-[#6E584F] mt-2">
              Kila bidhaa imetengenezwa kwa umakini mkubwa kukupa matokeo unayoyatamani bila madhara.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col bg-[#FCF9F7] rounded-2xl overflow-hidden border border-[#EFE2DB] hover:border-[#DCC1B1] shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7EBE5]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {prod.badge && (
                    <span className="absolute top-3 left-3 bg-[#2C211E]/90 text-[#F5E7B2] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C211E]">
                        {prod.name}
                      </h3>
                      <span className="text-base sm:text-lg font-bold text-[#A87E1A] whitespace-nowrap tabular-nums">
                        {prod.formattedPrice}
                      </span>
                    </div>
                    <p className="text-xs text-[#A87E1A] font-medium mt-0.5">{prod.subname}</p>
                    <p className="text-xs text-[#6E584F] mt-2 leading-relaxed line-clamp-2">
                      {prod.benefitShort}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 space-y-2">
                    <a
                      href={getProductOrderUrl(prod.name, prod.formattedPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Agiza ({prod.formattedPrice})</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProductForModal(prod)}
                      className="w-full text-xs text-[#7E6961] hover:text-[#2C211E] font-medium py-1.5 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Soma faida zaidi</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#FAF0F3] border border-[#F3D6DE] text-center max-w-xl mx-auto flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 text-[#9E3E5C] shrink-0" />
            <p className="text-xs sm:text-sm text-[#722339]">
              <span className="font-bold">Kumbuka:</span> Agiza sasa na tutakuletea popote Dar es Salaam bure kabisa bila gharama yoyote ya ziada!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECIAL OFFER BANNER */}
      <section id="offer" className="py-12 bg-gradient-to-r from-[#2C211E] via-[#3D2C27] to-[#2C211E] text-white relative overflow-hidden">
        {/* Subtle decorative gold ring */}
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 rounded-full border border-[#C59B27]/20 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-[#C59B27]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#FCE6A4] text-xs font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#FCE6A4]" />
                  <span>BEI YA KIPEKEE KWA WATEJA WA SASA</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Offer maalum: <span className="text-[#F6D27A]">TSh 25,000</span>
                </h2>

                <p className="text-sm sm:text-base text-[#E2D2CB] leading-relaxed max-w-xl">
                  Chukua seti kamili ya <strong className="text-white">Lipstick</strong>,{' '}
                  <strong className="text-white">Sabuni (Best Soap)</strong> na{' '}
                  <strong className="text-white">Skin Oil</strong> zote kwa pamoja kwa{' '}
                  <strong className="text-[#F6D27A]">TSh 25,000 pekee</strong> badala ya{' '}
                  <span className="line-through text-[#AB948A]">TSh 29,000</span>.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#EADBD4]">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#25D366]" /> Okoa TSh 4,000 papo hapo
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#25D366]" /> Delivery Bure Dar es Salaam
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#25D366]" /> Lipa ukikagua bidhaa zako
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="w-full bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/15 space-y-4">
                  <div className="text-center">
                    <span className="text-[11px] uppercase tracking-widest text-[#E6C374]">
                      Bei ya Jumla
                    </span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F6D27A]">
                      TSh 25,000
                    </div>
                    <span className="text-xs text-[#D8C4BA]">Seti Zote Tatu Pamoja</span>
                  </div>

                  <a
                    href={specialOfferUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Pata Offer Hii WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section id="kwa-nini" className="py-16 bg-[#FAF5F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A87E1A]">
              Ubora na Uaminifu
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C211E] mt-1">
              Kwa nini G&apos;s Skin Care
            </h2>
            <p className="text-sm text-[#6E584F] mt-2">
              Tunajali sana afya na mng&apos;ao wa ngozi yako. Hizi ni sababu zinazofanya wateja wetu
              kutuchagua kila siku.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EDE1D9] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FCE7EB] flex items-center justify-center text-[#9E3E5C]">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C211E]">
                  Bidhaa laini kwa ngozi
                </h3>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Zinatengenezwa kwa viungo rafiki visivyo na kemikali kali, kuzuia kuwasha wala kuharibu
                  rangi yako ya asili.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F2E8E2] text-xs font-semibold text-[#9E3E5C]">
                Ngozi Laini & Salama
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EDE1D9] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFF3DC] flex items-center justify-center text-[#A87E1A]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C211E]">
                  Bei nafuu kwa kila mtu
                </h3>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Kuanzia TSh 7,000 tu, unaweza kupata vipodozi vya kiwango cha juu bila kuvunja bajeti yako.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F2E8E2] text-xs font-semibold text-[#A87E1A]">
                Thamani Halisi ya Pesa
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EDE1D9] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#EAFBF0] flex items-center justify-center text-[#25D366]">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C211E]">
                  Delivery bure
                </h3>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Popote ulipo Dar es Salaam, tunakufikishia mzigo wako bila kukutoza hata senti moja ya usafiri.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F2E8E2] text-xs font-semibold text-[#25D366]">
                Mikocheni hadi Kwako
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EDE1D9] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E8F8F0] flex items-center justify-center text-[#1EBE5D]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C211E]">
                  Huduma ya haraka kupitia WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Tunajibu meseji mara moja, kukushauri na kuanzisha usafirishaji wa haraka kwa heshima zote.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F2E8E2] text-xs font-semibold text-[#1EBE5D]">
                Mwitikio wa Papo Hapo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT BENEFITS */}
      <section id="faida" className="py-16 bg-white border-y border-[#F0E4DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A87E1A]">
              Faida Halisi
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C211E] mt-1">
              Faida za Bidhaa Zetu
            </h2>
            <p className="text-sm text-[#6E584F] mt-2">
              Tazama jinsi kila bidhaa inavyofanya kazi ya kubadilisha muonekano wako.
            </p>
          </div>

          <div className="space-y-8">
            {/* Benefit 1: Sabuni */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-8 border border-[#EFE4DE] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 order-2 md:order-1">
                <img
                  src={soapImg}
                  alt="Sabuni Best Soap"
                  className="rounded-xl w-full h-48 sm:h-56 object-cover shadow-sm border border-[#E8DCD4]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-8 order-1 md:order-2 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A87E1A] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Usafi & Uharufu Mzuri</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C211E]">
                  Sabuni (Best Soap) · TSh 10,000
                </h3>
                <p className="text-sm sm:text-base text-[#4F3C34] font-medium leading-relaxed">
                  Inasafisha na kuacha ngozi laini na yenye harufu nzuri.
                </p>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Huondoa uchafu wote wa jua na vumbi bila kukausha mafuta asilia ya ngozi. Unaamka na
                  ngozi nyororo, inayoteleza kwa ulaini, na harufu ya kupendeza inayodumu muda wote.
                </p>
                <div className="pt-2">
                  <a
                    href={getProductOrderUrl('Sabuni (Best Soap)', 'TSh 10,000')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#25D366] hover:text-[#1EBE5D]"
                  >
                    <span>Agiza Sabuni kwa WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Benefit 2: Skin Oil */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-8 border border-[#EFE4DE] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A87E1A] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Unyevu & Ulinzi wa Ngozi</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C211E]">
                  Skin Oil · TSh 12,000
                </h3>
                <p className="text-sm sm:text-base text-[#4F3C34] font-medium leading-relaxed">
                  Inalainisha na kulinda ngozi isikauke.
                </p>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Inapenyoza unyevu ndani kabisa ya vinyweleo, inalinda ngozi dhidi ya ukavu wa viyoyozi
                  na jua kali la Dar es Salaam. Inakupa mng&apos;ao (glow) wa asili bila kunata.
                </p>
                <div className="pt-2">
                  <a
                    href={getProductOrderUrl('Skin Oil', 'TSh 12,000')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#25D366] hover:text-[#1EBE5D]"
                  >
                    <span>Agiza Skin Oil kwa WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-4">
                <img
                  src={skinOilImg}
                  alt="Skin Oil ya GOD'S SKIN CARE"
                  className="rounded-xl w-full h-48 sm:h-56 object-cover shadow-sm border border-[#E8DCD4]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Benefit 3: Lipstick */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-8 border border-[#EFE4DE] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 order-2 md:order-1">
                <img
                  src={lipstickImg}
                  alt="Lipstick Rangi Nzuri"
                  className="rounded-xl w-full h-48 sm:h-56 object-cover shadow-sm border border-[#E8DCD4]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-8 order-1 md:order-2 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9E3E5C] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rangi Nzuri ya Midomo</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C211E]">
                  Lipstick · TSh 7,000
                </h3>
                <p className="text-sm sm:text-base text-[#4F3C34] font-medium leading-relaxed">
                  Rangi nzuri inayodumu, midomo ipendeze.
                </p>
                <p className="text-xs sm:text-sm text-[#6E584F] leading-relaxed">
                  Imechaguliwa kuendana na aina mbalimbali za ngozi ya Kitanzania. Inakaa kwa muda mrefu
                  bila kufutika kirahisi unapokunywa au kuongea, huku ikilinda midomo isikauke au kupasuka.
                </p>
                <div className="pt-2">
                  <a
                    href={getProductOrderUrl('Lipstick', 'TSh 7,000')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#25D366] hover:text-[#1EBE5D]"
                  >
                    <span>Agiza Lipstick kwa WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CUSTOMER REVIEWS */}
      <section id="ushuhuda" className="py-16 bg-[#FAF5F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A87E1A]">
              Ushuhuda wa Wateja
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C211E] mt-1">
              Wateja Wetu Wanasema Nini?
            </h2>
            <p className="text-sm text-[#6E584F] mt-2">
              Uzoefu halisi kutoka kwa wateja waliotumia bidhaa za GOOD&apos;S SKIN CARE STORE Dar es Salaam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EDE1D9] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#E6A916]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6A916]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4E3D36] italic leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2E8E2]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#2C211E]">{review.name}</p>
                      <p className="text-xs text-[#806B62]">{review.location}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#A87E1A] bg-[#FFF8EB] px-2 py-0.5 rounded border border-[#F5E6CD]">
                      {review.favorite}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT AND LOCATION */}
      <section id="mawasiliano" className="py-16 bg-white border-t border-[#F0E4DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A87E1A]">
                  Tupo Hapa Kwa Ajili Yako
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C211E] mt-1">
                  Mawasiliano na Mahali
                </h2>
                <p className="text-sm text-[#6E584F] mt-2 max-w-lg mx-auto lg:mx-0">
                  Tembelea duka letu au agiza popote ulipo tukuletee mlangoni kwako bila malipo ya delivery!
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF5F2] border border-[#EFE4DE]">
                  <div className="w-10 h-10 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#9E3E5C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#A87E1A]">
                      Mahali / Location
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#2C211E]">
                      Mikocheni A, Dar es Salaam
                    </p>
                    <p className="text-xs text-[#7A665E]">Tanzania</p>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF5F2] border border-[#EFE4DE]">
                  <div className="w-10 h-10 rounded-lg bg-[#EAFBF0] flex items-center justify-center text-[#25D366] shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1EBE5D]">
                      Huduma ya Usafirishaji
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#2C211E]">
                      Delivery Bure
                    </p>
                    <p className="text-xs text-[#7A665E]">
                      Tunakufikishia popote Dar es Salaam bure kabisa
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:0704221000"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF5F2] border border-[#EFE4DE] hover:border-[#C59B27] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FFF4DC] flex items-center justify-center text-[#A87E1A] shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#806B62]">Piga Simu</p>
                      <p className="text-xs sm:text-sm font-bold text-[#2C211E]">0704 221 000</p>
                    </div>
                  </a>

                  <a
                    href={BASE_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF5F2] border border-[#EFE4DE] hover:border-[#25D366] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EAFBF0] flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#806B62]">WhatsApp</p>
                      <p className="text-xs sm:text-sm font-bold text-[#2C211E]">+255 740 221 000</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#FAF3F5] via-white to-[#FDF5E8] p-6 sm:p-8 rounded-3xl border border-[#F2DEDE] shadow-lg text-center space-y-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-7 h-7 fill-[#25D366]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C211E]">
                    Tuma Oda Yako Sasa
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E584F] max-w-xs mx-auto">
                    Bofya hapa chini kuwasiliana nasi moja kwa moja kwenye WhatsApp. Tutajibu papo hapo!
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={BASE_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base font-bold py-4 px-6 rounded-2xl shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Fungua WhatsApp (+255 740 221 000)</span>
                  </a>

                  <p className="text-[11px] text-[#8C7A73]">
                    Meseji ya kuanzia: &ldquo;Habari Good&apos;s Skin Care, nataka kuagiza&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#211815] text-[#D8C7C0] pt-12 pb-24 sm:pb-12 border-t border-[#332723]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#362A26]">
            {/* Brand column */}
            <div className="md:col-span-6 space-y-3">
              <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                GOOD&apos;S SKIN CARE STORE
              </h3>
              <p className="font-serif italic text-sm text-[#E6C374]">
                &ldquo;Ngozi yako, uzuri wako&rdquo;
              </p>
              <p className="text-xs text-[#A8948B] max-w-sm leading-relaxed">
                Duka la vipodozi bora vya asili kwa ajili ya afya na uzuri wa ngozi yako. Mikocheni A,
                Dar es Salaam.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E6C374] mb-3">Bidhaa Zetu</p>
              <p>Lipstick · TSh 7,000</p>
              <p>Sabuni (Best Soap) · TSh 10,000</p>
              <p>Skin Oil · TSh 12,000</p>
              <p className="text-[#E6C374] font-semibold">Offer Maalum · TSh 25,000</p>
            </div>

            {/* Contacts */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E6C374] mb-3">Mawasiliano</p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E6C374]" /> Mikocheni A, Dar es Salaam
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E6C374]" /> Simu: 0704 221 000
              </p>
              <p className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp: +255 740 221 000
              </p>
              <p className="text-[#25D366] font-semibold mt-1">Delivery Bure Dar es Salaam</p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A73] gap-3">
            <p>© {new Date().getFullYear()} GOOD&apos;S SKIN CARE STORE. Haki zote zimehifadhiwa.</p>
            <p className="text-center sm:text-right">
              Imetengenezwa kwa umaridadi kwa ajili ya wateja wetu wapendwa.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group">
        <a
          href={BASE_WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Wasiliana nasi kwa WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs sm:text-sm whitespace-nowrap">Agiza kwa WhatsApp</span>
        </a>
      </aside>

      {/* PRODUCT BENEFIT MODAL (Interactive) */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#EDE1D9] animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/10] bg-[#FAF5F2]">
              <img
                src={selectedProductForModal.image}
                alt={selectedProductForModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Funga dirisha"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C211E]">
                    {selectedProductForModal.name}
                  </h3>
                  <p className="text-xs text-[#A87E1A] font-medium">
                    {selectedProductForModal.subname}
                  </p>
                </div>
                <span className="font-bold text-lg text-[#A87E1A]">
                  {selectedProductForModal.formattedPrice}
                </span>
              </div>

              <div className="space-y-2 bg-[#FAF5F2] p-4 rounded-xl border border-[#EFE4DE]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9E3E5C]">
                  Faida Kuu
                </p>
                <p className="text-sm text-[#4E3D36] leading-relaxed">
                  {selectedProductForModal.benefitFull}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={getProductOrderUrl(
                    selectedProductForModal.name,
                    selectedProductForModal.formattedPrice
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Agiza kwa WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProductForModal(null)}
                  className="px-4 py-3 text-xs font-semibold text-[#6E584F] hover:text-[#2C211E] rounded-xl border border-[#E0D2CB]"
                >
                  Funga
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
