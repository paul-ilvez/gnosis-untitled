'use strict';

/**
 * safe router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::safe.safe');
