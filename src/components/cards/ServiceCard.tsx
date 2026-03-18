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
      <Card className="h-full group hover:border-brand/30 hover:shadow-xl transition-all duration-300 bg-surface">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300 text-brand">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="group-hover:text-brand transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base pt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-brand/5 text-[10px] uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
