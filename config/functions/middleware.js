module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: [
        {
          model: "user-infos",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
        {
          model: "currencies",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
        {
          model: "users",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
        {
          model: "budget-journals",
          maxAge: 18000000,
          cacheTimeout: 6000,
        },
      ],
    },
  },
});
