import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export function ServiceCard({ title, description, icon: Icon, tags }: ServiceCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full group hover:border-brand/30 hover:shadow-xl transition-all duration-300 glass overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardHeader className="relative">
          <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-brand glass border-brand/10">
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className="group-hover:text-brand transition-colors text-2xl font-bold">
            {title}
          </CardTitle>
          <CardDescription className="text-base pt-3 leading-relaxed opacity-80">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider font-semibold border-brand/20 group-hover:border-brand/40 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
