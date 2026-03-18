import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const t = useTranslations("Blog");
  
  const POSTS = [
    {
      id: "post1",
      title: t("posts.post1_title"),
      description: t("posts.post1_desc"),
      date: t("posts.post1_date"),
      category: t("posts.post1_category"),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "post2",
      title: t("posts.post2_title"),
      description: t("posts.post2_desc"),
      date: t("posts.post2_date"),
      category: t("posts.post2_category"),
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "post3",
      title: t("posts.post3_title"),
      description: t("posts.post3_desc"),
      date: t("posts.post3_date"),
      category: t("posts.post3_category"),
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {POSTS.map((post) => (
            <Card key={post.id} className="group overflow-hidden flex flex-col h-full hover:border-brand/30 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="brand">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="flex-1 pb-4">
                <div className="text-sm text-text-muted mb-2 font-medium">{post.date}</div>
                <CardTitle className="line-clamp-2 leading-tight group-hover:text-brand transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-4 text-text-secondary leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto gap-2 group/btn">
                  {t("read_more")}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
