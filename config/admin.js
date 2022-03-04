module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd008175e3e4ecb15392a38e768e5d7e5'),
  },
});
