import { Meteor } from 'meteor/meteor';
import NamesCollection from '../db/NamesCollection';

Meteor.publish('names', () => NamesCollection.find({}));
