let datasetGDP = [];
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
let pieBra;
let pieChn;
let pieCyp;
let pieDeu;
let pieGbr;
let pieHkg;
let pieInd;
let pieJpn;
let pieRus;
let pieSgp;
let pieTha;
let pieUsa;
let pieZaf;
expGDP();
expDc();
expPl();

// GDP data with API and take out each countries' data
async function expGDP() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/NY.GDP.PCAP.PP.KD?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetGDP = data[1])
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

const yearSelector = document.getElementsByClassName('dropdown-item2');
for (let i = 0; i < yearSelector.length; i++) {
  yearSelector[i].addEventListener('click', selectedYear);
}

function selectedYear (event) {
  year = event.target.innerText;
  const byCountryBraDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  const byCountryChnDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  const byCountryCypDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  const byCountryDeuDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  const byCountryGbrDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  const byCountryHkgDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  const byCountryIndDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  const byCountryJpnDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  const byCountryRusDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  const byCountrySgpDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  const byCountryThaDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  const byCountryUsaDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  const byCountryZafDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  const byCountryBraDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  const byCountryChnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  const byCountryCypDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  const byCountryDeuDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  const byCountryGbrDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  const byCountryHkgDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  const byCountryIndDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  const byCountryJpnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  const byCountryRusDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  const byCountrySgpDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  const byCountryThaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  const byCountryUsaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  const byCountryZafDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });
  const byCountryBraPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'BRA');
  });
  const byCountryChnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CHN');
  });
  const byCountryCypPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CYP');
  });
  const byCountryDeuPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'DEU');
  });
  const byCountryGbrPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'GBR');
  });
  const byCountryHkgPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'HKG');
  });
  const byCountryIndPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'IND');
  });
  const byCountryJpnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'JPN');
  });
  const byCountryRusPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'RUS');
  });
  const byCountrySgpPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'SGP');
  });
  const byCountryThaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'THA');
  });
  const byCountryUsaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'USA');
  });
  const byCountryZafPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });


  byYearBraGdp = byCountryBraDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearChnGdp = byCountryChnDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearCypGdp = byCountryCypDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearDeuGdp = byCountryDeuDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearGbrGdp = byCountryGbrDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearHkgGdp = byCountryHkgDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearIndGdp = byCountryIndDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearJpnGdp = byCountryJpnDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearRusGdp = byCountryRusDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearSgpGdp = byCountrySgpDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearThaGdp = byCountryThaDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearUsaGdp = byCountryUsaDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearZafGdp = byCountryZafDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearBraDc = byCountryBraDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearChnDc = byCountryChnDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearCypDc = byCountryCypDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearDeuDc = byCountryDeuDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearGbrDc = byCountryGbrDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearHkgDc = byCountryHkgDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearIndDc = byCountryIndDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearJpnDc = byCountryJpnDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearRusDc = byCountryRusDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearSgpDc = byCountrySgpDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearThaDc = byCountryThaDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearUsaDc = byCountryUsaDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearZafDc = byCountryZafDc.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearBraPl = byCountryBraPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearChnPl = byCountryChnPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearCypPl = byCountryCypPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearDeuPl = byCountryDeuPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearGbrPl = byCountryGbrPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearHkgPl = byCountryHkgPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearIndPl = byCountryIndPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearJpnPl = byCountryJpnPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearRusPl = byCountryRusPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearSgpPl = byCountrySgpPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearThaPl = byCountryThaPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearUsaPl = byCountryUsaPl.filter(filterByYear).map(item => {
    return item.value;
  });
  byYearZafPl = byCountryZafPl.filter(filterByYear).map(item => {
    return item.value;
  });
  bubbleChart();
  pieChart();
  pieBrabra();
}

function filterByCountryCode (item, code) {
  if (item.countryiso3code === code) {
    return item.value;
  }         
}

function filterByYear (item) {
    if (item.date === year) {
      return item.value;
    }         
  }

function bubbleChart() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawSeriesChart);

  function drawSeriesChart() {
    const data = google.visualization.arrayToDataTable([
      ['ID', 'GDP($)', 'Domestic Private Credit (% of GDP)', 'Country', 'Population'],
      ['BRA',    byYearBraGdp[0],       byYearBraDc[0],      'Brasil',  byYearBraPl[0]],
      ['CHN',    byYearChnGdp[0],              byYearChnDc[0],      'China',         byYearChnPl[0]],
      ['CYP',    byYearCypGdp[0],               byYearCypDc[0],      'Cyprus',         byYearCypPl[0]],
      ['DEU',    byYearDeuGdp[0],              byYearDeuDc[0],      'Germany',    byYearDeuPl[0]],
      ['GBR',    byYearGbrGdp[0],              byYearGbrDc[0],         'United Kingdom',         byYearGbrPl[0]],
      ['HKG',    byYearHkgGdp[0],              byYearHkgDc[0],       'Hong Kong',    byYearHkgPl[0]],
      ['IND',    byYearIndGdp[0],              byYearIndDc[0],      'India',    byYearIndPl[0]],
      ['JPN',    byYearJpnGdp[0],              byYearJpnDc[0],      'Japan',    byYearJpnPl[0]],
      ['RUS',    byYearRusGdp[0],                byYearRusDc[0],      'Russia',          byYearRusPl[0]],
      ['SGP',    byYearSgpGdp[0],              byYearSgpDc[0],      'Singapore',  byYearSgpPl[0]],
      ['THA',    byYearThaGdp[0],              byYearThaDc[0],      'Thailand',  byYearThaPl[0]],
      ['USA',    byYearUsaGdp[0],              byYearUsaDc[0],      'United States',  byYearUsaPl[0]],
      ['ZAF',    byYearZafGdp[0],              byYearZafDc[0],      'South Africa',  byYearZafPl[0]]
    ]);

    const options = {
      title: `Correlation between GDP, Domestic Private Credit to GDP and population of world 13 countries in ${year}`, fontSize: 18,
      hAxis: {title: 'GDP ($)'},
      vAxis: {title: 'Domestic Private Credit (% Of GDP)'},
      bubble: {textStyle: {fontSize: 11}}
    };
  
    const chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));

    chart.draw(data, options);
  }
}

function pieChart() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Average amount of Domestic Private Credit($)'],
        ['BRASIL',     pieBra],
        ['China',      2],
        ['Cyprus',  2],
        ['Germany', 2],
        ['United Kingdom', 2],
        ['Hong Kong', 2],
        ['India', 2],
        ['Japan', 2],
        ['Russia', 2],
        ['Singapore', 2],
        ['Thailand', 2],
        ['United States', 2],
        ['South Africa',    7]
      ]);

      var options = {
        title: `Average amount of Domestic Private Credit to GDP per person in 13 countries in ${year}`, fontSize: 15,
        chartArea: {left: 30, right: 30},
        legend: {alignment: 'center'}
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
}

function pieBrabra() {
  return pieBra = (byYearBraGdp*byYearBraDc)/byYearBraPl;
}