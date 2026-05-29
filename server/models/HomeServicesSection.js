const mongoose = require('mongoose');

const homeServicesSectionSchema = new mongoose.Schema(
  {
    tagline: {
      type: String,
      default: 'Shop By Category',
    },
    heading: {
      type: String,
      default: 'Everything You Need',
    },
    highlightText: {
      type: String,
      default: 'In One Place',
    },
    description: {
      type: String,
      default: 'Browse curated products across electronics, fashion, home, beauty, sports, and daily essentials with trusted sellers and smooth checkout.',
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  { timestamps: true }
);

const HomeServicesSection = mongoose.model('HomeServicesSection', homeServicesSectionSchema);

module.exports = HomeServicesSection;
