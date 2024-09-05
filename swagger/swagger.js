// /swagger/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Intern Management API',
        version: '1.0.0',
        description: 'API documentation for the Intern Management system',
    },
    servers: [
        {
            url: 'http://localhost:4000/api',
            description: 'Development server',
        },
    ],
    components: {
        schemas: {
            Intern: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'John Doe'
                    },
                    email: {
                        type: 'string',
                        example: 'john.doe@example.com'
                    },
                    startDate: {
                        type: 'string',
                        format: 'date',
                        example: '2023-01-01'
                    },
                    endDate: {
                        type: 'string',
                        format: 'date',
                        example: '2023-12-31'
                    }
                },
                required: ['name', 'email']
            },
            Performance: {
                type: 'object',
                properties: {
                    internId: {
                        type: 'string',
                        example: '60d0fe4f5311236168a109ca'
                    },
                    review: {
                        type: 'string',
                        example: 'Excellent performance in project delivery.'
                    },
                    score: {
                        type: 'integer',
                        example: 85
                    },
                    date: {
                        type: 'string',
                        format: 'date',
                        example: '2024-09-05'
                    }
                },
                required: ['internId', 'review', 'score', 'date']
            },
            Task: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        example: 'Complete Documentation'
                    },
                    description: {
                        type: 'string',
                        example: 'Create comprehensive API documentation for the project.'
                    },
                    dueDate: {
                        type: 'string',
                        format: 'date',
                        example: '2024-09-30'
                    }
                },
                required: ['title', 'description', 'dueDate']
            },
            Feedback: {
                type: 'object',
                properties: {
                    internId: {
                        type: 'string',
                        example: '60d0fe4f5311236168a109ca'
                    },
                    feedback: {
                        type: 'string',
                        example: 'Great job on the recent project!'
                    },
                    date: {
                        type: 'string',
                        format: 'date',
                        example: '2024-09-05'
                    }
                },
                required: ['internId', 'feedback', 'date']
            },
            Auth: {
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                        example: 'johndoe'
                    },
                    password: {
                        type: 'string',
                        example: 'password123'
                    }
                },
                required: ['username', 'password']
            }
        }
    }
};

const options = {
    definition: swaggerDefinition,
    apis: [path.join(__dirname, '../routes/*.js')], // Path to your API routes files
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerDocs;
