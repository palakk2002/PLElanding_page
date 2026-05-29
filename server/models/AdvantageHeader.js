const mongoose = require('mongoose');

const advantageHeaderSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      default: 'The Marketplace Advantage',
    },
    description: {
      type: String,
      default: "Shop with more confidence, better value, and less friction. Here is how our marketplace improves the usual online shopping experience.",
    },
    vedhuntColumnHeader: {
      type: String,
      default: 'Our Marketplace',
    },
    typicalColumnHeader: {
      type: String,
      default: 'Typical Store',
    },
    bottomNote: {
      type: String,
      default: 'Customer Shopping Experience Benchmarks 2026',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AdvantageHeader', advantageHeaderSchema);

