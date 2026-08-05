'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Menu, X, Check, ArrowRight, ArrowUpRight, Mail, MapPin, Loader2, Star,
  ChevronDown, MessageCircle, Sparkles,
  Wifi, Camera, Fingerprint, Smartphone,
  Monitor, Wrench, Server, Headphones,
  Zap, Link2, Bot, BarChart3,
  Calendar, MessageSquare, TrendingUp, Plug,
  Palette, ShoppingCart, Code2, Search,
} from 'lucide-react';
import { type Brand, brandList, WHATSAPP } from '../lib/brands';
import Reveal from './Reveal';

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  wifi: Wifi, camera: Camera, fingerprint: Fingerprint, smartphone: Smartphone,
  monitor: Monitor, wrench: Wrench, server: Server, headphones: Headphones,
  zap: Zap, link: Link2, bot: Bot, chart: BarChart3,
  calendar: Calendar, message: MessageSquare, trending: TrendingUp, plug: Plug,
  palette: Palette, cart: ShoppingCart, code: Code2, search: Search,
};

export default function BrandLanding({ brand }: { brand: Brand }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', ubicacion: '', tipo_negocio: '',
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, marca: brand.slug }),
      });
      if (res.ok) router.push(`/gracias?marca=${brand.slug}`);
      else alert('No pudimos enviar tu solicitud. Probá de nuevo en un momento.');
    } catch {
      alert('Error de conexión. Revisá tu internet e intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const otras = brandList.filter(b => b.slug !== brand.slug);
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola! Quiero información sobre ${brand.name}.`)}`;

  const brandVars = {
    '--brand': brand.color,
    '--brand-dark': brand.colorDark,
    '--brand-light': brand.colorLight,
  } as React.CSSProperties;

  return (
    <div style={brandVars} className="bg-white text-gray-900">

      {/* ─────────────── NAVBAR ─────────────── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg transition-transform group-hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
              >
                {brand.initials}
              </div>
              <span className={`font-bold text-lg tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                {brand.name}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {brand.navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
              >
                {brand.ctaPrimary}
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className={`md:hidden p-1 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-200/50 bg-white/95 backdrop-blur-xl -mx-4 px-4 rounded-b-2xl">
              {brand.navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-gray-700 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="block mt-3 text-center text-white font-semibold py-2.5 rounded-lg"
                style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
              >
                {brand.ctaPrimary}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Resplandor de marca */}
        <div
          className="pointer-events-none absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full blur-[130px] opacity-25"
          style={{ background: brand.color }}
        />
        <div
          className="pointer-events-none absolute top-40 -right-40 w-[420px] h-[420px] rounded-full blur-[110px] opacity-15"
          style={{ background: brand.colorLight }}
        />
        {/* Grilla */}
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <div className="relative max-w-4xl mx-auto px-4 pt-36 pb-24 sm:pt-44 sm:pb-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 bg-white/5 border border-white/10 backdrop-blur px-4 py-1.5 rounded-full">
              {brand.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl sm:text-6xl font-bold leading-[1.08]">
              {brand.h1}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(120deg, ${brand.color}, ${brand.colorLight})` }}
              >
                {brand.h1Highlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {brand.sub}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold shadow-xl transition-all hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                  boxShadow: `0 12px 32px -8px ${brand.color}80`,
                }}
              >
                {brand.ctaPrimary} <ArrowRight size={18} />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur transition-colors"
              >
                {brand.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Métricas */}
        <div className="relative border-t border-white/10 bg-white/[0.02] backdrop-blur">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {brand.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="px-4 py-7 text-center">
                  <p className="text-2xl sm:text-3xl font-bold" style={{ color: brand.colorLight }}>
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICIOS ─────────────── */}
      <section id="servicios" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: brand.color }}
            >
              Servicios
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">{brand.servicesTitle}</h2>
            <p className="mt-4 text-gray-500 text-lg">{brand.servicesSub}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brand.services.map((s, i) => {
              const Icon = icons[s.icon] ?? Sparkles;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/70 hover:border-gray-300">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${brand.color}14`, color: brand.color }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── PLANES ─────────────── */}
      <section id="planes" className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: brand.color }}
            >
              Precios
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">{brand.plansTitle}</h2>
            <p className="mt-4 text-gray-500 text-lg">{brand.plansSub}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {brand.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 110} className="h-full">
                <div
                  className={`relative h-full rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gray-950 text-white shadow-2xl md:-translate-y-4'
                      : 'bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1'
                  }`}
                  style={
                    plan.highlight
                      ? { boxShadow: `0 24px 60px -20px ${brand.color}70`, border: `1px solid ${brand.color}55` }
                      : undefined
                  }
                >
                  {plan.highlight && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-wide text-white px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
                    >
                      MÁS ELEGIDO
                    </span>
                  )}

                  <h3 className={`font-semibold text-lg ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-1 mb-5 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.desc}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: plan.highlight ? brand.colorLight : brand.color }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={plan.highlight ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={17}
                          className="shrink-0 mt-0.5"
                          style={{ color: plan.highlight ? brand.colorLight : brand.color }}
                        />
                        <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className={`block text-center w-full py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      plan.highlight ? 'text-white shadow-lg' : 'text-white'
                    }`}
                    style={{
                      background: plan.highlight
                        ? `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`
                        : brand.color,
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIOS ─────────────── */}
      <section id="opiniones" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: brand.color }}
            >
              Opiniones
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {brand.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-200">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                      style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
                    >
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">{t.name}</p>
                      <p className="text-gray-500 text-xs truncate">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section id="faq" className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: brand.color }}
            >
              Dudas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Preguntas frecuentes</h2>
          </Reveal>

          <div className="space-y-3">
            {brand.faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-colors hover:border-gray-300">
                  <summary className="flex justify-between items-center gap-4 cursor-pointer p-5 font-medium text-gray-900 list-none">
                    {faq.q}
                    <ChevronDown
                      size={18}
                      className="faq-chevron shrink-0 transition-transform duration-300"
                      style={{ color: brand.color }}
                    />
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FORMULARIO ─────────────── */}
      <section id="contacto" className="relative overflow-hidden bg-gray-950 py-24 px-4 text-white">
        <div
          className="pointer-events-none absolute -bottom-52 left-1/2 -translate-x-1/2 w-[820px] h-[480px] rounded-full blur-[130px] opacity-25"
          style={{ background: brand.color }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <div className="relative max-w-lg mx-auto">
          <Reveal className="text-center mb-9">
            <h2 className="text-3xl sm:text-4xl font-bold">{brand.formTitle}</h2>
            <p className="mt-4 text-gray-400">{brand.formSub}</p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-7 space-y-3"
            >
              <input
                type="text" name="nombre" placeholder="Tu nombre" required
                value={formData.nombre} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30 focus:bg-white/10"
              />
              <input
                type="email" name="email" placeholder="Tu email" required
                value={formData.email} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30 focus:bg-white/10"
              />
              <input
                type="tel" name="telefono" placeholder="Tu teléfono / WhatsApp" required
                value={formData.telefono} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30 focus:bg-white/10"
              />
              <input
                type="text" name="ubicacion" placeholder="Tu ubicación (opcional)"
                value={formData.ubicacion} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30 focus:bg-white/10"
              />
              <select
                name="tipo_negocio" required
                value={formData.tipo_negocio} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10 [&>option]:bg-gray-900"
              >
                <option value="">{brand.selectLabel}</option>
                {brand.selectOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                  boxShadow: `0 12px 30px -10px ${brand.color}90`,
                }}
              >
                {loading
                  ? <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                  : <>{brand.formCta} <ArrowRight size={18} /></>}
              </button>

              <p className="text-center text-xs text-gray-500 pt-1">{brand.formNote}</p>
            </form>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-center text-sm text-gray-500 mt-6">
              ¿Preferís hablar directo?{' '}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-white transition-colors"
              >
                Escribinos por WhatsApp
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── OTRAS MARCAS ─────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
              Parte del holding
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">También te puede servir</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otras.map((b, i) => (
              <Reveal key={b.slug} delay={i * 70}>
                <Link
                  href={`/brands/${b.slug}`}
                  className="group flex flex-col h-full bg-gray-50 rounded-xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                      style={{ background: `linear-gradient(135deg, ${b.color}, ${b.colorDark})` }}
                    >
                      {b.initials}
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 transition-colors group-hover:text-gray-600" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{b.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.hubDesc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="bg-gray-950 text-white pt-16 pb-28 md:pb-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
              >
                {brand.initials}
              </div>
              <span className="font-bold text-lg">{brand.name}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{brand.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Contacto</h3>
            <div className="space-y-2.5 text-gray-500 text-sm">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} /> {brand.email}
              </a>
              <p className="flex items-center gap-2"><MapPin size={15} /> Buenos Aires, Argentina</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Marcas del holding</h3>
            <div className="space-y-2 text-sm">
              {brandList.map(b => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className={`block transition-colors ${
                    b.slug === brand.slug ? 'text-white font-medium' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <Link href="/" className="hover:text-gray-400 transition-colors">Volver al holding →</Link>
        </div>
      </footer>

      {/* ─────────────── WHATSAPP FLOTANTE ─────────────── */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="pulse-ring hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-[#25D366] items-center justify-center shadow-2xl transition-transform hover:scale-110"
      >
        <MessageCircle size={26} className="relative text-white" />
      </a>

      {/* ─────────────── BARRA FIJA MOBILE ─────────────── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-4 py-3 flex gap-2.5">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 shrink-0 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href="#contacto"
          className="flex-1 text-center text-white font-semibold py-3 rounded-xl shadow-md"
          style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
        >
          {brand.ctaPrimary}
        </a>
      </div>

    </div>
  );
}
