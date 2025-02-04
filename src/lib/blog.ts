import { supabase } from './supabase';
import type { BlogPost, BlogCategory, BlogAuthor } from '../types/blog';

export async function getPublishedPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:blog_authors(*),
      category:blog_categories(*)
    `)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as (BlogPost & { author: BlogAuthor; category: BlogCategory })[];
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:blog_authors(*),
      category:blog_categories(*)
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) throw error;
  return data as BlogPost & { author: BlogAuthor; category: BlogCategory };
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data as BlogCategory[];
}

export async function getPostsByCategory(categorySlug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:blog_authors(*),
      category:blog_categories!inner(*)
    `)
    .eq('is_published', true)
    .eq('category.slug', categorySlug)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as (BlogPost & { author: BlogAuthor; category: BlogCategory })[];
}