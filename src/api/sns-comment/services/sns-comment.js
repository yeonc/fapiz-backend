'use strict';

/**
 * sns-comment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sns-comment.sns-comment');
