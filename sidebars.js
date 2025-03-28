module.exports = {
  docs: [
    {
      type: 'category',
      label: 'NOVA34 Documentation',
      collapsed: false,
      items: [
        'oreview', // This will point to `docs/oreview.md`
        {
          type: 'category',
          label: 'NOVA34 Schematics',
          collapsed: true, // This allows it to be collapsed initially
          items: [
            'schematics/cover-block',
            'schematics/power-management',
            'schematics/processor-memory',
            'schematics/connectivity',
            'schematics/peripherals',
          ],
        },
        {
          type: 'category',
          label: 'PCB',
          collapsed: true, // This allows it to be collapsed initially
          items: [
            'pcb/comingsoon', // This will point to `docs/pcb/comingsoon.md`
          ],
        },
      ],
    },
  ],
};
