module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000/'],
            numberOfRuns: 1
          },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };