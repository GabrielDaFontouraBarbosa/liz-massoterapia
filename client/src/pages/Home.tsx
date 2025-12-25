import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  Leaf, 
  Wind, 
  Droplets, 
  Sparkles, 
  HeartHandshake, 
  Flower2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  Facebook
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract organic shapes background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 animate-pulse duration-[10s]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-primary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Bem-estar e equilíbrio para sua vida</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight text-foreground">
              Encontre sua <span className="text-primary italic">paz interior</span> através do toque.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Terapias manuais personalizadas para aliviar dores, reduzir o estresse e reconectar corpo e mente em um ambiente acolhedor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                  Agendar Sessão
                </Button>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50">
                  Conhecer Terapias
                </Button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white">
               {/* woman receiving massage spa relaxing atmosphere */}
               <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Massagem relaxante em ambiente tranquilo" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">"A melhor massagem que já recebi na vida!"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-secondary/30 shadow-2xl">
                {/* professional massage therapist portrait smiling */}
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Terapeuta profissional" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-10 right-0 p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg">
                <p className="font-display font-bold text-2xl">10+ Anos</p>
                <p className="text-sm opacity-90">de experiência</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-display font-bold text-4xl mb-6 text-foreground">Sobre mim</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Olá! Sou especialista em massoterapia com uma abordagem holística que integra técnicas ocidentais e orientais. Meu objetivo não é apenas aliviar sintomas físicos, mas proporcionar um momento de reconexão profunda com seu corpo.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Acredito que o toque terapêutico é uma ferramenta poderosa de cura. Cada sessão é desenhada exclusivamente para suas necessidades, seja para alívio de dor crônica, recuperação muscular ou redução de ansiedade.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Atendimento Humanizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Produtos Orgânicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Ambiente Acolhedor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Técnicas Exclusivas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Nossos Tratamentos</span>
            <h2 className="font-display font-bold text-4xl mt-3 mb-6">Massagens e Terapias</h2>
            <p className="text-muted-foreground text-lg">
              Escolha a terapia ideal para o seu momento. Todas as sessões incluem aromaterapia e escalda-pés de boas-vindas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Massagem Relaxante"
              description="Técnica suave com movimentos longos e fluidos para promover relaxamento profundo e redução do estresse."
              price="R$ 180 / 60min"
              icon={<Flower2 className="w-6 h-6" />}
              delay={0.1}
            />
            <ServiceCard 
              title="Deep Tissue"
              description="Focada nas camadas mais profundas do tecido muscular, ideal para liberar tensões crônicas e contraturas."
              price="R$ 220 / 60min"
              icon={<Wind className="w-6 h-6" />}
              delay={0.2}
            />
            <ServiceCard 
              title="Drenagem Linfática"
              description="Estimula o sistema linfático para reduzir a retenção de líquidos, inchaços e eliminar toxinas."
              price="R$ 160 / 50min"
              icon={<Droplets className="w-6 h-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display font-bold text-4xl mb-16">O que dizem nossos clientes</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Pronto para se sentir melhor?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-lg">
                Seu corpo é seu templo. Reserve um momento para cuidar de você e restabelecer sua energia vital. Preencha o formulário e entrarei em contato.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+55 (21) 96652-3234</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>meloelizangelamelo@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white rounded-full">
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white rounded-full">
                  <Facebook className="w-6 h-6" />
                </Button>
                <a href="https://wa.me/5521966523234?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão."
                target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition"
                >
                Me chame no WhatsApp
                </a>

              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl text-foreground">Liz Massoterapia</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} Liz Massoterapia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
