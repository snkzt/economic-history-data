let datasetGdp = [];
let datasetDomesticCredit = [];
let datasetPopulation = [];
let year;
let byYearBraGdp;
let byYearChnGdp;
let byYearCypGdp;
let byYearDeuGdp;
let byYearGbrGdp;
let byYearHkgGdp;
let byYearIndGdp;
let byYearJpnGdp;
let byYearRusGdp;
let byYearSgpGdp;
let byYearThaGdp;
let byYearUsaGdp;
let byYearZafGdp;
let byYearBraDc;
let byYearChnDc;
let byYearCypDc;
let byYearDeuDc;
let byYearGbrDc;
let byYearHkgDc;
let byYearIndDc;
let byYearJpnDc;
let byYearRusDc;
let byYearSgpDc;
let byYearThaDc;
let byYearUsaDc;
let byYearZafDc;
let byYearBraPl;
let byYearChnPl;
let byYearCypPl;
let byYearDeuPl;
let byYearGbrPl;
let byYearHkgPl;
let byYearIndPl;
let byYearJpnPl;
let byYearRusPl;
let byYearSgpPl;
let byYearThaPl;
let byYearUsaPl;
let byYearZafPl;
let dataBubble;
let dataPie;
expGdp();
expDc();
expPl();
yearDefault();

const yearSelector = document.getElementById('year-slider');
const spanValue = document.getElementById('current-value');
yearSelector.addEventListener('input', sliderInput);

// GDP data with API and take out each countries' data
async function expGdp() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/NY.Gdp.MKTP.PP.KD?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetGdp = data[1])
}

// Importing Domestic Credit data with API and take out each countries' data
async function expDc() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/FS.AST.PRVT.GD.ZS?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetDomesticCredit = data[1])
}

// Importing Population data with API and take out each countries' data
async function expPl() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/SP.POP.TOTL?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetPopulation = data[1])
}

async function yearDefault() {
  await expGdp()
  await expDc()
  await expPl()
  setCurrentValue(yearSelector.value);
}

function sliderInput (event) {
  setCurrentValue(event.target.value);
}

function setCurrentValue(val) {
  spanValue.innerText = val;
  year = val;
  selectedYear();
}

const returnValue = (item) => {
  return item.value;
}

function countryGdpbyYear() {
  const byCountryBraDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  byYearBraGdp = byCountryBraDcGdp.filter(filterByYear).map(returnValue);

  const byCountryChnDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  byYearChnGdp = byCountryChnDcGdp.filter(filterByYear).map(returnValue);

  const byCountryCypDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  byYearCypGdp = byCountryCypDcGdp.filter(filterByYear).map(returnValue);

  const byCountryDeuDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  byYearDeuGdp = byCountryDeuDcGdp.filter(filterByYear).map(returnValue);

  const byCountryGbrDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  byYearGbrGdp = byCountryGbrDcGdp.filter(filterByYear).map(returnValue);

  const byCountryHkgDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  byYearHkgGdp = byCountryHkgDcGdp.filter(filterByYear).map(returnValue);

  const byCountryIndDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  byYearIndGdp = byCountryIndDcGdp.filter(filterByYear).map(returnValue);

  const byCountryJpnDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  byYearJpnGdp = byCountryJpnDcGdp.filter(filterByYear).map(returnValue);

  const byCountryRusDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  byYearRusGdp = byCountryRusDcGdp.filter(filterByYear).map(returnValue);

  const byCountrySgpDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  byYearSgpGdp = byCountrySgpDcGdp.filter(filterByYear).map(returnValue);

  const byCountryThaDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  byYearThaGdp = byCountryThaDcGdp.filter(filterByYear).map(returnValue);

  const byCountryUsaDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  byYearUsaGdp = byCountryUsaDcGdp.filter(filterByYear).map(returnValue);

  const byCountryZafDcGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  byYearZafGdp = byCountryZafDcGdp.filter(filterByYear).map(returnValue);
}

function countryDcbyYear() {
  const byCountryBraDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  byYearBraDc = byCountryBraDc.filter(filterByYear).map(returnValue);

  const byCountryChnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  byYearChnDc = byCountryChnDc.filter(filterByYear).map(returnValue);

  const byCountryCypDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  byYearCypDc = byCountryCypDc.filter(filterByYear).map(returnValue);

  const byCountryDeuDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  byYearDeuDc = byCountryDeuDc.filter(filterByYear).map(returnValue);

  const byCountryGbrDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  byYearGbrDc = byCountryGbrDc.filter(filterByYear).map(returnValue);

  const byCountryHkgDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  byYearHkgDc = byCountryHkgDc.filter(filterByYear).map(returnValue);

  const byCountryIndDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  byYearIndDc = byCountryIndDc.filter(filterByYear).map(returnValue);

  const byCountryJpnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  byYearJpnDc = byCountryJpnDc.filter(filterByYear).map(returnValue);

  const byCountryRusDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  byYearRusDc = byCountryRusDc.filter(filterByYear).map(returnValue);

  const byCountrySgpDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  byYearSgpDc = byCountrySgpDc.filter(filterByYear).map(returnValue);

  const byCountryThaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  byYearThaDc = byCountryThaDc.filter(filterByYear).map(returnValue);

  const byCountryUsaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  byYearUsaDc = byCountryUsaDc.filter(filterByYear).map(returnValue);

  const byCountryZafDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  byYearZafDc = byCountryZafDc.filter(filterByYear).map(returnValue);
}

function countryPlbyYear() {
  const byCountryBraPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  byYearBraPl = byCountryBraPl.filter(filterByYear).map(returnValue);

  const byCountryChnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  byYearChnPl = byCountryChnPl.filter(filterByYear).map(returnValue);

  const byCountryCypPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  byYearCypPl = byCountryCypPl.filter(filterByYear).map(returnValue);

  const byCountryDeuPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  byYearDeuPl = byCountryDeuPl.filter(filterByYear).map(returnValue);

  const byCountryGbrPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  byYearGbrPl = byCountryGbrPl.filter(filterByYear).map(returnValue);

  const byCountryHkgPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  byYearHkgPl = byCountryHkgPl.filter(filterByYear).map(returnValue);

  const byCountryIndPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  byYearIndPl = byCountryIndPl.filter(filterByYear).map(returnValue);

  const byCountryJpnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  byYearJpnPl = byCountryJpnPl.filter(filterByYear).map(returnValue);

  const byCountryRusPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  byYearRusPl = byCountryRusPl.filter(filterByYear).map(returnValue);

  const byCountrySgpPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  byYearSgpPl = byCountrySgpPl.filter(filterByYear).map(returnValue);

  const byCountryThaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  byYearThaPl = byCountryThaPl.filter(filterByYear).map(returnValue);

  const byCountryUsaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  byYearUsaPl = byCountryUsaPl.filter(filterByYear).map(returnValue);

  const byCountryZafPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  byYearZafPl = byCountryZafPl.filter(filterByYear).map(returnValue);
}

function selectedYear() {
  countryGdpbyYear();
  countryDcbyYear();
  countryPlbyYear();
  drawChart(chartDrawBubble);
  drawChart(chartDrawPie);
}

function filterByCountryCode(item, code) {
  if (item.countryiso3code === code) {
    return item.value;
  }         
}

function filterByYear(item) {
  if (item.date === year) {
    return item.value;
  }         
}

function pieCal(yearGdp, yearDc, yearPl) {
  return Math.round((yearGdp*(yearDc/100))/yearPl);
}

function drawChart(chart) {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(chart);
}

function chartDrawBubble() {
  dataBubble = google.visualization.arrayToDataTable([
    ['ID', 'GDP($)', 'Domestic Private Credit (% of GDP)', 'Country', 'Population'],
    ['BRA', byYearBraGdp[0], byYearBraDc[0], 'Brasil', byYearBraPl[0]],
    ['CHN', byYearChnGdp[0], byYearChnDc[0], 'China', byYearChnPl[0]],
    ['CYP', byYearCypGdp[0], byYearCypDc[0], 'Cyprus', byYearCypPl[0]],
    ['DEU', byYearDeuGdp[0], byYearDeuDc[0], 'Germany', byYearDeuPl[0]],
    ['GBR', byYearGbrGdp[0], byYearGbrDc[0], 'United Kingdom', byYearGbrPl[0]],
    ['HKG', byYearHkgGdp[0], byYearHkgDc[0], 'Hong Kong', byYearHkgPl[0]],
    ['IND', byYearIndGdp[0], byYearIndDc[0], 'India', byYearIndPl[0]],
    ['JPN', byYearJpnGdp[0], byYearJpnDc[0], 'Japan', byYearJpnPl[0]],
    ['RUS', byYearRusGdp[0], byYearRusDc[0], 'Russia', byYearRusPl[0]],
    ['SGP', byYearSgpGdp[0], byYearSgpDc[0], 'Singapore', byYearSgpPl[0]],
    ['THA', byYearThaGdp[0], byYearThaDc[0], 'Thailand', byYearThaPl[0]],
    ['USA', byYearUsaGdp[0], byYearUsaDc[0], 'United States', byYearUsaPl[0]],
    ['ZAF', byYearZafGdp[0], byYearZafDc[0], 'South Africa', byYearZafPl[0]]
  ]);
  const optionsBubble = {
  title: `Correlation between GDP, Domestic Private Credit to GDP and population of world 13 countries`, fontSize: 18,
  hAxis: {title: 'GDP ($)'},
  vAxis: {title: 'Domestic Private Credit (% Of GDP)'},
  bubble: {
    textStyle: {
      fontSize: 11,
      color: 'white',
      auraColor: 'none'
    }
  }
  }
  const chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
  chart.draw(dataBubble, optionsBubble);
}

function chartDrawPie() {
  dataPie = google.visualization.arrayToDataTable([
    ['Country', 'Average amount of Domestic Private Credit($)'],
    ['Brasil', pieCal(byYearBraGdp, byYearBraDc, byYearBraPl)],
    ['China', pieCal(byYearChnGdp, byYearChnDc, byYearChnPl)],
    ['Cyprus', pieCal(byYearCypGdp, byYearCypDc, byYearCypPl)],
    ['Germany', pieCal(byYearDeuGdp, byYearDeuDc, byYearDeuPl)],
    ['United Kingdom', pieCal(byYearGbrGdp, byYearGbrDc, byYearGbrPl)],
    ['Hong Kong', pieCal(byYearHkgGdp, byYearHkgDc, byYearHkgPl)],
    ['India',pieCal(byYearIndGdp, byYearIndDc, byYearIndPl)],
    ['Japan', pieCal(byYearJpnGdp, byYearJpnDc, byYearJpnPl)],
    ['Russia', pieCal(byYearRusGdp, byYearRusDc, byYearRusPl)],
    ['Singapore',pieCal(byYearSgpGdp, byYearSgpDc, byYearSgpPl)],
    ['Thailand', pieCal(byYearThaGdp, byYearThaDc, byYearThaPl)],
    ['United States', pieCal(byYearUsaGdp, byYearUsaDc, byYearUsaPl)],
    ['South Africa', pieCal(byYearZafGdp, byYearZafDc, byYearZafPl)]
  ]);
  const optionsPie = {
    title: `Average amount of Domestic Private Credit($) to GDP($) per person in 13 countries`, fontSize: 15,
    chartArea: {left: 30, right: 30},
    legend: {alignment: 'center'},
    pieSliceText: 'value'
  }
  const chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(dataPie, optionsPie);
}