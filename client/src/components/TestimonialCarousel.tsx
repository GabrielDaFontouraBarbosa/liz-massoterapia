import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Advogada",
    content: "A massagem terapêutica transformou minha qualidade de vida. As dores nas costas que sentia há anos desapareceram após algumas sessões.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Atleta Amador",
    content: "Excelente profissional! A massagem desportiva me ajudou muito na recuperação pós-treino e prevenção de lesões. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Designer",
    content: "O ambiente é extremamente relaxante e acolhedor. Saio de cada sessão me sentindo renovada e com as energias recarregadas.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4"
            >
              <div className="bg-white dark:bg-card p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 text-center relative mx-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                
                <div className="flex justify-center gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground font-medium italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary/80 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={scrollNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
