import { mkdir, copyFile as fsCopyFile, readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';

// Directories to backup
const dirsToBackup = ['src', 'public', 'supabase'];

// Files to backup
const filesToBackup = [
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'postcss.config.js',
  'tailwind.config.js',
  'eslint.config.js',
  '.env'
];

// Create backup directory with timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDir = join('backups', `backup-${timestamp}`);

async function copyFile(src, dest) {
  // Create destination directory if it doesn't exist
  const destDir = dirname(dest);
  if (!existsSync(destDir)) {
    await mkdir(destDir, { recursive: true });
  }
  
  // Copy the file
  await fsCopyFile(src, dest);
}

async function copyDir(src, dest) {
  // Create destination directory
  if (!existsSync(dest)) {
    await mkdir(dest, { recursive: true });
  }

  // Read directory contents
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

// Create backup
try {
  // Create main backup directory if it doesn't exist
  if (!existsSync('backups')) {
    await mkdir('backups');
  }

  // Create backup subdirectory for this backup
  await mkdir(backupDir, { recursive: true });

  // Copy directories
  for (const dir of dirsToBackup) {
    if (existsSync(dir)) {
      await copyDir(dir, join(backupDir, dir));
    }
  }

  // Copy individual files
  for (const file of filesToBackup) {
    if (existsSync(file)) {
      await copyFile(file, join(backupDir, file));
    }
  }

  console.log(`✅ Backup created successfully in: ${backupDir}`);
} catch (error) {
  console.error('❌ Error creating backup:', error);
}