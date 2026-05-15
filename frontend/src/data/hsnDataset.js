// Curated dataset of common HSN (goods) and SAC (services) codes used by Indian small businesses.
// Source: CBIC notified rates as of FY 2025-26. Always verify the latest official rate before filing.
// Each entry: { code, description, gst, category, type }
export const hsnDataset = [
  // ===== APPAREL & TEXTILES =====
  { code: '6109', description: 'T-shirts, singlets and other vests, knitted or crocheted', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6203', description: 'Men\u2019s suits, jackets, blazers, trousers (woven)', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6204', description: 'Women\u2019s suits, dresses, skirts, trousers (woven)', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6105', description: 'Men\u2019s shirts, knitted or crocheted', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6106', description: 'Women\u2019s blouses, shirts, shirt-blouses, knitted', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6403', description: 'Footwear with leather uppers, retail sale price > \u20b91,000', gst: 18, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6404', description: 'Footwear with textile uppers (sale price \u2264 \u20b91,000)', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '5208', description: 'Cotton fabrics, woven, weighing \u2264 200 g/m\u00b2', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '5407', description: 'Synthetic woven fabrics', gst: 5, category: 'Apparel & Textiles', type: 'HSN' },
  { code: '6302', description: 'Bed linen, table linen, toilet linen, kitchen linen', gst: 12, category: 'Apparel & Textiles', type: 'HSN' },

  // ===== ELECTRONICS & MOBILE =====
  { code: '8517', description: 'Mobile phones (smartphones, feature phones)', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8471', description: 'Computers, laptops, tablets and data processing machines', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8528', description: 'Television sets, monitors, projectors', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8504', description: 'Power adapters, chargers, transformers', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8518', description: 'Headphones, earphones, microphones, speakers', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8523', description: 'Memory cards, USB drives, hard disks, SSDs', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8544', description: 'Cables, wires, fibre optic cables', gst: 18, category: 'Electronics', type: 'HSN' },
  { code: '8415', description: 'Air conditioners (room ACs, split ACs)', gst: 28, category: 'Electronics', type: 'HSN' },
  { code: '8418', description: 'Refrigerators, freezers, water coolers', gst: 28, category: 'Electronics', type: 'HSN' },
  { code: '8450', description: 'Washing machines (domestic)', gst: 18, category: 'Electronics', type: 'HSN' },

  // ===== FOOD & BEVERAGES =====
  { code: '0401', description: 'Milk (fresh, pasteurised, UHT \u2014 unbranded)', gst: 0, category: 'Food & Beverages', type: 'HSN' },
  { code: '0805', description: 'Citrus fruits, fresh (oranges, lemons)', gst: 0, category: 'Food & Beverages', type: 'HSN' },
  { code: '0901', description: 'Coffee (roasted, ground, instant)', gst: 5, category: 'Food & Beverages', type: 'HSN' },
  { code: '0902', description: 'Tea (loose leaf, packaged)', gst: 5, category: 'Food & Beverages', type: 'HSN' },
  { code: '1006', description: 'Rice (other than pre-packaged & labelled)', gst: 0, category: 'Food & Beverages', type: 'HSN' },
  { code: '1701', description: 'Sugar (cane, refined)', gst: 5, category: 'Food & Beverages', type: 'HSN' },
  { code: '1905', description: 'Bread, pastry, biscuits, cakes', gst: 5, category: 'Food & Beverages', type: 'HSN' },
  { code: '2106', description: 'Food preparations, namkeen, mixes', gst: 18, category: 'Food & Beverages', type: 'HSN' },
  { code: '2202', description: 'Aerated drinks, fruit juices, mineral water', gst: 28, category: 'Food & Beverages', type: 'HSN' },
  { code: '2402', description: 'Cigarettes, cigars, tobacco products', gst: 28, category: 'Food & Beverages', type: 'HSN' },

  // ===== AUTOMOBILES =====
  { code: '8703', description: 'Passenger cars (petrol/diesel up to 1500cc)', gst: 28, category: 'Automobiles', type: 'HSN' },
  { code: '8711', description: 'Motorcycles, scooters, mopeds', gst: 28, category: 'Automobiles', type: 'HSN' },
  { code: '8712', description: 'Bicycles, cycle rickshaws', gst: 12, category: 'Automobiles', type: 'HSN' },
  { code: '4011', description: 'New pneumatic tyres (rubber)', gst: 28, category: 'Automobiles', type: 'HSN' },
  { code: '8708', description: 'Motor vehicle parts and accessories', gst: 28, category: 'Automobiles', type: 'HSN' },
  { code: '2710', description: 'Petroleum oils, lubricants, motor oils', gst: 18, category: 'Automobiles', type: 'HSN' },

  // ===== CONSTRUCTION & BUILDING =====
  { code: '2523', description: 'Portland cement, clinker', gst: 28, category: 'Construction', type: 'HSN' },
  { code: '7214', description: 'Iron & steel bars, rods (TMT bars)', gst: 18, category: 'Construction', type: 'HSN' },
  { code: '6907', description: 'Ceramic tiles, glazed wall tiles', gst: 18, category: 'Construction', type: 'HSN' },
  { code: '3208', description: 'Paints, varnishes (oil/water based)', gst: 18, category: 'Construction', type: 'HSN' },
  { code: '4418', description: 'Builders\u2019 joinery, doors, windows of wood', gst: 12, category: 'Construction', type: 'HSN' },
  { code: '7308', description: 'Structures of iron or steel (gates, grills)', gst: 18, category: 'Construction', type: 'HSN' },

  // ===== PHARMA & HEALTHCARE =====
  { code: '3004', description: 'Medicaments, formulations (most medicines)', gst: 12, category: 'Pharma & Healthcare', type: 'HSN' },
  { code: '3003', description: 'Medicaments (life-saving \u2014 specified list)', gst: 5, category: 'Pharma & Healthcare', type: 'HSN' },
  { code: '9018', description: 'Medical, surgical, dental instruments', gst: 12, category: 'Pharma & Healthcare', type: 'HSN' },
  { code: '3005', description: 'Bandages, gauze, surgical dressings', gst: 12, category: 'Pharma & Healthcare', type: 'HSN' },
  { code: '3401', description: 'Soap, toilet soap bars (non-branded)', gst: 18, category: 'Pharma & Healthcare', type: 'HSN' },
  { code: '3306', description: 'Toothpaste, mouthwash, dental hygiene', gst: 18, category: 'Pharma & Healthcare', type: 'HSN' },

  // ===== BEAUTY & PERSONAL CARE =====
  { code: '3303', description: 'Perfumes, toilet waters, eau de cologne', gst: 18, category: 'Beauty & Personal Care', type: 'HSN' },
  { code: '3304', description: 'Cosmetics, make-up, skin care preparations', gst: 18, category: 'Beauty & Personal Care', type: 'HSN' },
  { code: '3305', description: 'Shampoo, hair oil, hair preparations', gst: 18, category: 'Beauty & Personal Care', type: 'HSN' },
  { code: '9603', description: 'Toothbrushes, hair brushes, brooms', gst: 18, category: 'Beauty & Personal Care', type: 'HSN' },

  // ===== OFFICE & STATIONERY =====
  { code: '4820', description: 'Notebooks, registers, exercise books, diaries', gst: 18, category: 'Office & Stationery', type: 'HSN' },
  { code: '4802', description: 'Uncoated paper (A4, printing, writing paper)', gst: 12, category: 'Office & Stationery', type: 'HSN' },
  { code: '9608', description: 'Ball-point pens, fountain pens, markers', gst: 18, category: 'Office & Stationery', type: 'HSN' },
  { code: '4901', description: 'Printed books, brochures, leaflets', gst: 0, category: 'Office & Stationery', type: 'HSN' },
  { code: '4911', description: 'Printed matter, advertising material, posters', gst: 12, category: 'Office & Stationery', type: 'HSN' },
  { code: '9404', description: 'Mattresses, pillows, cushions, bedding', gst: 18, category: 'Office & Stationery', type: 'HSN' },

  // ===== FURNITURE =====
  { code: '9401', description: 'Seats, chairs (wood, metal, plastic)', gst: 18, category: 'Furniture', type: 'HSN' },
  { code: '9403', description: 'Other furniture (tables, cupboards, beds)', gst: 18, category: 'Furniture', type: 'HSN' },
  { code: '9405', description: 'Lamps, lighting fittings, LED lights', gst: 18, category: 'Furniture', type: 'HSN' },

  // ===== JEWELLERY & ACCESSORIES =====
  { code: '7113', description: 'Gold, silver, platinum jewellery articles', gst: 3, category: 'Jewellery', type: 'HSN' },
  { code: '7117', description: 'Imitation jewellery', gst: 3, category: 'Jewellery', type: 'HSN' },
  { code: '7102', description: 'Diamonds (unworked, cut, polished)', gst: 0.25, category: 'Jewellery', type: 'HSN' },

  // ===== SERVICES (SAC CODES) =====
  { code: '998313', description: 'Information technology (IT) software services', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '998314', description: 'IT consulting, support, maintenance services', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '998315', description: 'Hosting & cloud computing services', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '998363', description: 'Advertising space sale on internet, online ads', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '998331', description: 'Web designing & development services', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '997331', description: 'Licensing services for the right to use software', gst: 18, category: 'IT & Software Services', type: 'SAC' },
  { code: '998391', description: 'Specialty design services (graphic, UX, branding)', gst: 18, category: 'IT & Software Services', type: 'SAC' },

  { code: '998211', description: 'Legal advisory, documentation, services by advocates', gst: 18, category: 'Professional Services', type: 'SAC' },
  { code: '998221', description: 'Accounting, auditing, bookkeeping services', gst: 18, category: 'Professional Services', type: 'SAC' },
  { code: '998222', description: 'Tax consultancy, GST filing, return services', gst: 18, category: 'Professional Services', type: 'SAC' },
  { code: '998311', description: 'Management consulting services', gst: 18, category: 'Professional Services', type: 'SAC' },
  { code: '998361', description: 'Market research, public opinion polling services', gst: 18, category: 'Professional Services', type: 'SAC' },

  { code: '996511', description: 'Road transport of goods by trucks (with ITC)', gst: 12, category: 'Transport & Logistics', type: 'SAC' },
  { code: '996512', description: 'Road transport \u2014 passenger transport', gst: 5, category: 'Transport & Logistics', type: 'SAC' },
  { code: '996601', description: 'Renting of motor vehicles for transport of goods', gst: 18, category: 'Transport & Logistics', type: 'SAC' },
  { code: '996713', description: 'Clearing & forwarding services, customs broker', gst: 18, category: 'Transport & Logistics', type: 'SAC' },
  { code: '996791', description: 'Courier, parcel delivery services', gst: 18, category: 'Transport & Logistics', type: 'SAC' },

  { code: '997212', description: 'Renting commercial property (office, shop)', gst: 18, category: 'Real Estate & Rentals', type: 'SAC' },
  { code: '997211', description: 'Renting residential property to a business', gst: 18, category: 'Real Estate & Rentals', type: 'SAC' },
  { code: '997221', description: 'Real estate brokerage & agency services', gst: 18, category: 'Real Estate & Rentals', type: 'SAC' },

  { code: '996331', description: 'Restaurant / catering services (with ITC)', gst: 18, category: 'Hospitality & Food', type: 'SAC' },
  { code: '996332', description: 'Restaurant services in standalone non-AC outlets', gst: 5, category: 'Hospitality & Food', type: 'SAC' },
  { code: '996311', description: 'Hotel accommodation (tariff \u2264 \u20b97,500/night)', gst: 12, category: 'Hospitality & Food', type: 'SAC' },
  { code: '996312', description: 'Hotel accommodation (tariff > \u20b97,500/night)', gst: 18, category: 'Hospitality & Food', type: 'SAC' },

  { code: '999293', description: 'Coaching, tutoring, private education services', gst: 18, category: 'Education', type: 'SAC' },
  { code: '999294', description: 'Other education & training services', gst: 18, category: 'Education', type: 'SAC' },

  { code: '997111', description: 'Banking & financial services (most)', gst: 18, category: 'Banking & Finance', type: 'SAC' },
  { code: '997133', description: 'Insurance services \u2014 life, health, general', gst: 18, category: 'Banking & Finance', type: 'SAC' },

  { code: '998596', description: 'Event management, exhibition organising services', gst: 18, category: 'Events & Entertainment', type: 'SAC' },
  { code: '998552', description: 'Tour operator services (with conditions)', gst: 5, category: 'Events & Entertainment', type: 'SAC' },
  { code: '999621', description: 'Personal training, fitness, sports instructor', gst: 18, category: 'Events & Entertainment', type: 'SAC' },

  { code: '998719', description: 'Repair & maintenance services for vehicles', gst: 18, category: 'Repair & Maintenance', type: 'SAC' },
  { code: '998721', description: 'Repair of computers & peripherals', gst: 18, category: 'Repair & Maintenance', type: 'SAC' },
  { code: '998729', description: 'Repair of household appliances (AC, fridge)', gst: 18, category: 'Repair & Maintenance', type: 'SAC' },

  { code: '998817', description: 'Manpower supply, recruitment, HR services', gst: 18, category: 'Workforce & Staffing', type: 'SAC' },
  { code: '998513', description: 'Cleaning, housekeeping services', gst: 18, category: 'Workforce & Staffing', type: 'SAC' },
  { code: '998521', description: 'Security services (manned guarding)', gst: 18, category: 'Workforce & Staffing', type: 'SAC' },

  { code: '998391', description: 'Photography & videography services', gst: 18, category: 'Creative & Media', type: 'SAC' },
  { code: '998361', description: 'Advertising services (creative + media)', gst: 18, category: 'Creative & Media', type: 'SAC' },
  { code: '998397', description: 'Translation & interpretation services', gst: 18, category: 'Creative & Media', type: 'SAC' },
];

export const hsnCategories = Array.from(new Set(hsnDataset.map((x) => x.category))).sort();
