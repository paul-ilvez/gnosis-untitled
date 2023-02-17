'use strict';

/**
 * safe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::safe.safe');
