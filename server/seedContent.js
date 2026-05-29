const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const Hero = require('./models/Hero');
const NavbarLink = require('./models/NavbarLink');
const Service = require('./models/Service');

const seedContent = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // 1. Seed Navbar Links (if empty)
    const existingLinks = await NavbarLink.countDocuments();
    if (existingLinks === 0) {
      const defaultLinks = [
        { label: 'Home', path: '/', order: 1 },
        { label: 'About', path: '/about', order: 2 },
        { label: 'Services', path: '/services', order: 3 },
        { label: 'Portfolio', path: '/portfolio', order: 4 },
        { label: 'Blog', path: '/blog', order: 5 },
        { label: 'Pricing', path: '/pricing', order: 6 },
        { label: 'Career', path: '/career', order: 7 }
      ];

      await NavbarLink.insertMany(defaultLinks);
      console.log('Default Navbar Links seeded successfully!');
    } else {
      console.log('Navbar links already exist. Skipping.');
    }

    // 2. Seed Hero Content (if empty)
    const existingHero = await Hero.countDocuments({ isActive: true });
    if (existingHero === 0) {
      const defaultHero = {
        tagline: 'REAL DEALS. FAST DELIVERY. HAPPY SHOPPING',
        heading: 'Shop. Save. Smile.',
        subheading: 'Discover daily deals, trusted sellers, and curated products across every category.\\nShop smart, checkout fast, and enjoy easy delivery.',
        primaryButtonText: 'Shop Now',
        primaryButtonLink: '/services',
        secondaryButtonText: 'Explore Categories',
        secondaryButtonLink: '/services',
        description: 'Your everyday marketplace for electronics, fashion, home essentials, beauty, wellness, sports gear, and more. Compare offers, buy from verified sellers, pay securely, and get support from cart to doorstep.',
        isActive: true
      };

      await Hero.create(defaultHero);
      console.log('Default Hero content seeded successfully!');
    } else {
      console.log('Active Hero content already exists. Skipping.');
    }

    // 3. Seed Services
    const existingServices = await Service.countDocuments();
    if (existingServices === 0) {
      const defaultServices = [
        {
          id_string: 'web-dev',
          slug: 'electronics',
          title: 'Electronics',
          subtitle: 'Smart Gadgets & Daily Tech',
          shortDescription: 'Shop phones, accessories, smart devices, and must-have electronics from trusted sellers.',
          description: 'Discover reliable electronics with clear product details, competitive deals, secure checkout, and delivery updates from order to doorstep.',
          subServices: 'Mobiles, Accessories, Smart Devices, Audio',
          iconName: 'Smartphone',
          features: ['Verified product listings', 'Secure checkout and easy tracking'],
          cta: 'Shop Category',
          order: 1
        },
        {
          id_string: 'app-dev',
          slug: 'fashion-apparel',
          title: 'Fashion & Apparel',
          subtitle: 'Everyday Styles & Seasonal Looks',
          shortDescription: 'Explore clothing, footwear, and accessories for every mood, moment, and budget.',
          description: 'Find fashion picks across casual wear, festive styles, footwear, and accessories with fresh offers and easy returns.',
          subServices: 'Clothing, Footwear, Accessories, Seasonal Picks',
          iconName: 'Shirt',
          features: ['Curated collections', 'Simple returns support'],
          cta: 'Shop Category',
          order: 2
        },
        {
          id_string: 'social-media',
          slug: 'home-living',
          title: 'Home & Living',
          subtitle: 'Comfort, Decor & Everyday Essentials',
          shortDescription: 'Upgrade your home with decor, kitchen picks, storage, bedding, and daily-use essentials.',
          description: 'Browse practical and stylish home products designed to make everyday living easier, warmer, and more organized.',
          subServices: 'Kitchen, Decor, Bedding, Storage',
          iconName: 'Home',
          features: ['Quality seller listings', 'Bundle-friendly deals'],
          cta: 'Shop Category',
          order: 3
        },
        {
          id_string: 'performance-marketing',
          slug: 'beauty-wellness',
          title: 'Beauty & Wellness',
          subtitle: 'Self-Care Picks You Can Trust',
          shortDescription: 'Shop skincare, personal care, grooming, wellness, and beauty essentials in one place.',
          description: 'Explore beauty and wellness products with clear information, trusted sellers, and offers that make self-care easier to maintain.',
          subServices: 'Skincare, Haircare, Grooming, Wellness',
          iconName: 'Sparkles',
          features: ['Trusted brands and sellers', 'Daily self-care deals'],
          cta: 'Shop Category',
          order: 4
        },
        {
          id_string: 'accounting-finance',
          slug: 'sports-outdoors',
          title: 'Sports & Outdoors',
          subtitle: 'Gear for Fitness, Play & Travel',
          shortDescription: 'Find sports gear, fitness accessories, outdoor essentials, and active lifestyle products.',
          description: 'Shop products built for movement, training, travel, and weekend adventures with easy checkout and reliable delivery support.',
          subServices: 'Fitness, Sports Gear, Outdoor, Travel',
          iconName: 'Dumbbell',
          features: ['Activity-ready collections', 'Fast eligible delivery'],
          cta: 'Shop Category',
          order: 5
        },
        {
          id_string: 'mis-reporting',
          slug: 'daily-essentials',
          title: 'Daily Essentials',
          subtitle: 'Everything Your Household Needs',
          shortDescription: 'Stock up on daily-use products, household basics, and practical essentials without the hassle.',
          description: 'Keep your routine running smoothly with dependable daily essentials, visible savings, and simple order tracking.',
          subServices: 'Household, Personal Care, Grocery Basics, Utility',
          iconName: 'ShoppingBag',
          features: ['Everyday value packs', 'Smooth repeat shopping'],
          cta: 'Shop Category',
          order: 6
        }
      ];
      await Service.insertMany(defaultServices);
      console.log('Default Services seeded successfully!');
    } else {
      console.log('Services already exist. Skipping.');
    }

    console.log('Seeding completed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedContent();

