export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_id: string | null;
  category_id: string | null;
  featured_image: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  author?: BlogAuthor;
  category?: BlogCategory;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio: string | null;
  avatar_url: string | null;
  role: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}