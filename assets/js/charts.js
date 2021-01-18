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
  
let yearSelector = document.getElementsByClassName('dropdown-item2');
for (let i = 0; i < yearSelector.length; i++) {
  yearSelector[i].addEventListener('click', selectedYear);
}

function selectedYear (event) {
  year = event.target.innerText;
  expGDP();
  expDc();
  expPl();
  dataOnClick();
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

}

function dataOnClick() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawSeriesChart);

  function drawSeriesChart() {
    console.log(byYearBraGdp);
    var data = google.visualization.arrayToDataTable([
      ['ID', 'GDP', 'Domestic Private Credit to GDP', 'Country', 'Population'],
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

    var options = {
      title: 'Correlation between GDP, Domestic Private Credit to GDP and population of world 13 countries in ' + year,
        hAxis: {title: 'GDP'},
        vAxis: {title: 'Domestic Private Credit to GDP'},
        bubble: {textStyle: {fontSize: 11}}
      };
  
    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));

    chart.draw(data, options);
  }
}



