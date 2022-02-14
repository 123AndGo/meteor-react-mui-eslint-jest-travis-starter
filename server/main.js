import { Meteor } from 'meteor/meteor';
import NamesCollection from '../imports/db/NamesCollection';
import '../imports/api/namesMethods';
import '../imports/api/namesPublications';

const insertName = (nameText) => NamesCollection.insert({ createdAt: new Date(), text: nameText });

Meteor.startup(() => {
  if (NamesCollection.find().count() === 0) {
    [
      'First',
      'Second',
      'Third',
    ].forEach(insertName);
  }
});
