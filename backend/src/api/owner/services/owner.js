'use strict';

/**
 * owner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owner.owner');
