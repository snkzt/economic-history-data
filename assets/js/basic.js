let datasetGDP = [];
let datasetDomesticCredit = [];
let datasetPopulation = [];
let year;
let byYearBraGdp;
  
let yearSelector = document.getElementsByClassName('dropdown-item2');
for (let i = 0; i < yearSelector.length; i++) {
  yearSelector[i].addEventListener('click', selectedYear);
}

function selectedYear (event) {
  year = event.target.innerText;
  expGDP();
  expDc();
  expPl();
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

async function expGDP() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/NY.GDP.PCAP.PP.KD?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetGDP = data[1])

  let byCountryBraDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'BRA');
  });

  let byCountryChnDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'CHN');
  });

  let byCountryCypDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'CYP');
  });

  let byCountryDeuDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'DEU');
  });

  let byCountryGbrDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'GBR');
  });

  let byCountryHkgDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'HKG');
  });

  let byCountryIndDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'IND');
  });

  let byCountryJpnDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'JPN');
  });

  let byCountryRusDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'RUS');
  });

  let byCountrySgpDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'SGP');
  });

  let byCountryThaDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'THA');
  });

  let byCountryUsaDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'USA');
  });

  let byCountryZafDcGdp = datasetGDP.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });


  byYearBraGdp = byCountryBraDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearChnGdp = byCountryChnDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearCypGdp = byCountryCypDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearDeuGdp = byCountryDeuDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearGbrGdp = byCountryGbrDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearHkgGdp = byCountryHkgDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearIndGdp = byCountryIndDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearJpnGdp = byCountryJpnDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearRusGdp = byCountryRusDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearSgpGdp = byCountrySgpDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearThaGdp = byCountryThaDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearUsaGdp = byCountryUsaDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearZafGdp = byCountryZafDcGdp.filter(filterByYear).map(item => {
    return item.value;
  });

  console.log(byYearBraGdp);
}

// Importing Domestic Credit data with API and take out each countries' data
async function expDc() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/FS.AST.PRVT.GD.ZS?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetDomesticCredit = data[1])

 let byCountryBraDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'BRA');
  });

  let byCountryChnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CHN');
  });

  let byCountryCypDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'CYP');
  });

  let byCountryDeuDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'DEU');
  });

  let byCountryGbrDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'GBR');
  });

  let byCountryHkgDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'HKG');
  });

  let byCountryIndDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'IND');
  });

  let byCountryJpnDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'JPN');
  });

  let byCountryRusDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'RUS');
  });

  let byCountrySgpDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'SGP');
  });

  let byCountryThaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'THA');
  });

  let byCountryUsaDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'USA');
  });

  let byCountryZafDc = datasetDomesticCredit.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });


  let byYearBraDc = byCountryBraDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearChnDc = byCountryChnDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearCypDc = byCountryCypDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearDeuDc = byCountryDeuDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearGbrDc = byCountryGbrDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearHkgDc = byCountryHkgDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearIndDc = byCountryIndDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearJpnDc = byCountryJpnDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearRusDc = byCountryRusDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearSgpDc = byCountrySgpDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearThaDc = byCountryThaDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearUsaDc = byCountryUsaDc.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearZafDc = byCountryZafDc.filter(filterByYear).map(item => {
    return item.value;
  });

}

// Importing Population data with API and take out each countries' data
async function expPl() {
  await fetch('https://api.worldbank.org/v2/en/country/all/indicator/SP.POP.TOTL?format=json&per_page=20000&source=2')
  .then(response => response.json())
  .then(data => datasetPopulation = data[1])

  let byCountryBraPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'BRA');
  });

  let byCountryChnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CHN');
  });

  let byCountryCypPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'CYP');
  });

  let byCountryDeuPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'DEU');
  });

  let byCountryGbrPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'GBR');
  });

  let byCountryHkgPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'HKG');
  });

  let byCountryIndPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'IND');
  });

  let byCountryJpnPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'JPN');
  });

  let byCountryRusPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'RUS');
  });

  let byCountrySgpPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'SGP');
  });

  let byCountryThaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'THA');
  });

  let byCountryUsaPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'USA');
  });

  let byCountryZafPl = datasetPopulation.filter(item => {
    return filterByCountryCode(item,'ZAF');
  });


  let byYearBraPl = byCountryBraPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearChnPl = byCountryChnPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearCypPl = byCountryCypPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearDeuPl = byCountryDeuPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearGbrPl = byCountryGbrPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearHkgPl = byCountryHkgPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearIndPl = byCountryIndPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearJpnPl = byCountryJpnPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearRusPl = byCountryRusPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearSgpPl = byCountrySgpPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearThaPl = byCountryThaPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearUsaPl = byCountryUsaPl.filter(filterByYear).map(item => {
    return item.value;
  });

  let byYearZafPl = byCountryZafPl.filter(filterByYear).map(item => {
    return item.value;
  });

}

let srcScriptDiv = document.createElement('div');
srcScriptDiv.setAttribute("class","chart");

document.getElementById('chart').appendChild(srcScriptDiv);

let scriptChartSrc = document.createElement('script');
scriptChartSrc.src = "https://www.gstatic.com/charts/loader.js";
scriptChartSrc.type = "text/javascript"; 

let scriptChartData = document.createElement('script');
scriptChartData.type = "text/javascript"; 
scriptChartData.innerHTML = function drawSeriesChart() {
    
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawSeriesChart);

  var data = google.visualization.arrayToDataTable([
    ['ID', 'Domestic Private Credit to GDP', 'GDP', 'Region', 'Population'],
    ['BRA',    byYearBraGdp,       1.67,      'North America',  33739900],
    ['CHN',    79.84,              1.36,      'Europe',         81902307],
    ['CYP',    78.6,               1.84,      'Europe',         5523095],
    ['DEU',    72.73,              2.78,      'Middle East',    79716203],
    ['GBR',    80.05,              2,         'Europe',         61801570],
    ['HKG',    72.49,              1.7,       'Middle East',    73137148],
    ['IND',    68.09,              4.77,      'Middle East',    31090763],
    ['JPN',    81.55,              2.96,      'Middle East',    7485600],
    ['RUS',    68.6,               1.54,      'Europe',         141850000],
    ['SGP',    78.09,              2.05,      'North America',  307007000],
    ['THA',    78.09,              2.05,      'North America',  307007000],
    ['USA',    78.09,              2.05,      'North America',  307007000],
    ['ZAF',    78.09,              2.05,      'Africa',  307007000]
  ]);
  console.log(byYearBraGdp);
  var options = {
    title: 'Correlation between GDP, Domestic Private Credit to GDP' + 'and population of world 13 countries',
      hAxis: {title: 'GDP'},
      vAxis: {title: 'Domestic Private Credit to GDP'},
      bubble: {textStyle: {fontSize: 11}}
    };
  
  var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));

  chart.draw(data, options);
};

srcScriptDiv.appendChild(scriptChartSrc);
srcScriptDiv.appendChild(scriptChartData);


