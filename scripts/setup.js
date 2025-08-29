#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function setup() {
  console.log('🚀 Welcome to Lagom Starter Setup!\n');
  
  // Collect basic site information
  const siteName = await ask('What is your site name? ');
  const siteDescription = await ask('Brief description of your site: ');
  const authorName = await ask('Your name: ');
  const siteUrl = await ask('Your site URL (optional, press enter to skip): ');
  
  // Update gatsby-config.js
  const configPath = path.join(process.cwd(), 'gatsby-config.js');
  let config = fs.readFileSync(configPath, 'utf8');
  
  config = config.replace(
    '"Lagom Starter - Gatsby + Decap CMS"',
    `"${siteName}"`
  );
  config = config.replace(
    '"This repo contains an example website that is built with Gatsby, and Decap CMS."',
    `"${siteDescription}"`
  );
  
  if (siteUrl) {
    config = config.replace(
      'siteMetadata: {',
      `siteMetadata: {\n    siteUrl: "${siteUrl}",`
    );
  }
  
  fs.writeFileSync(configPath, config);
  
  // Update package.json
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  packageJson.name = siteName.toLowerCase().replace(/\s+/g, '-');
  packageJson.author = authorName;
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  
  // Create site config file
  const siteConfig = {
    siteName,
    siteDescription,
    authorName,
    siteUrl,
    setupDate: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), 'site-config.json'),
    JSON.stringify(siteConfig, null, 2)
  );
  
  console.log('\n✅ Setup complete!');
  console.log('Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Visit: http://localhost:8000');
  console.log('3. Visit: http://localhost:8000/admin for CMS');
  
  rl.close();
}

setup().catch(console.error);
