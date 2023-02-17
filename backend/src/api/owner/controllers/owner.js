'use strict';

/**
 * owner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::owner.owner');
