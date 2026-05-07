window.addEventListener('load', () => {
  const lineOptions = {
    color: '#7f8c8d',
    size: 2,
    path: 'grid',
    startSocket: 'left',
    endSocket: 'right',
    endPlug: 'arrow3',
    endPlugSize: 1.5
  };

  const connect = (startId, endId, options = {}) => {
    new LeaderLine(
      document.getElementById(startId),
      document.getElementById(endId),
      { ...lineOptions, ...options }
    );
  };

  connect('n2', 'n1');
  connect('n3', 'n2', { endPlug: 'behind', startSocket: 'left', endSocket: 'left' });

  connect('n4', 'n1', { endPlug: 'arrow3', startSocket: 'left', endSocket: 'bottom' });
  connect('n4', 'n12', { endPlug: 'behind', startSocket: 'left', endSocket: 'left' });
  connect('n4', 'n13', { endPlug: 'behind', startSocket: 'left', endSocket: 'left' });

  connect('n5', 'n4');
  connect('n6', 'n4', { endPlug: 'arrow3', startSocket: 'left', endSocket: 'bottom' });
  connect('n4', 'n7', { endPlug: 'behind', startSocket: 'bottom', endSocket: 'left' });
  connect('n11', 'n4', { endPlug: 'arrow3', startSocket: 'left', endSocket: 'bottom' });

  connect('n8', 'n7');
  connect('n8', 'n9', { endPlug: 'behind', startSocket: 'left', endSocket: 'left' });
  connect('n10', 'n8', { endPlug: 'arrow3', startSocket: 'right', endSocket: 'right' });
  connect('n8', 'n10', { endPlug: 'behind', startSocket: 'left', endSocket: 'left' });
});