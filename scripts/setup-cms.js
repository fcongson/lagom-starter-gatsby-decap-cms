#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configDir = path.join(__dirname, '..', 'static', 'admin');
const basicConfig = path.join(configDir, 'config.yml');
const enhancedConfig = path.join(configDir, 'config-enhanced.yml');

console.log('🎛️  Decap CMS Configuration Setup\n');
console.log('Choose your CMS configuration:');
console.log('');
console.log('1. 📝 Basic Config (config.yml)');
console.log('   - Quick setup for developers');
console.log('   - Minimal fields and options');
console.log('   - Basic blog + pages');
console.log('');
console.log('2. ✨ Enhanced Config (config-enhanced.yml)');
console.log('   - Better UX for content editors');
console.log('   - SEO fields, hints, validation');
console.log('   - Site settings & navigation management');
console.log('   - Organized with emojis and descriptions');
console.log('');

rl.question('Enter your choice (1 or 2): ', (answer) => {
  if (answer === '1') {
    console.log('\n✅ Using Basic Configuration');
    console.log('The current config.yml is already set up for basic usage.');
  } else if (answer === '2') {
    try {
      // Backup current config
      if (fs.existsSync(basicConfig)) {
        fs.copyFileSync(basicConfig, path.join(configDir, 'config-basic-backup.yml'));
      }
      
      // Copy enhanced config to main config
      fs.copyFileSync(enhancedConfig, basicConfig);
      
      console.log('\n✅ Enhanced Configuration Activated!');
      console.log('');
      console.log('📋 Next Steps:');
      console.log('1. Run `npm run build` to rebuild the site');
      console.log('2. Access the CMS at /admin/ to see the enhanced interface');
      console.log('3. Configure your site settings in the "⚙️ Site Settings" section');
      console.log('');
      console.log('💡 Tip: You can always switch back by running this script again');
      
    } catch (error) {
      console.error('❌ Error setting up enhanced config:', error.message);
    }
  } else {
    console.log('\n❌ Invalid choice. Please run the script again and choose 1 or 2.');
  }
  
  rl.close();
});
