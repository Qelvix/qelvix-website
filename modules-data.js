// Data for the module detail pages (module.html?id=...)
// Each module has: name, icon (Material Symbols), color (CSS var), tagline, and a list of
// features. Each feature has a label, icon, and an `html` string rendered into the demo panel —
// reusing the same .mockup-* classes as the homepage hero screenshot, just at full size.

const MODULES = {

  jobcards: {
    name: 'Job Card & Workshop Management',
    icon: 'assignment',
    color: 'var(--series-1)',
    tagline: 'Manage service jobs from intake to delivery with a full status workflow and audit trail.',
    features: [
      {
        id: 'list', label: 'Job Cards', icon: 'assignment',
        html: `
          <div class="mockup-kpis mockup-kpis-5">
            <div class="mockup-kpi"><div class="mockup-kpi-value">5</div><div class="mockup-kpi-label">New Today</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">9</div><div class="mockup-kpi-label">In Progress</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">14</div><div class="mockup-kpi-label">Completed</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">4</div><div class="mockup-kpi-label">Pending Delivery</div></div>
            <div class="mockup-kpi mockup-kpi-warn"><div class="mockup-kpi-value">2</div><div class="mockup-kpi-label">Overdue</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Job Card</span><span>Vehicle</span><span>Advisor</span><span>Status</span></div>
            <div class="mockup-row"><span>JC-1042</span><span>KA-05 MJ 2231</span><span>R. Kumar</span><span class="badge badge-progress">Work in Progress</span></div>
            <div class="mockup-row"><span>JC-1041</span><span>KA-01 AB 9087</span><span>S. Rao</span><span class="badge badge-qc">Floor Review</span></div>
            <div class="mockup-row"><span>JC-1039</span><span>KA-03 XY 4410</span><span>A. Sharma</span><span class="badge badge-done">Ready to Deliver</span></div>
            <div class="mockup-row"><span>JC-1038</span><span>KA-05 QW 7712</span><span>Unassigned</span><span class="badge badge-open">Open</span></div>
          </div>`
      },
      {
        id: 'worksheet', label: 'Job Card Worksheet', icon: 'construction',
        html: `
          <div class="mockup-worksheet-head">
            <div>
              <div class="mockup-worksheet-title">JC-1042 &nbsp;·&nbsp; KA-05 MJ 2231</div>
              <div class="mockup-worksheet-sub">Anil Kumar &nbsp;•&nbsp; Maruti Swift VDi &nbsp;•&nbsp; Bay 2</div>
            </div>
            <span class="badge badge-progress">Work in Progress</span>
          </div>
          <div class="mockup-stepper">
            <div class="mockup-step done"><span class="mockup-step-dot"></span>Open</div>
            <div class="mockup-step done"><span class="mockup-step-dot"></span>Assigned</div>
            <div class="mockup-step active"><span class="mockup-step-dot"></span>In Progress</div>
            <div class="mockup-step"><span class="mockup-step-dot"></span>Floor Review</div>
            <div class="mockup-step"><span class="mockup-step-dot"></span>Delivered</div>
          </div>
          <div class="mockup-widget-grid">
            <div class="mockup-widget">
              <h5>Complaint &amp; Inspection</h5>
              <div class="mockup-schedule-row"><span>Engine noise on cold start</span></div>
              <div class="mockup-schedule-row"><span>Front-left brake pad worn</span></div>
              <h5 class="mockup-widget-h5-mt">Labour</h5>
              <div class="mockup-schedule-row"><span>General service</span><span class="mockup-schedule-time">1.5 hrs</span></div>
              <div class="mockup-schedule-row"><span>Brake pad replacement</span><span class="mockup-schedule-time">0.8 hrs</span></div>
            </div>
            <div class="mockup-widget">
              <h5>Parts Used</h5>
              <div class="mockup-schedule-row"><span>Brake pad set (front)</span><span class="mockup-schedule-time">₹1,450</span></div>
              <div class="mockup-schedule-row"><span>Engine oil 5W-30 (4L)</span><span class="mockup-schedule-time">₹2,100</span></div>
              <h5 class="mockup-widget-h5-mt">Assigned To</h5>
              <div class="mockup-dot-stats">
                <div class="mockup-dot-stat-row"><span class="mockup-dot" style="background:var(--series-1)"></span>R. Kumar — Technician</div>
                <div class="mockup-dot-stat-row"><span class="mockup-dot" style="background:var(--series-3)"></span>Bay 2</div>
              </div>
            </div>
          </div>`
      },
      {
        id: 'bays', label: 'Service Bays', icon: 'garage',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">6</div><div class="mockup-kpi-label">Total bays</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">4</div><div class="mockup-kpi-label">Occupied</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">92%</div><div class="mockup-kpi-label">Utilisation</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Bay</span><span>Job Card</span><span>Technician</span><span>Status</span></div>
            <div class="mockup-row"><span>Bay 1</span><span>JC-1039</span><span>A. Sharma</span><span class="badge badge-done">Finishing</span></div>
            <div class="mockup-row"><span>Bay 2</span><span>JC-1042</span><span>R. Kumar</span><span class="badge badge-progress">In Progress</span></div>
            <div class="mockup-row"><span>Bay 3</span><span>—</span><span>—</span><span class="badge badge-open">Free</span></div>
            <div class="mockup-row"><span>Bay 4</span><span>JC-1044</span><span>S. Rao</span><span class="badge badge-progress">In Progress</span></div>
          </div>`
      }
    ]
  },

  customers: {
    name: 'Customer & Vehicle Tracking',
    icon: 'people_alt',
    color: 'var(--series-2)',
    tagline: 'Give customers visibility without giving them a login.',
    features: [
      {
        id: 'customers', label: 'Customers', icon: 'people_alt',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">Customers</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">add</span>Add Customer</span></div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head mockup-row-5"><span>Name</span><span>Phone</span><span>Email</span><span>City</span><span>Actions</span></div>
            <div class="mockup-row mockup-row-5"><span>Anil Kumar</span><span>98470 xxxxx</span><span>anil@mail.com</span><span>Kochi</span><span class="mockup-row-actions"><span class="material-symbols-outlined">edit</span></span></div>
            <div class="mockup-row mockup-row-5"><span>Fathima N.</span><span>90480 xxxxx</span><span>fathima@mail.com</span><span>Kozhikode</span><span class="mockup-row-actions"><span class="material-symbols-outlined">edit</span></span></div>
            <div class="mockup-row mockup-row-5"><span>George T.</span><span>94470 xxxxx</span><span>george@mail.com</span><span>Thrissur</span><span class="mockup-row-actions"><span class="material-symbols-outlined">edit</span></span></div>
          </div>`
      },
      {
        id: 'vehicles', label: 'Vehicles', icon: 'directions_car',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">318</div><div class="mockup-kpi-label">Total vehicles</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">256</div><div class="mockup-kpi-label">Active customers</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">12</div><div class="mockup-kpi-label">Service due</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Vehicle</span><span>Customer</span><span>Last Service</span><span>Status</span></div>
            <div class="mockup-row"><span>KA-05 MJ 2231</span><span>Anil Kumar</span><span>2 days ago</span><span class="badge badge-done">Active</span></div>
            <div class="mockup-row"><span>KA-01 AB 9087</span><span>Fathima N.</span><span>14 days ago</span><span class="badge badge-qc">Service Due</span></div>
            <div class="mockup-row"><span>KA-05 QW 7712</span><span>Priya S.</span><span>40 days ago</span><span class="badge badge-open">Overdue</span></div>
          </div>`
      },
      {
        id: 'portal', label: 'Public Tracking Portal', icon: 'qr_code_2',
        html: `
          <div class="mockup-widget-grid">
            <div class="mockup-widget" style="text-align:center;">
              <h5>Scan &amp; Track — No Login</h5>
              <div style="font-size:64px;line-height:1;margin:14px 0;">▦</div>
              <div class="mockup-worksheet-sub">Customer scans QR on the job card receipt</div>
            </div>
            <div class="mockup-widget">
              <h5>KA-05 MJ 2231 — Live Status</h5>
              <div class="mockup-stepper" style="flex-direction:column;align-items:flex-start;">
                <div class="mockup-step done"><span class="mockup-step-dot"></span>Vehicle received</div>
                <div class="mockup-step done"><span class="mockup-step-dot"></span>Inspection complete</div>
                <div class="mockup-step active"><span class="mockup-step-dot"></span>In service</div>
                <div class="mockup-step"><span class="mockup-step-dot"></span>Ready for pickup</div>
              </div>
            </div>
          </div>`
      }
    ]
  },

  invoices: {
    name: 'Invoicing & Billing',
    icon: 'receipt_long',
    color: 'var(--series-3)',
    tagline: 'Turn closed jobs into invoices without re-entering a single line item.',
    features: [
      {
        id: 'invoices', label: 'Invoices', icon: 'receipt_long',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">Invoices</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">add</span>New Invoice</span></div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head mockup-row-5"><span>Invoice #</span><span>Customer</span><span>Job Card</span><span>Amount</span><span>Status</span></div>
            <div class="mockup-row mockup-row-5"><span>INV-2231</span><span>Anil Kumar</span><span>JC-1039</span><span>₹4,850</span><span class="badge badge-done">Paid</span></div>
            <div class="mockup-row mockup-row-5"><span>INV-2230</span><span>Fathima N.</span><span>JC-1035</span><span>₹2,100</span><span class="badge badge-qc">Partial</span></div>
            <div class="mockup-row mockup-row-5"><span>INV-2229</span><span>George T.</span><span>JC-1031</span><span>₹6,400</span><span class="badge badge-open">Unpaid</span></div>
          </div>`
      },
      {
        id: 'detail', label: 'Invoice Detail', icon: 'description',
        html: `
          <div class="mockup-worksheet-head">
            <div>
              <div class="mockup-worksheet-title">INV-2231</div>
              <div class="mockup-worksheet-sub">Anil Kumar &nbsp;•&nbsp; JC-1039 &nbsp;•&nbsp; Issued 20 Jul 2026</div>
            </div>
            <span class="badge badge-done">Paid</span>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Item</span><span>Type</span><span>Qty</span><span>Amount</span></div>
            <div class="mockup-row"><span>General service labour</span><span>Labour</span><span>1.5 hrs</span><span>₹900</span></div>
            <div class="mockup-row"><span>Brake pad set (front)</span><span>Part</span><span>1</span><span>₹1,450</span></div>
            <div class="mockup-row"><span>Engine oil 5W-30</span><span>Part</span><span>4 L</span><span>₹2,100</span></div>
            <div class="mockup-row"><span>GST (18%)</span><span>Tax</span><span>—</span><span>₹800</span></div>
          </div>`
      },
      {
        id: 'payments', label: 'Payment Status', icon: 'payments',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">₹4.2L</div><div class="mockup-kpi-label">Total revenue</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">₹86K</div><div class="mockup-kpi-label">Outstanding</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">31</div><div class="mockup-kpi-label">Invoices this month</div></div>
          </div>
          <div class="mockup-widget">
            <h5>Collection breakdown</h5>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Paid</span><span>78%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:78%;background:var(--good)"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Partial</span><span>14%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:14%;background:var(--series-4)"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Unpaid</span><span>8%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:8%;background:var(--series-8)"></div></div></div>
          </div>`
      }
    ]
  },

  inventory: {
    name: 'Inventory & Stock',
    icon: 'inventory_2',
    color: 'var(--series-4)',
    tagline: "Know what's on the shelf before you promise it to a customer.",
    features: [
      {
        id: 'catalog', label: 'Parts Catalog', icon: 'inventory_2',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">Parts Catalog</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">upload</span>Bulk Import</span></div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head mockup-row-5"><span>Part #</span><span>Name</span><span>Category</span><span>Cost</span><span>Qty</span></div>
            <div class="mockup-row mockup-row-5"><span>BP-2201</span><span>Brake pad set (front)</span><span>Brakes</span><span>₹950</span><span>18</span></div>
            <div class="mockup-row mockup-row-5"><span>OL-5030</span><span>Engine oil 5W-30 (4L)</span><span>Fluids</span><span>₹1,400</span><span>32</span></div>
            <div class="mockup-row mockup-row-5"><span>FL-1090</span><span>Oil filter</span><span>Filters</span><span>₹180</span><span>4</span></div>
          </div>`
      },
      {
        id: 'adjustments', label: 'Stock Adjustments', icon: 'sync_alt',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Date</span><span>Part</span><span>Change</span><span>Reason</span></div>
            <div class="mockup-row"><span>24 Jul</span><span>Oil filter</span><span style="color:var(--series-8)">−6</span><span>Consumed on JC-1039</span></div>
            <div class="mockup-row"><span>23 Jul</span><span>Brake pad set</span><span style="color:var(--good)">+20</span><span>Purchase order #PO-118</span></div>
            <div class="mockup-row"><span>22 Jul</span><span>Engine oil 5W-30</span><span style="color:var(--series-8)">−8</span><span>Consumed — 3 job cards</span></div>
          </div>`
      },
      {
        id: 'alerts', label: 'Low Stock Alerts', icon: 'warning',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Part</span><span>On Hand</span><span>Reorder Level</span><span>Status</span></div>
            <div class="mockup-row"><span>Oil filter</span><span>4</span><span>10</span><span class="badge badge-open">Low Stock</span></div>
            <div class="mockup-row"><span>Wiper blade</span><span>2</span><span>8</span><span class="badge badge-open">Low Stock</span></div>
            <div class="mockup-row"><span>Brake pad set</span><span>18</span><span>10</span><span class="badge badge-done">OK</span></div>
          </div>`
      }
    ]
  },

  payroll: {
    name: 'Payroll & HR',
    icon: 'group',
    color: 'var(--series-7)',
    tagline: 'From hire to payslip, in one system.',
    features: [
      {
        id: 'employees', label: 'Employees', icon: 'group',
        html: `
          <div class="mockup-kpis mockup-kpis-bar">
            <div class="mockup-kpi mockup-kpi-bar" style="--bar-color:var(--series-1)"><div class="mockup-kpi-value">54</div><div class="mockup-kpi-label">Total Employees</div></div>
            <div class="mockup-kpi mockup-kpi-bar" style="--bar-color:var(--good)"><div class="mockup-kpi-value">48</div><div class="mockup-kpi-label">Active Employees</div></div>
            <div class="mockup-kpi mockup-kpi-bar" style="--bar-color:var(--series-2)"><div class="mockup-kpi-value">6</div><div class="mockup-kpi-label">Departments</div></div>
            <div class="mockup-kpi mockup-kpi-bar" style="--bar-color:var(--series-7)"><div class="mockup-kpi-value">4</div><div class="mockup-kpi-label">New This Month</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Name</span><span>Job Title</span><span>Department</span><span>Status</span></div>
            <div class="mockup-row"><span>R. Kumar</span><span>Technician</span><span>Workshop</span><span class="badge badge-done">Active</span></div>
            <div class="mockup-row"><span>A. Sharma</span><span>Service Advisor</span><span>Front Office</span><span class="badge badge-done">Active</span></div>
            <div class="mockup-row"><span>M. Nair</span><span>Technician</span><span>Workshop</span><span class="badge badge-open">On Leave</span></div>
          </div>`
      },
      {
        id: 'attendance', label: 'Attendance', icon: 'fact_check',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">42</div><div class="mockup-kpi-label">Present today</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">3</div><div class="mockup-kpi-label">On leave</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">2</div><div class="mockup-kpi-label">Late arrivals</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Employee</span><span>Role</span><span>Clock In</span><span>Status</span></div>
            <div class="mockup-row"><span>R. Kumar</span><span>Technician</span><span>09:02 AM</span><span class="badge badge-done">Present</span></div>
            <div class="mockup-row"><span>S. Rao</span><span>Technician</span><span>09:41 AM</span><span class="badge badge-qc">Late</span></div>
            <div class="mockup-row"><span>M. Nair</span><span>Technician</span><span>—</span><span class="badge badge-open">On Leave</span></div>
          </div>`
      },
      {
        id: 'payrollrun', label: 'Payroll Run', icon: 'payments',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">Payroll — July 2026</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">play_arrow</span>Run Payroll</span></div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head mockup-row-5"><span>Employee</span><span>Gross</span><span>Deductions</span><span>Net Pay</span><span>Status</span></div>
            <div class="mockup-row mockup-row-5"><span>R. Kumar</span><span>₹32,000</span><span>₹2,400</span><span>₹29,600</span><span class="badge badge-done">Paid</span></div>
            <div class="mockup-row mockup-row-5"><span>A. Sharma</span><span>₹28,000</span><span>₹2,100</span><span>₹25,900</span><span class="badge badge-done">Paid</span></div>
            <div class="mockup-row mockup-row-5"><span>M. Nair</span><span>₹24,000</span><span>₹1,800</span><span>₹22,200</span><span class="badge badge-qc">Processing</span></div>
          </div>`
      }
    ]
  },

  employeeportal: {
    name: 'Employee Self-Service Portal',
    icon: 'badge',
    color: 'var(--series-3)',
    tagline: 'A mobile-friendly portal where employees clock in, view payslips, request leave, and track their own reviews — without going through HR.',
    features: [
      {
        id: 'dashboard', label: 'Dashboard', icon: 'grid_view',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">3</div><div class="mockup-kpi-label">Jobs today</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">12</div><div class="mockup-kpi-label">Leave days left</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">₹29,600</div><div class="mockup-kpi-label">Last payslip</div></div>
          </div>
          <div class="mockup-widget-grid">
            <div class="mockup-widget">
              <h5>Today's Assignments</h5>
              <div class="mockup-schedule-row"><span>JC-1042 · Bay 2</span><span class="mockup-schedule-time">09:30 AM</span></div>
              <div class="mockup-schedule-row"><span>JC-1044 · Bay 4</span><span class="mockup-schedule-time">01:00 PM</span></div>
              <div class="mockup-quick-actions">
                <span class="mockup-quick-action"><span class="material-symbols-outlined">login</span>Clock In</span>
              </div>
            </div>
            <div class="mockup-widget">
              <h5>Notifications</h5>
              <div class="mockup-dot-stats">
                <div class="mockup-dot-stat-row"><span class="mockup-dot" style="background:var(--series-1)"></span>New payslip available</div>
                <div class="mockup-dot-stat-row"><span class="mockup-dot" style="background:var(--good)"></span>Leave request approved</div>
                <div class="mockup-dot-stat-row"><span class="mockup-dot" style="background:var(--series-4)"></span>Review cycle opens Aug 1</div>
              </div>
            </div>
          </div>`
      },
      {
        id: 'attendance', label: 'Attendance', icon: 'fact_check',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">My Attendance — July 2026</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">login</span>Clock In</span></div>
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">21</div><div class="mockup-kpi-label">Days present</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">1</div><div class="mockup-kpi-label">Late arrivals</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">2</div><div class="mockup-kpi-label">Leave days</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Date</span><span>Clock In</span><span>Clock Out</span><span>Status</span></div>
            <div class="mockup-row"><span>24 Jul</span><span>09:02 AM</span><span>06:05 PM</span><span class="badge badge-done">Present</span></div>
            <div class="mockup-row"><span>23 Jul</span><span>09:41 AM</span><span>06:00 PM</span><span class="badge badge-qc">Late</span></div>
            <div class="mockup-row"><span>22 Jul</span><span>—</span><span>—</span><span class="badge badge-open">On Leave</span></div>
          </div>`
      },
      {
        id: 'worksheet', label: 'My Worksheet', icon: 'construction',
        html: `
          <div class="mockup-worksheet-head">
            <div>
              <div class="mockup-worksheet-title">JC-1042 &nbsp;·&nbsp; KA-05 MJ 2231</div>
              <div class="mockup-worksheet-sub">Assigned to me &nbsp;•&nbsp; Bay 2 &nbsp;•&nbsp; Today, 09:30 AM</div>
            </div>
            <span class="badge badge-progress">Work in Progress</span>
          </div>
          <div class="mockup-stepper">
            <div class="mockup-step done"><span class="mockup-step-dot"></span>Assigned</div>
            <div class="mockup-step active"><span class="mockup-step-dot"></span>In Progress</div>
            <div class="mockup-step"><span class="mockup-step-dot"></span>Floor Review</div>
            <div class="mockup-step"><span class="mockup-step-dot"></span>Delivered</div>
          </div>
          <div class="mockup-widget">
            <h5>Tasks on this job</h5>
            <div class="mockup-schedule-row"><span>General service</span><span class="mockup-schedule-time">1.5 hrs</span></div>
            <div class="mockup-schedule-row"><span>Brake pad replacement</span><span class="mockup-schedule-time">0.8 hrs</span></div>
            <div class="mockup-quick-actions">
              <span class="mockup-quick-action"><span class="material-symbols-outlined">check_circle</span>Mark Task Complete</span>
            </div>
          </div>`
      },
      {
        id: 'payroll', label: 'Payroll', icon: 'payments',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">My Payroll History</span></div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Month</span><span>Gross</span><span>Deductions</span><span>Net Pay</span></div>
            <div class="mockup-row"><span>July 2026</span><span>₹32,000</span><span>₹2,400</span><span>₹29,600</span></div>
            <div class="mockup-row"><span>June 2026</span><span>₹32,000</span><span>₹2,400</span><span>₹29,600</span></div>
            <div class="mockup-row"><span>May 2026</span><span>₹30,500</span><span>₹2,280</span><span>₹28,220</span></div>
          </div>`
      },
      {
        id: 'mypayslips', label: 'My Payslips', icon: 'receipt_long',
        html: `
          <div class="mockup-worksheet-head">
            <div>
              <div class="mockup-worksheet-title">R. Kumar — Technician</div>
              <div class="mockup-worksheet-sub">Payslip for July 2026</div>
            </div>
            <span class="badge badge-done">Paid</span>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Component</span><span></span><span></span><span>Amount</span></div>
            <div class="mockup-row"><span>Basic + Allowances</span><span></span><span></span><span>₹32,000</span></div>
            <div class="mockup-row"><span>Statutory Deductions</span><span></span><span></span><span>−₹2,400</span></div>
            <div class="mockup-row"><span>Net Pay</span><span></span><span></span><span>₹29,600</span></div>
          </div>
          <div class="mockup-quick-actions" style="margin-top:14px;">
            <span class="mockup-quick-action"><span class="material-symbols-outlined">download</span>Download Payslip PDF</span>
          </div>`
      },
      {
        id: 'leaverequest', label: 'Leave Requests', icon: 'event_busy',
        html: `
          <div class="mockup-toolbar"><span class="mockup-toolbar-title">My Leave</span><span class="mockup-toolbar-btn"><span class="material-symbols-outlined">add</span>Request Leave</span></div>
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">12</div><div class="mockup-kpi-label">Days available</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">3</div><div class="mockup-kpi-label">Days used</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">1</div><div class="mockup-kpi-label">Pending approval</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Type</span><span>From</span><span>To</span><span>Status</span></div>
            <div class="mockup-row"><span>Casual Leave</span><span>02 Aug</span><span>03 Aug</span><span class="badge badge-qc">Pending</span></div>
            <div class="mockup-row"><span>Sick Leave</span><span>14 Jul</span><span>14 Jul</span><span class="badge badge-done">Approved</span></div>
          </div>`
      },
      {
        id: 'onboarding', label: 'My Onboarding', icon: 'task_alt',
        html: `
          <div class="mockup-widget">
            <h5>Onboarding Checklist</h5>
            <div class="mockup-stepper" style="flex-direction:column;align-items:flex-start;">
              <div class="mockup-step done"><span class="mockup-step-dot"></span>Submit ID &amp; documents</div>
              <div class="mockup-step done"><span class="mockup-step-dot"></span>Complete profile</div>
              <div class="mockup-step active"><span class="mockup-step-dot"></span>Safety training module</div>
              <div class="mockup-step"><span class="mockup-step-dot"></span>Manager introduction</div>
            </div>
          </div>`
      },
      {
        id: 'myreviews', label: 'My Reviews', icon: 'rate_review',
        html: `
          <div class="mockup-worksheet-head">
            <div>
              <div class="mockup-worksheet-title">Performance Review — H1 2026</div>
              <div class="mockup-worksheet-sub">Reviewer: A. Sharma &nbsp;•&nbsp; Cycle closes 31 Jul 2026</div>
            </div>
            <span class="badge badge-qc">In Review</span>
          </div>
          <div class="mockup-widget">
            <h5>Goal Progress</h5>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Jobs completed on time</span><span>85%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:85%"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Customer satisfaction score</span><span>92%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:92%;background:var(--good)"></div></div></div>
          </div>`
      }
    ]
  },

  accounting: {
    name: 'Accounting & Reporting',
    icon: 'account_balance',
    color: 'var(--series-6)',
    tagline: 'Close the loop from operations to the general ledger.',
    features: [
      {
        id: 'reporting', label: 'Management Reporting', icon: 'insights',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">₹4.2L</div><div class="mockup-kpi-label">Total Revenue</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">₹86K</div><div class="mockup-kpi-label">Outstanding</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">3.2 hrs</div><div class="mockup-kpi-label">Avg Turnaround</div></div>
          </div>
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Technician</span><span>Jobs Completed</span><span>Avg Turnaround</span><span>Revenue</span></div>
            <div class="mockup-row"><span>R. Kumar</span><span>42</span><span>2.8 hrs</span><span>₹1.1L</span></div>
            <div class="mockup-row"><span>S. Rao</span><span>38</span><span>3.1 hrs</span><span>₹98K</span></div>
          </div>`
      },
      {
        id: 'chartofaccounts', label: 'Chart of Accounts', icon: 'account_tree',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Code</span><span>Account Name</span><span>Type</span><span>Balance</span></div>
            <div class="mockup-row"><span>1001</span><span>Cash &amp; Bank</span><span>Asset</span><span>₹8.4L</span></div>
            <div class="mockup-row"><span>4001</span><span>Service Revenue</span><span>Income</span><span>₹4.2L</span></div>
            <div class="mockup-row"><span>5001</span><span>Parts Expense</span><span>Expense</span><span>₹1.6L</span></div>
          </div>`
      },
      {
        id: 'trialbalance', label: 'Trial Balance', icon: 'balance',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Account</span><span></span><span>Debit</span><span>Credit</span></div>
            <div class="mockup-row"><span>Cash &amp; Bank</span><span></span><span>₹8,40,000</span><span>—</span></div>
            <div class="mockup-row"><span>Service Revenue</span><span></span><span>—</span><span>₹4,20,000</span></div>
            <div class="mockup-row"><span>Parts Expense</span><span></span><span>₹1,60,000</span><span>—</span></div>
          </div>`
      }
    ]
  },

  delivery: {
    name: 'Delivery & Scheduling',
    icon: 'local_shipping',
    color: 'var(--series-5)',
    tagline: 'Coordinate the last mile alongside the shop floor.',
    features: [
      {
        id: 'deliverylog', label: 'Delivery Log', icon: 'local_shipping',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Job Card</span><span>Vehicle</span><span>Scheduled</span><span>Status</span></div>
            <div class="mockup-row"><span>JC-1039</span><span>KA-03 XY 4410</span><span>Today, 5:00 PM</span><span class="badge badge-progress">Out for Delivery</span></div>
            <div class="mockup-row"><span>JC-1035</span><span>KA-01 AB 9087</span><span>Today, 3:30 PM</span><span class="badge badge-done">Delivered</span></div>
            <div class="mockup-row"><span>JC-1044</span><span>KA-05 QW 7712</span><span>Tomorrow, 10:00 AM</span><span class="badge badge-open">Scheduled</span></div>
          </div>`
      },
      {
        id: 'capacity', label: 'Workshop Capacity', icon: 'speed',
        html: `
          <div class="mockup-widget">
            <h5>Bay Utilisation — Today</h5>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Bay 1</span><span>90%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:90%"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Bay 2</span><span>60%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:60%"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Bay 3</span><span>15%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:15%"></div></div></div>
            <div class="mockup-progress"><div class="mockup-progress-label"><span>Bay 4</span><span>100%</span></div><div class="mockup-progress-track"><div class="mockup-progress-fill" style="width:100%;background:var(--series-8)"></div></div></div>
          </div>`
      }
    ]
  },

  security: {
    name: 'Security & Multi-Tenancy',
    icon: 'lock',
    color: 'var(--series-8)',
    tagline: 'Enterprise-grade controls from day one.',
    features: [
      {
        id: 'roles', label: 'Roles & Permissions', icon: 'admin_panel_settings',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Role</span><span>Users</span><span>Permissions</span><span>Scope</span></div>
            <div class="mockup-row"><span>Admin</span><span>3</span><span>All</span><span>Company-wide</span></div>
            <div class="mockup-row"><span>Service Advisor</span><span>8</span><span>Job Cards, Customers</span><span>Branch</span></div>
            <div class="mockup-row"><span>Technician</span><span>22</span><span>Job Cards (assigned)</span><span>Branch</span></div>
          </div>`
      },
      {
        id: 'auditlogs', label: 'Audit Logs', icon: 'history',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Time</span><span>User</span><span>Action</span><span>Entity</span></div>
            <div class="mockup-row"><span>10:42 AM</span><span>A. Sharma</span><span>Status change</span><span>JC-1042</span></div>
            <div class="mockup-row"><span>10:15 AM</span><span>R. Kumar</span><span>Labour added</span><span>JC-1042</span></div>
            <div class="mockup-row"><span>09:58 AM</span><span>Admin</span><span>Role updated</span><span>User #118</span></div>
          </div>`
      }
    ]
  },

  platform: {
    name: 'Platform & Operations',
    icon: 'settings',
    color: '#5a5a58',
    tagline: 'Built to run reliably, not just to demo well.',
    features: [
      {
        id: 'pipeline', label: 'Build Pipeline', icon: 'rocket_launch',
        html: `
          <div class="mockup-table">
            <div class="mockup-row mockup-row-head"><span>Stage</span><span>Environment</span><span>Duration</span><span>Status</span></div>
            <div class="mockup-row"><span>Build</span><span>CI</span><span>1m 40s</span><span class="badge badge-done">Passed</span></div>
            <div class="mockup-row"><span>Test + Coverage Gate</span><span>CI</span><span>3m 12s</span><span class="badge badge-done">Passed</span></div>
            <div class="mockup-row"><span>Deploy</span><span>Production</span><span>52s</span><span class="badge badge-done">Passed</span></div>
          </div>`
      },
      {
        id: 'metrics', label: 'Platform Metrics', icon: 'monitoring',
        html: `
          <div class="mockup-kpis">
            <div class="mockup-kpi"><div class="mockup-kpi-value">99.9%</div><div class="mockup-kpi-label">Uptime</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">142</div><div class="mockup-kpi-label">Requests / sec</div></div>
            <div class="mockup-kpi"><div class="mockup-kpi-value">87%</div><div class="mockup-kpi-label">Cache hit rate</div></div>
          </div>`
      }
    ]
  }

};
