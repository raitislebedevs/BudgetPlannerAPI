module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: [
        {
          model: "budget",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
        {
          model: "budget-journals",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
        {
          model: "user-categories",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
      ],
    },
  },
});
