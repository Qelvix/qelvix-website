// The industries that get their own landing page (industries/<slug>.html, built by build-industry-pages.mjs).
//
// RULE: every line below must describe something the product really does. Where a line is not copied from the existing home
// page / modules-data.js copy, it comes from the app's own code on origin/main (Nov 6 2026), named in the comment above the
// industry. Do not add a claim you cannot point at. Prices, ratings, customer counts and compliance claims are deliberately absent.
//
// icon = the id of a symbol in the sprite at the top of index.html (without the "i-" prefix).

export const industries = [
  {
    slug: 'garage',
    label: 'Garages & workshops',
    icon: 'wrench',
    blurb: 'Job cards, live vehicle status for customers, parts and billing.',
    // Source: the existing home page and modules-data.js copy (job cards, tracking, bookings, invoices, inventory).
    title: 'Garage & Workshop Management Software — Qelvix ERP',
    description: 'Qelvix ERP for garages and workshops: job cards, live vehicle tracking, bookings and estimates, invoicing, parts inventory and warranties, payroll.',
    eyebrow: 'Qelvix ERP for garages and workshops',
    h1Lead: 'Run your garage',
    h1Accent: 'from intake to invoice.',
    lede: 'Job cards, customer and vehicle history, live status for your customers, parts and billing, all in one connected system.',
    cardsTitle: 'What a garage runs on Qelvix',
    cardsSub: 'These are the modules a workshop switches on first. Each one has its own demo page.',
    cards: [
      { icon: 'clipboard', title: 'Job cards and workshop', href: '/modules/jobcards',
        text: 'Manage service jobs from intake to delivery with a full status workflow and audit trail.',
        points: ['Job card creation, search, filter and print', 'Complaint registration and prioritisation', 'Technician and bay assignment with availability', 'QC approval, customer sign-off and delivery handover'] },
      { icon: 'pin', title: 'Live vehicle tracking', href: '/modules/tracking',
        text: 'Customers check real-time status without a login, a call, or an account.',
        points: ['Public, no-login QR/link tracking page', 'Real-time job status by vehicle registration or job number', 'Shareable link customers can send to anyone'] },
      { icon: 'calendar', title: 'Enquiries, bookings and estimates', href: '/modules/pipeline',
        text: 'From first phone call to a scheduled slot to a quote, before anything is entered twice.',
        points: ['Enquiry log with follow-ups', 'Bookings and bay availability', 'Estimates tracked as draft, sent or approved'] },
      { icon: 'receipt', title: 'Invoicing and billing', href: '/modules/invoices',
        text: 'Turn closed jobs into invoices without re-entering a single line item.',
        points: ['Invoices and invoice detail', 'Payment status on every invoice'] },
      { icon: 'package', title: 'Parts, stock and warranties', href: '/modules/inventory',
        text: "Know what's on the shelf, and back every part you sell with a printable warranty.",
        points: ['Parts catalog and stock adjustments', 'Low stock alerts', 'Printable warranties'] },
    ],
  },

  {
    slug: 'doctor-clinic',
    label: 'Doctor clinics',
    icon: 'medical',
    blurb: 'Patient records, doctor calendar, visit records and clinic billing.',
    // Source: app code on origin/main. Business type DOCTOR_CLINIC (BusinessType.java, BusinessTypeModulePresets.java);
    // PatientMedicalProfile, VisitRecord (+ procedures, prescription items), DoctorAvailability models; the doctor-clinic
    // roadmap note says Patient Records, Doctor Availability, Doctor Calendar, Visit Records & Prescriptions and Clinic Billing
    // (consultation + procedure line items into the Invoices module) have all shipped. CLINIC_PHARMACY adds stock + purchasing.
    title: 'Doctor Clinic Management Software — Qelvix ERP',
    description: 'Qelvix ERP for doctor clinics: patient records, doctor calendar and appointments, visit records, consultation and procedure billing, staff and payroll.',
    eyebrow: 'Qelvix ERP for doctor clinics',
    h1Lead: 'Run your clinic',
    h1Accent: 'from appointment to bill.',
    lede: 'Patient records, doctor schedules, visit notes and billing in one system, with staff attendance, payroll and accounts behind it.',
    cardsTitle: 'What a clinic runs on Qelvix',
    cardsSub: 'Switching a company to the Doctor Clinic type turns on the clinic screens and hides the workshop ones.',
    cards: [
      { icon: 'users', title: 'Patient records',
        text: 'Every patient is a customer record with a medical profile attached.',
        points: ['Date of birth, gender and blood group', 'Allergies and chronic conditions', 'Emergency contact name and phone'] },
      { icon: 'calendar', title: 'Appointments and doctor calendar',
        text: 'Book a patient with the right doctor at a time the doctor is in.',
        points: ['Bookings for each doctor', 'Weekly availability per doctor: days and hours', 'A calendar grid to pick the doctor and the slot'] },
      { icon: 'clipboard', title: 'Visit records',
        text: 'One record per visit, linked to the appointment it came from.',
        points: ['Diagnosis, notes and medications', 'Consultation fee', 'Procedures with their prices'] },
      { icon: 'receipt', title: 'Clinic billing',
        text: 'Consultation and procedure charges go straight into an invoice.',
        points: ['Consultation and procedure line items', 'A draft invoice created from the visit record', 'Invoices post to your accounts'] },
      { icon: 'briefcase', title: 'Doctors and staff',
        text: 'Doctors and clinic staff are employees, so attendance, leave and payroll are already there.',
        points: ['Attendance and leave', 'Payroll runs and payslips', 'Employee self-service on a phone'], href: '/modules/payroll' },
      { icon: 'package', title: 'A clinic with a pharmacy',
        text: 'If you also dispense medicines, choose the Clinic + Pharmacy setup to add stock and purchasing.',
        points: ['Stock and purchasing from vendors', 'Prescription items taken from stock, with dosage instructions and quantity'] },
    ],
  },

  {
    slug: 'salon-beauty-parlour',
    label: 'Salons & beauty parlours',
    icon: 'scissors',
    blurb: 'Service menu, stylist calendar, commission, loyalty and billing.',
    // Source: app code on origin/main. Business type BEAUTY_PARLOUR ("Salon/spa" in BusinessType.java) with its own modules:
    // service menu, service packages, stylist calendar + availability, Beauty POS ("Fast counter billing for services and
    // retail products"), client service history (stylist, date, notes, products used), stylist commission (rate % per
    // stylist, optionally per service; records per invoice, pending/paid), loyalty tiers (discount %), memberships
    // (a service package with a number of sessions and the sessions remaining). One page on purpose: "salon" and
    // "beauty parlour" are the same business type in the app, and two near-identical pages would compete with each other.
    title: 'Salon & Beauty Parlour Management Software — Qelvix ERP',
    description: 'Qelvix ERP for salons and beauty parlours: appointments, service menu and packages, stylist commission, loyalty and memberships, billing, stock and payroll.',
    eyebrow: 'Qelvix ERP for salons and beauty parlours',
    h1Lead: 'Run your salon',
    h1Accent: 'from booking to commission.',
    lede: 'Appointments, your service menu, counter billing, stylist commission and loyalty in one system, with staff attendance and payroll behind it.',
    cardsTitle: 'What a salon or beauty parlour runs on Qelvix',
    cardsSub: 'Switching a company to the Beauty Parlour type turns on the salon screens and hides the workshop ones.',
    cards: [
      { icon: 'checks', title: 'Service menu and packages',
        text: 'Put every service, and every bundle, on one price list.',
        points: ['Services with category, price and duration in minutes', 'Packages: several services sold together at one price'] },
      { icon: 'calendar', title: 'Appointments and stylist calendar',
        text: 'Book clients with the stylist they want, when that stylist is working.',
        points: ['Bookings for each stylist', 'Weekly availability per stylist', 'A calendar grid to pick the stylist and the slot'] },
      { icon: 'receipt', title: 'Beauty POS',
        text: 'Fast counter billing for services and retail products.',
        points: ['Add services and retail products in one place', 'Search clients by name or phone', 'Record the payment method'] },
      { icon: 'users', title: 'Client history',
        text: 'See what each client has had done, and by whom.',
        points: ['Service, stylist, date and notes', 'Products used in each service'] },
      { icon: 'star', title: 'Stylist commission',
        text: 'Work out commission from the invoices instead of from a notebook.',
        points: ['A commission percentage per stylist, optionally per service', 'Commission records created from invoices', 'Each record marked pending or paid'] },
      { icon: 'bell', title: 'Loyalty and memberships',
        text: 'Give regulars a reason to come back.',
        points: ['Loyalty tiers with a discount percentage', 'Membership: a client buys a package with a number of sessions', 'Sessions remaining tracked for every membership'] },
      { icon: 'package', title: 'Retail product stock',
        text: 'Track the products you sell at the counter.',
        points: ['Stock and purchasing from vendors', 'Sell retail products from the Beauty POS'] },
    ],
  },

  {
    slug: 'retail-showroom',
    label: 'Retail & showrooms',
    icon: 'package',
    blurb: 'Stock, buying, billing, customers and offers for a shop or showroom.',
    // Source: the Retail preset in BusinessTypeModulePresets.java (everything except the workshop-only and jewellery modules:
    // employees, attendance, leave, payroll, enquiries, inventory, purchasing, customers, invoices, reports, accounting,
    // assets, promotions) and the existing module copy on this site. No POS, barcode or multi-store transfer is claimed.
    title: 'Retail & Showroom Management Software — Qelvix ERP',
    description: 'Qelvix ERP for retail shops and showrooms: stock, purchasing and vendors, invoicing, customers, offers, reports, accounting, staff attendance and payroll.',
    eyebrow: 'Qelvix ERP for retail shops and showrooms',
    h1Lead: 'Run your showroom',
    h1Accent: 'from stock to sale.',
    lede: 'Stock, buying from vendors, invoicing, customers and offers in one system, with your accounts and staff payroll connected.',
    cardsTitle: 'What a retail business runs on Qelvix',
    cardsSub: 'Switching a company to the Retail type turns on the shop modules and hides the workshop ones.',
    cards: [
      { icon: 'package', title: 'Stock', href: '/modules/inventory',
        text: "Know what's on the shelf.",
        points: ['Catalog and stock adjustments', 'Low stock alerts'] },
      { icon: 'briefcase', title: 'Purchasing and vendors', href: '/modules/purchasing',
        text: 'Order it, receive it, post it to your books.',
        points: ['Vendors', 'Purchase orders'] },
      { icon: 'receipt', title: 'Invoicing and customers', href: '/modules/invoices',
        text: 'Bill customers and keep one record for each of them.',
        points: ['Invoices with payment status', 'A customer record for every buyer', 'Enquiries logged with follow-ups'] },
      { icon: 'bell', title: 'Offers and promotions', href: '/modules/marketing',
        text: 'Bring customers back without a spreadsheet of phone numbers.',
        points: ['Offers and promotions with a discount and a valid-till date'] },
      { icon: 'landmark', title: 'Accounts and reports', href: '/modules/accounting',
        text: 'Close the loop from sales and purchases to the general ledger.',
        points: ['Chart of accounts and trial balance', 'Auto-posting from invoices and payroll', 'Business overview report'] },
      { icon: 'users', title: 'Staff and branches', href: '/modules/payroll',
        text: 'From hire to payslip, in one system, for one shop or many.',
        points: ['Employees, attendance and payroll runs', 'Employee self-service on a phone', 'One account, many branches'] },
    ],
  },

  {
    slug: 'logistics',
    label: 'Logistics companies',
    icon: 'truck',
    blurb: 'Staff, payroll, invoicing, purchasing and accounts for the office side.',
    // Source: the generic modules only (employees, attendance, leave, payroll, invoices, purchasing, accounting, assets,
    // reports; branch check-in geofence from branch-dialog.component.html). The app has NO logistics business type and no
    // route-planning, consignment or fleet-GPS module (searched the front end on Nov 6 2026), so the page says exactly that
    // and sells only the office, staff and money side. If a logistics module is built, rewrite this block.
    title: 'ERP for Logistics Companies — Qelvix ERP',
    description: 'Qelvix ERP runs the office side of a logistics company: staff attendance and payroll, invoicing, purchasing, accounting, assets and reports in one platform.',
    eyebrow: 'Qelvix ERP for logistics companies',
    h1Lead: 'Run the office side of logistics',
    h1Accent: 'in one platform.',
    lede: 'Staff attendance and payroll, invoicing, purchasing, accounting and reports for a logistics business with one branch or many.',
    cardsTitle: 'What a logistics company runs on Qelvix',
    cardsSub: 'Qelvix covers the staff, billing and accounts side of a logistics business. It does not include route planning, consignment tracking or fleet GPS.',
    cards: [
      { icon: 'briefcase', title: 'Staff and attendance', href: '/modules/payroll',
        text: 'Drivers, warehouse staff and office staff in one employee list.',
        points: ['Employees, attendance and leave', 'Check-in geofence per branch: a radius that staff must be inside to check in', 'Employee self-service on a phone'] },
      { icon: 'users', title: 'Payroll', href: '/modules/payroll',
        text: 'From hire to payslip, in one system.',
        points: ['Payroll runs', 'Payslips employees can view themselves'] },
      { icon: 'receipt', title: 'Invoicing', href: '/modules/invoices',
        text: 'Bill your customers and see what has been paid.',
        points: ['Invoices and invoice detail', 'Payment status on every invoice'] },
      { icon: 'package', title: 'Purchasing and vendors', href: '/modules/purchasing',
        text: 'Order it, receive it, post it to your books.',
        points: ['Vendors', 'Purchase orders'] },
      { icon: 'landmark', title: 'Accounts', href: '/modules/accounting',
        text: 'Close the loop from operations to the general ledger.',
        points: ['Chart of accounts and trial balance', 'Auto-posting from invoices and payroll'] },
      { icon: 'grid', title: 'Assets and reports', href: '/modules/assets',
        text: 'Track fixed assets from purchase to depreciation.',
        points: ['Asset register and depreciation runs', 'Business overview report'] },
    ],
  },
];
