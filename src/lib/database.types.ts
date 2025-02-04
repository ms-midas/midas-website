export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_authors: {
        Row: {
          id: string
          name: string
          bio: string | null
          avatar_url: string | null
          role: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          bio?: string | null
          avatar_url?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          bio?: string | null
          avatar_url?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          author_id: string | null
          category_id: string | null
          featured_image: string | null
          published_at: string | null
          created_at: string
          updated_at: string
          is_published: boolean
          meta_title: string | null
          meta_description: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt: string
          content: string
          author_id?: string | null
          category_id?: string | null
          featured_image?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
          is_published?: boolean
          meta_title?: string | null
          meta_description?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          author_id?: string | null
          category_id?: string | null
          featured_image?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
          is_published?: boolean
          meta_title?: string | null
          meta_description?: string | null
        }
      }
    }
  }
}