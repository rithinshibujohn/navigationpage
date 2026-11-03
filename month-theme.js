const monthThemes = [
  { month: 'january', label: 'January · A bright new year' },
  { month: 'february', label: 'February · Soft rose' },
  { month: 'march', label: 'March · Fresh greens' },
  { month: 'april', label: 'April · Spring light' },
  { month: 'may', label: 'May · Citrus days' },
  { month: 'june', label: 'June · Monsoon blues' },
  { month: 'july', label: 'July · Rainy-day calm' },
  { month: 'august', label: 'August · Ocean breeze' },
  { month: 'september', label: 'September · Misty mornings' },
  { month: 'october', label: 'October · Autumn warmth' },
  { month: 'november', label: 'November · Golden hour' },
  { month: 'december', label: 'December · Merry Christmas' }
];

const currentTheme = monthThemes[new Date().getMonth()];
document.body.dataset.month = currentTheme.month;
document.getElementById('month-theme-label').textContent = currentTheme.label;
