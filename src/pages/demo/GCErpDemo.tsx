import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  Truck, 
  BarChart3, 
  Plus, 
  History, 
  Settings, 
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Boxes
} from 'lucide-react';
import Section from '../../components/Section';
import { cn } from '../../lib/utils';
import { createEvent, InventoryView, BaseEvent } from '../../lib/demoTypes';

export default function GCErpDemo() {
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [inventory, setInventory] = useState<InventoryView[]>([]);
  const [events, setEvents] = useState<BaseEvent[]>([]);
  const [isSeeding, setIsSeeding] = useState(false);

  // Initialize Demo
  const startDemo = () => {
    setIsSeeding(true);
    const newTenantId = `demo-erp-${Math.random().toString(36).substring(7)}`;
    
    // Seed initial data
    const p1Id = 'prod-1';
    const p2Id = 'prod-2';
    
    const initialInventory: InventoryView[] = [
      {
        productId: p1Id,
        name: 'Industrial Steel Rod',
        sku: 'ISR-001',
        availableQty: 500,
        reservedQty: 50,
        lastUpdated: Date.now()
      },
      {
        productId: p2Id,
        name: 'Hydraulic Valve',
        sku: 'HV-442',
        availableQty: 120,
        reservedQty: 15,
        lastUpdated: Date.now()
      }
    ];

    const initialEvents = [
      createEvent(newTenantId, p1Id, 'product', 'product_created', { name: 'Industrial Steel Rod', sku: 'ISR-001' }),
      createEvent(newTenantId, p1Id, 'inventory', 'inventory_received', { quantity: 500 }),
      createEvent(newTenantId, p2Id, 'product', 'product_created', { name: 'Hydraulic Valve', sku: 'HV-442' }),
      createEvent(newTenantId, p2Id, 'inventory', 'inventory_received', { quantity: 120 }),
    ];

    {
      setInventory(initialInventory);
      setEvents(initialEvents);
      setTenantId(newTenantId);
      setIsSeeding(false);
    }
  };

  const handleReceiveStock = (productId: string) => {
    const qty = 50;
    const event = createEvent(tenantId!, productId, 'inventory', 'inventory_received', { quantity: qty });
    
    setEvents(previous => [event, ...previous]);
    setInventory(prev => prev.map(item => 
      item.productId === productId 
        ? { ...item, availableQty: item.availableQty + qty, lastUpdated: Date.now() }
        : item
    ));
  };

  const handleAllocateStock = (productId: string) => {
    const qty = 10;
    if (!tenantId || !inventory.some(item => item.productId === productId && item.availableQty >= qty)) return;
    const event = createEvent(tenantId!, productId, 'inventory', 'inventory_allocated', { quantity: qty });
    
    setEvents(previous => [event, ...previous]);
    setInventory(prev => prev.map(item => 
      item.productId === productId 
        ? { ...item, availableQty: item.availableQty - qty, reservedQty: item.reservedQty + qty, lastUpdated: Date.now() }
        : item
    ));
  };

  if (!tenantId) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <SEO 
          title="GC-ERP Demo | Gotham Coders"
          description="Interactive demo of our event-driven ERP system. Experience real-time inventory tracking and audit-safe transactions."
          pathname="/demo/gc-erp"
        />
        <div className="max-w-md w-full p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl text-center space-y-8">
          <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto">
            <Boxes className="w-10 h-10 text-zinc-900 dark:text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">GC-ERP Demo</h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              Experience our event-driven manufacturing ERP. 
              This browser-only simulation uses sample data and resets when you leave.
            </p>
          </div>
          <button
            onClick={startDemo}
            disabled={isSeeding}
            className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSeeding ? 'Initializing Sandbox...' : 'Start Interactive Demo'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Dashboard */}
          <div className="flex-1 min-w-0 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">Inventory Dashboard</h2>
                <p className="text-sm text-zinc-500 font-mono">TENANT_ID: {tenantId}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setTenantId(null)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Reset Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Products', value: inventory.length, icon: Package, color: 'text-blue-500' },
                { label: 'Stock Value', value: '$124,500', icon: BarChart3, color: 'text-emerald-500' },
                { label: 'Active Orders', value: '12', icon: Truck, color: 'text-amber-500' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={cn("w-6 h-6", stat.color)} />
                    <span className="text-[10px] font-mono text-zinc-400">SIMULATION</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Inventory Table */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <h3 className="font-bold text-zinc-900 dark:text-white">Current Stock</h3>

              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      <th className="px-6 py-4">Product</th>
                      <th className="px-6 py-4">SKU</th>
                      <th className="px-6 py-4">Available</th>
                      <th className="px-6 py-4">Reserved</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {inventory.map((item) => (
                      <tr key={item.productId} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-bold text-zinc-900 dark:text-white">{item.name}</p>
                          <p className="text-xs text-zinc-500">Updated {new Date(item.lastUpdated).toLocaleTimeString()}</p>
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-zinc-500">{item.sku}</td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "px-2 py-1 rounded-md text-xs font-bold",
                            item.availableQty < 100 ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"
                          )}>
                            {item.availableQty}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-zinc-500">{item.reservedQty}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => handleReceiveStock(item.productId)}
                              className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600 rounded-lg transition-colors"
                              title="Receive Stock"
                            >
                              <ArrowDownRight className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleAllocateStock(item.productId)}
                              disabled={item.availableQty < 10}
                              className="p-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-600 rounded-lg transition-colors"
                              title="Allocate Stock"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Event Log Sidebar */}
          <div className="w-full lg:w-96 space-y-6">
            <div className="p-6 bg-zinc-900 text-white rounded-2xl shadow-xl border border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-zinc-400" />
                  <h3 className="font-bold tracking-tight">Event Stream</h3>
                </div>
                <div className="px-2 py-0.5 rounded bg-zinc-800 text-[8px] font-mono text-zinc-500">DEMO</div>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {events.map((event) => (
                    <motion.div
                      key={event.eventId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 bg-zinc-800/50 border border-zinc-700 rounded-xl space-y-1 relative overflow-hidden group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">{event.eventType}</span>
                        <span className="text-[8px] font-mono text-zinc-600">{new Date(event.metadata.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-xs font-medium text-zinc-300">
                        {event.aggregateType === 'product' ? `New product: ${event.payload.name}` : 
                         event.eventType === 'inventory_received' ? `Received ${event.payload.quantity} units` :
                         `Allocated ${event.payload.quantity} units`}
                      </p>
                      <div className="text-[8px] font-mono text-zinc-600 truncate">ID: {event.eventId}</div>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-600 group-hover:bg-white transition-colors" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                <p className="text-[10px] font-mono text-zinc-600">
                  EVENT_DRIVEN_ARCHITECTURE_V2
                </p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Demo Guide</h4>
              <ul className="space-y-3">
                {[
                  'Click the arrows to simulate stock operations',
                  'Watch the Event Stream update in real-time',
                  'Notice how read models derive from events',
                  'Try resetting to see the seed engine in action'
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-xs text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
