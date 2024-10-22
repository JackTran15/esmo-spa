module.exports = {
  apps: [
    {
      name: 'nextjs-app', // Name of your app
      script: 'npm', // Script to run the app
      args: 'run start', // Arguments for the script (runs "npm run start")
      instances: 'max', // Use all available CPU cores
      exec_mode: 'cluster', // Enable cluster mode for load balancing
      autorestart: true, // Auto-restart if the app crashes
      watch: false, // Disable watch mode, you can set it to true for development
      max_memory_restart: '1G', // Restart the app if it uses more than 1GB of RAM
      env: {
        NODE_ENV: 'production', // Environment variables for production
      },
      env_development: {
        NODE_ENV: 'development', // Environment variables for development
      },
    },
  ],
};
