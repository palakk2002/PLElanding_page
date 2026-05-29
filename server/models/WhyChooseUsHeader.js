const mongoose = require('mongoose');

const whyChooseUsHeaderSchema = new mongoose.Schema(
  {
    tagline: {
      type: String,
      default: 'Why Shop With Us',
    },
    heading: {
      type: String,
      default: 'A Smarter Way to',
    },
    highlightText: {
      type: String,
      default: 'Shop Online',
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  { timestamps: true }
);

const WhyChooseUsHeader = mongoose.model('WhyChooseUsHeader', whyChooseUsHeaderSchema);

module.exports = WhyChooseUsHeader;
