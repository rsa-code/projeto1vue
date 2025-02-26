module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',  
      'eslint:recommended',         
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['vue'],       
    rules: {
      'no-unused-vars': 'warn',    
      'vue/no-unused-vars': 'warn',
      'no-undef': 'warn',            
    },
  };
  