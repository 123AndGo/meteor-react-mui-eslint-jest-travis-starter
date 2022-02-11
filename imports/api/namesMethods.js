/* eslint func-names: ["error", "as-needed"] */
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import NamesCollection from '../db/NamesCollection';

Meteor.methods({
  'names.insert': function (text) {
    check(text, String);

    NamesCollection.insert({
      text,
      createdAt: new Date(),
    });
  },
});
