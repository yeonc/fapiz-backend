module.exports = ({ env }) => ({
  proxy: true,
  url: env("BACKEND_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
