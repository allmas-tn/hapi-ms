'use strict';

const Joi = require('../../../lib/joi');

exports.itemParams = Joi.object({
  id: Joi.string().objectId()
});

exports.postPayload = Joi.object({
  name: Joi.string().required()
});

exports.putPayload = exports.postPayload;
