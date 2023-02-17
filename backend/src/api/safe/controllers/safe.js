'use strict';

/**
 * safe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::safe.safe');
