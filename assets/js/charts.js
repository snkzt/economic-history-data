let datasetGdp = [];
let datasetDomesticCredit = [];
let datasetPopulation = [];
let year;
let dataBubble;
let dataPie;
const yearSelector = document.getElementById('year-slider');
const spanValue = document.getElementById('current-value');
yearSelector.addEventListener('input', sliderInput);
const [bra, chn, cyp, deu, gbr, hkg, ind, jpn, rus, sgp, tha, usa, zaf] = Array(13).fill(null).map(() => {
  return {
    gdp: [0],
    dc: [0],
    pl: [0],
  }
});
expGdp();
expDc();
expPl();
yearDefault();

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
  const byCountryBraGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  bra.gdp = byCountryBraGdp.filter(filterByYear).map(returnValue);

  const byCountryChnGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  chn.gdp = byCountryChnGdp.filter(filterByYear).map(returnValue);

  const byCountryCypGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  cyp.gdp = byCountryCypGdp.filter(filterByYear).map(returnValue);

  const byCountryDeuGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  deu.gdp = byCountryDeuGdp.filter(filterByYear).map(returnValue);

  const byCountryGbrGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  gbr.gdp = byCountryGbrGdp.filter(filterByYear).map(returnValue);

  const byCountryHkgGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  hkg.gdp = byCountryHkgGdp.filter(filterByYear).map(returnValue);

  const byCountryIndGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  ind.gdp = byCountryIndGdp.filter(filterByYear).map(returnValue);

  const byCountryJpnGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  jpn.gdp = byCountryJpnGdp.filter(filterByYear).map(returnValue);

  const byCountryRusGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  rus.gdp = byCountryRusGdp.filter(filterByYear).map(returnValue);

  const byCountrySgpGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  sgp.gdp = byCountrySgpGdp.filter(filterByYear).map(returnValue);

  const byCountryThaGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  tha.gdp = byCountryThaGdp.filter(filterByYear).map(returnValue);

  const byCountryUsaGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  usa.gdp = byCountryUsaGdp.filter(filterByYear).map(returnValue);

  const byCountryZafGdp = datasetGdp.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  zaf.gdp = byCountryZafGdp.filter(filterByYear).map(returnValue);
}

function countryDcbyYear() {
  const byCountryBraDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  bra.dc = byCountryBraDc.filter(filterByYear).map(returnValue);

  const byCountryChnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  chn.dc = byCountryChnDc.filter(filterByYear).map(returnValue);

  const byCountryCypDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  cyp.dc = byCountryCypDc.filter(filterByYear).map(returnValue);

  const byCountryDeuDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  deu.dc = byCountryDeuDc.filter(filterByYear).map(returnValue);

  const byCountryGbrDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  gbr.dc = byCountryGbrDc.filter(filterByYear).map(returnValue);

  const byCountryHkgDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  hkg.dc = byCountryHkgDc.filter(filterByYear).map(returnValue);

  const byCountryIndDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  ind.dc = byCountryIndDc.filter(filterByYear).map(returnValue);

  const byCountryJpnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  jpn.dc = byCountryJpnDc.filter(filterByYear).map(returnValue);

  const byCountryRusDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  rus.dc = byCountryRusDc.filter(filterByYear).map(returnValue);

  const byCountrySgpDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  sgp.dc = byCountrySgpDc.filter(filterByYear).map(returnValue);

  const byCountryThaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  tha.dc = byCountryThaDc.filter(filterByYear).map(returnValue);

  const byCountryUsaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  usa.dc = byCountryUsaDc.filter(filterByYear).map(returnValue);

  const byCountryZafDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  zaf.dc = byCountryZafDc.filter(filterByYear).map(returnValue);
}

function countryPlbyYear() {
  const byCountryBraPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  bra.pl = byCountryBraPl.filter(filterByYear).map(returnValue);

  const byCountryChnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  chn.pl = byCountryChnPl.filter(filterByYear).map(returnValue);

  const byCountryCypPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  cyp.pl = byCountryCypPl.filter(filterByYear).map(returnValue);

  const byCountryDeuPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  deu.pl = byCountryDeuPl.filter(filterByYear).map(returnValue);

  const byCountryGbrPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  gbr.pl = byCountryGbrPl.filter(filterByYear).map(returnValue);

  const byCountryHkgPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  hkg.pl = byCountryHkgPl.filter(filterByYear).map(returnValue);

  const byCountryIndPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  ind.pl = byCountryIndPl.filter(filterByYear).map(returnValue);

  const byCountryJpnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  jpn.pl = byCountryJpnPl.filter(filterByYear).map(returnValue);

  const byCountryRusPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  rus.pl = byCountryRusPl.filter(filterByYear).map(returnValue);

  const byCountrySgpPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  sgp.pl = byCountrySgpPl.filter(filterByYear).map(returnValue);

  const byCountryThaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  tha.pl = byCountryThaPl.filter(filterByYear).map(returnValue);

  const byCountryUsaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  usa.pl = byCountryUsaPl.filter(filterByYear).map(returnValue);

  const byCountryZafPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  zaf.pl = byCountryZafPl.filter(filterByYear).map(returnValue);
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

function pieCal(gdp, dc, pl) {
  return Math.round((gdp*(dc/100))/pl);
}

function drawChart(chart) {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(chart);
}

function chartDrawBubble() {
  dataBubble = google.visualization.arrayToDataTable([
    ['ID', 'GDP($)', 'Domestic Private Credit (% of GDP)', 'Country', 'Population'],
    ['BRA', bra.gdp[0], bra.dc[0], 'Brasil', bra.pl[0]],
    ['CHN', chn.gdp[0], chn.dc[0], 'China', chn.pl[0]],
    ['CYP', cyp.gdp[0], cyp.dc[0], 'Cyprus', cyp.pl[0]],
    ['DEU', deu.gdp[0], deu.dc[0], 'Germany', deu.pl[0]],
    ['GBR', gbr.gdp[0], gbr.dc[0], 'United Kingdom', gbr.pl[0]],
    ['HKG', hkg.gdp[0], hkg.dc[0], 'Hong Kong', hkg.pl[0]],
    ['IND', ind.gdp[0], ind.dc[0], 'India', ind.pl[0]],
    ['JPN', jpn.gdp[0], jpn.dc[0], 'Japan', jpn.pl[0]],
    ['RUS', rus.gdp[0], rus.dc[0], 'Russia', rus.pl[0]],
    ['SGP', sgp.gdp[0], sgp.dc[0], 'Singapore', sgp.pl[0]],
    ['THA', tha.gdp[0], tha.dc[0], 'Thailand', tha.pl[0]],
    ['USA', usa.gdp[0], usa.dc[0], 'United States', usa.pl[0]],
    ['ZAF', zaf.gdp[0], zaf.dc[0], 'South Africa', zaf.pl[0]]
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
    ['Brasil', pieCal(bra.gdp, bra.dc, bra.pl)],
    ['China', pieCal(chn.gdp, chn.dc, chn.pl)],
    ['Cyprus', pieCal(cyp.gdp, cyp.dc, cyp.pl)],
    ['Germany', pieCal(deu.gdp, deu.dc, deu.pl)],
    ['United Kingdom', pieCal(gbr.gdp, gbr.dc, gbr.pl)],
    ['Hong Kong', pieCal(hkg.gdp, hkg.dc, hkg.pl)],
    ['India',pieCal(ind.gdp, ind.dc, ind.pl)],
    ['Japan', pieCal(jpn.gdp, jpn.dc, jpn.pl)],
    ['Russia', pieCal(rus.gdp, rus.dc, rus.pl)],
    ['Singapore',pieCal(sgp.gdp, sgp.dc, sgp.pl)],
    ['Thailand', pieCal(tha.gdp, tha.dc, tha.pl)],
    ['United States', pieCal(usa.gdp, usa.dc, usa.pl)],
    ['South Africa', pieCal(zaf.gdp, zaf.dc, zaf.pl)]
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