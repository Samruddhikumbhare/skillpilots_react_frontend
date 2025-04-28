module.exports = {
    apps: [
      {
        name: "nextjs-app",
        script: "npm start ",
        args: "start",
        cwd: "/",
        watch: true,
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };