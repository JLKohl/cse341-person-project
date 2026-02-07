const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // where the generated file will be saved
const endpointsFiles = ['./server.js']; // files where your routes are defined

const doc = {
  info: {
    title: 'Disney Travel Planner API',
    description: 'API for planning Disney trips',
  },
  host: 'localhost:8080', // or your Render URL if deployed
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger file generated successfully!');
});
