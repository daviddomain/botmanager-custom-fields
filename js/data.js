const StopLossData = [
  {
    slot: 'fieldset-child',
    type: 'input',
    name: 'stop-loss',
    value: '0',
    uom: '%',
    label: 'Stop Loss (%)',
    tooltip:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    slot: 'fieldset-child',
    type: 'select',
    name: 'stop-loss-action',
    label: 'Stop Loss action',
    value: 'dog',
    tooltip:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    data: '{"options": [ {"name": "Please choose a pet", "value": ""}, {"name": "Dog", "value": "dog"}, {"name": "Cat", "value": "cat"}, {"name": "Hamster", "value": "hamster"}, {"name": "Goldfish", "value": "goldfish"}]}',
  },
  {
    slot: 'fieldset-child',
    type: 'switch',
    name: 'stop-loss-timeout',
    label: 'Stop Loss Timeout',
    tooltip:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    slot: 'fieldset-child',
    type: 'switch',
    name: 'foo-bar',
    label: 'Foo Bar',
    tooltip:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    checked: true,
  },
];

const Bla = [
  {
    slot: 'fieldset-child',
    type: 'input',
    name: 'stop-xxx',
    value: '0',
    uom: '%',
    label: 'Stop Loss (%)',
    tooltip:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
];

export { StopLossData, Bla };
