import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  delay: number;
}

export function ServiceCard({ title, description, price, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white dark:bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
        {icon}
      </div>
      
      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-semibold text-primary">{price}</span>
        <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
          Saiba mais <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
