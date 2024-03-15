module.exports = {
    ci: {
        collect: {
          startServerCommand: "npm run start",
          startServerReadyPattern: "ready on",  
          url: ['http://localhost:3000/', 'http://localhost:3000/tasks/task1'],
            numberOfRuns: 1
          },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };