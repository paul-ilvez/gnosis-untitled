'use strict';

/**
 * nickname service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nickname.nickname');
