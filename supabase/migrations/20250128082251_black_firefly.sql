/*
  # Create blog tables

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `author_id` (uuid, foreign key)
      - `category_id` (uuid, foreign key)
      - `featured_image` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `is_published` (boolean)
      - `meta_title` (text)
      - `meta_description` (text)

    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `blog_authors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `bio` (text)
      - `avatar_url` (text)
      - `role` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated users to manage content
*/

-- Create blog_authors table
CREATE TABLE blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  avatar_url text,
  role text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_categories table
CREATE TABLE blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES blog_authors(id) ON DELETE SET NULL,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  featured_image text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_published boolean DEFAULT false,
  meta_title text,
  meta_description text
);

-- Enable RLS
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Add policies for blog_authors
CREATE POLICY "Allow public to view blog authors"
  ON blog_authors
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage blog authors"
  ON blog_authors
  USING (auth.role() = 'authenticated');

-- Add policies for blog_categories
CREATE POLICY "Allow public to view blog categories"
  ON blog_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage blog categories"
  ON blog_categories
  USING (auth.role() = 'authenticated');

-- Add policies for blog_posts
CREATE POLICY "Allow public to view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Allow authenticated users to manage blog posts"
  ON blog_posts
  USING (auth.role() = 'authenticated');

-- Add updated_at triggers
CREATE TRIGGER update_blog_authors_updated_at
  BEFORE UPDATE ON blog_authors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Insert initial categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Digital Transformation', 'digital-transformation', 'Articles about digital transformation in manufacturing'),
  ('Sustainability', 'sustainability', 'Content related to sustainable manufacturing practices'),
  ('Case Studies', 'case-studies', 'Real-world implementation examples'),
  ('Industry Trends', 'industry-trends', 'Latest trends and insights in manufacturing'),
  ('Best Practices', 'best-practices', 'Guidelines and recommendations for manufacturing excellence');

-- Insert initial authors
INSERT INTO blog_authors (name, role, bio) VALUES
  ('Dr. Sarah Mitchell', 'CEO & Lead Trainer', '20+ years experience in digital transformation and manufacturing excellence'),
  ('James Chen', 'Head of Training', 'Expert in Industry 4.0 implementation and training delivery'),
  ('Maria Rodriguez', 'Digital Transformation Consultant', 'Specialist in manufacturing technology and process optimization');