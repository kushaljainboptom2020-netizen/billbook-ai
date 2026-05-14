import React from 'react';
import { Receipt, Plus, Search, FileText, Users, TrendingUp, BarChart3, IndianRupee, Filter } from 'lucide-react';

export default function LaptopMockup() {
  return (
    <div className="relative bb-animate-float" data-testid="laptop-mockup">
      {/* Floating cards — background accents */}
      <FloatingStat
        className="absolute -top-4 -left-4 lg:-left-10 z-20 hidden sm:flex"
        icon={IndianRupee}
        label="This Month"
        value="₹1,24,580"
        delta="+18%"
      />
      <FloatingStat
        className="absolute -bottom-2 -right-2 lg:-right-8 z-20 hidden sm:flex"
        icon={FileText}
        label="Invoices"
        value="47 sent"
        delta="+12"
      />

      {/* Laptop frame */}
      <div className="relative bb-laptop-shadow">
        {/* Screen */}
        <div className="relative bg-slate-900 rounded-t-2xl p-2 sm:p-3 border border-slate-800">
          <div className="bg-white rounded-lg overflow-hidden aspect-[16/10]">
            <DashboardUI />
          </div>
        </div>
        {/* Base */}
        <div className="relative h-3 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-xl shadow-lg">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-1.5 bg-slate-700 rounded-b-md" />
        </div>
        {/* Reflection */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-blue-600/20 blur-xl rounded-full" />
      </div>
    </div>
  );
}

function FloatingStat({ className = '', icon: Icon, label, value, delta }) {
  return (
    <div className={`${className} items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xl`}>
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">{label}</p>
        <p className="text-sm font-bold text-slate-900">{value}</p>
      </div>
      <span className="ml-2 text-[11px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">{delta}</span>
    </div>
  );
}

/* Stylized dashboard UI inside the laptop */
function DashboardUI() {
  return (
    <div className="w-full h-full flex text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside className="hidden sm:flex w-[18%] flex-col bg-slate-50 border-r border-slate-200 px-3 py-3 gap-1">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
            <Receipt className="w-3 h-3 text-white" />
          </div>
          <span className="text-[10px] font-bold">BillBook AI</span>
        </div>
        <div className="h-px bg-slate-200 my-1" />
        <SidebarItem icon={BarChart3} label="Dashboard" />
        <SidebarItem icon={FileText} label="Invoices" active />
        <SidebarItem icon={Users} label="Clients" />
        <SidebarItem icon={TrendingUp} label="Expenses" />
        <SidebarItem icon={IndianRupee} label="GST" />
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <h3 className="text-[11px] sm:text-xs font-bold">Invoices</h3>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">47</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md border border-slate-200 text-[9px] text-slate-500">
              <Search className="w-2.5 h-2.5" />
              Search
            </div>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-600 text-white text-[9px] font-bold">
              <Plus className="w-2.5 h-2.5" /> New
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="px-3 sm:px-4 py-3 grid grid-cols-3 gap-2">
          <StatCard label="Paid" value="₹84,200" color="green" />
          <StatCard label="Pending" value="₹32,180" color="amber" />
          <StatCard label="Overdue" value="₹8,200" color="red" />
        </div>

        {/* Filter chips */}
        <div className="px-3 sm:px-4 pb-2 flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-100 text-[9px] font-semibold text-slate-600">
            <Filter className="w-2.5 h-2.5" /> All
          </div>
          <div className="px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[9px] font-semibold">Paid</div>
          <div className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[9px] font-semibold text-slate-600">Pending</div>
        </div>

        {/* Invoice rows */}
        <div className="px-3 sm:px-4 pb-3 space-y-1.5 overflow-hidden">
          {invoices.map((inv, i) => (
            <InvoiceRow key={i} {...inv} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] font-semibold ${
        active ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600'
      }`}
    >
      <Icon className="w-3 h-3" />
      {label}
    </div>
  );
}

function StatCard({ label, value, color }) {
  const colors = {
    green: 'bg-green-50 text-green-700 border-green-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    red: 'bg-red-50 text-red-700 border-red-100',
  };
  return (
    <div className={`rounded-lg border px-2 py-1.5 ${colors[color]}`}>
      <p className="text-[8px] font-semibold uppercase opacity-80">{label}</p>
      <p className="text-[11px] sm:text-sm font-bold">{value}</p>
    </div>
  );
}

const invoices = [
  { id: 'INV-1042', client: 'Sharma Traders', amount: '₹18,500', status: 'Paid', statusColor: 'green' },
  { id: 'INV-1041', client: 'Ravi Electronics', amount: '₹7,250', status: 'Pending', statusColor: 'amber' },
  { id: 'INV-1040', client: 'Mahalakshmi Foods', amount: '₹32,000', status: 'Paid', statusColor: 'green' },
  { id: 'INV-1039', client: 'Verma Textiles', amount: '₹4,890', status: 'Overdue', statusColor: 'red' },
];

function InvoiceRow({ id, client, amount, status, statusColor }) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
  };
  return (
    <div className="flex items-center justify-between px-2 py-1.5 rounded-md border border-slate-100 hover:bg-slate-50">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
          <FileText className="w-3 h-3" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold leading-tight">{id}</p>
          <p className="text-[9px] text-slate-500 truncate">{client}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold">{amount}</span>
        <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded ${colors[statusColor]}`}>{status}</span>
      </div>
    </div>
  );
}
