'use strict';

/**
 * owner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::owner.owner');
