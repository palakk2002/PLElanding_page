const HomeServicesSection = require('../models/HomeServicesSection');
const { SuccessResponse } = require('../utils/apiResponse');

exports.getHomeServicesSection = async (req, res, next) => {
  try {
    let section = await HomeServicesSection.findOne();
    if (!section) {
      // Return defaults if none exists
      section = {
        tagline: 'Shop By Category',
        heading: 'Everything You Need',
        highlightText: 'In One Place',
        description: 'Browse curated products across electronics, fashion, home, beauty, sports, and daily essentials with trusted sellers and smooth checkout.'
      };
    }
    res.status(200).json(new SuccessResponse(section));
  } catch (error) {
    next(error);
  }
};

exports.updateHomeServicesSection = async (req, res, next) => {
  try {
    const { tagline, heading, highlightText, description } = req.body;
    let section = await HomeServicesSection.findOne();

    if (!section) {
      section = new HomeServicesSection({
        tagline,
        heading,
        highlightText,
        description,
        updatedBy: req.user._id
      });
    } else {
      section.tagline = tagline || section.tagline;
      section.heading = heading || section.heading;
      section.highlightText = highlightText || section.highlightText;
      section.description = description || section.description;
      section.updatedBy = req.user._id;
    }

    await section.save();
    res.status(200).json(new SuccessResponse(section, 'Home Services Section updated successfully'));
  } catch (error) {
    next(error);
  }
};
