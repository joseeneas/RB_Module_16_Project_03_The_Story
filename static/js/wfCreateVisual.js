// URL for the data source
const urlGDP            = 'Resource/gdp.json';
const urlBRT            = 'Resource/birth_rate.json';
const urlPOP            = 'Resource/population.json';
var row                 = [];
var countryTableYearGDP = [];
var countryTableYearBRT = [];
var countryTableYearPOP = [];
var countryTableGDP     = [];
var countryTableBRT     = [];
var countryTablePOP     = [];
var countryTablePOPG100 = [];
var tableDataGDP        = []
var tableDataBRT        = [];
var tableDataPOP        = [];
var j                   = 0;
var k                   = 0;
var l                   = 0;
const colorGradient  = ['rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)', 
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)',
                        'rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)',
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)',
                        'rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)', 
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)',
                        'rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)', 
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)',
                        'rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)', 
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)',
                        'rgb(250, 250, 110)', 'rgb(196, 236, 116)','rgb(146, 220, 126)', 'rgb(100, 201, 135)', 
                        'rgb(057, 180, 142)', 'rgb(008, 159, 143)','rgb(000, 137, 138)', 'rgb(008, 115, 127)', 
                        'rgb(033, 093, 110)', 'rgb(042, 072, 088)','rgb(042, 052, 066)', 'rgb(033, 033, 033)'];
d3.json(urlGDP).then (function(GDPdata) { 

    for (var i = 0; i < GDPdata.length; i++) {
        Country = GDPdata[i].Country;
        if (Country == "United_States") {
            countryTableYearGDP[j] = GDPdata[i].Year;
            countryTableGDP[j]    = GDPdata[i].GDP;
            tableDataGDP[j]       = {"Year" : countryTableYearGDP[j], "GDP" : countryTableGDP[j] };
            j                     = j + 1;
        }
    }
    console.log('tableDataGDP.length',tableDataGDP.length);
    console.log(tableDataGDP);
    tabulate('#div1',tableDataGDP, ['Year', 'GDP']);


    let barGraph = [{
      x           : countryTableYearGDP,
      y           : countryTableGDP,
      text        : countryTableYearGDP,
      name        : "GDP/Year",
      type        : "bar",
      orientation : "v",
      transforms  : [{ type : 'sort', target : 'y', order : 'descending'}],
      marker      : { color : colorGradient}}];
      let layout1 = { title        : "USA GDP"  , 
                      plot_bgcolor : "Lightskyblue", 
                      paper_bgcolor: "Lightskyblue"};
      Plotly.newPlot("div2"   ,    barGraph, layout1);
  
});

d3.json(urlBRT).then (function(BRTdata) { 

  for (var i = 0; i < BRTdata.length; i++) {
      Country = BRTdata[i].Country;
      if (Country == "United_States") {
          countryTableYearBRT[k] = BRTdata[i].Year;
          countryTableBRT[k]     = BRTdata[i].Birth_Rate;
          tableDataBRT[k]        = {"Year" : countryTableYearBRT[k], "Birth_Rate" : countryTableBRT[k] };
          k                      = k + 1;
      }
  }
  console.log('tabeDataBRT.length',tableDataBRT.length);
  console.log(tableDataBRT);
  tabulate('#div3',tableDataBRT, ['Year', 'Birth_Rate']);


  let barGraph = [{
    x           : countryTableYearBRT,
    y           : countryTableBRT,
    text        : countryTableYearBRT,
    name        : "Birth Rate/Year",
    type        : "bar",
    orientation : "v",
    transforms  : [{ type : 'sort', target : 'y', order : 'descending'}],
    marker      : { color : colorGradient}}];
    let layout1 = { title        : "USA Birth Rate"  , 
                    plot_bgcolor : "Lightskyblue", 
                    paper_bgcolor: "Lightskyblue"};
    Plotly.newPlot("div4"   ,    barGraph, layout1);

});

d3.json(urlPOP).then (function(POPdata) { 

  for (var i = 0; i < POPdata.length; i++) {
      Country = POPdata[i].Country;
      if (Country == "United_States") {
          countryTableYearPOP[l] = POPdata[i].Year;
          countryTablePOP[l]     = POPdata[i].pop;
          countryTablePOPG100[l] = POPdata[i].pop_g100;
          tableDataPOP[l]        = {"Year" : countryTableYearPOP[l], "Population" : countryTablePOP[l] , 'POPG100' : countryTablePOPG100[l]};
          l                      = l + 1;
      }
  }
  console.log('tabeDataPOP.length',tableDataPOP.length);
  console.log(tableDataPOP);
  tabulate('#div5',tableDataPOP, ['Year', 'Population', 'POPG100']);
  
  var Population = {
    x: countryTableYearPOP,
    y: countryTablePOP,
    type: 'line',
    mode: 'lines',
    name : 'Population'
  };
  
  var PopulationG100 = {
    x: countryTableYearPOP,
    y: countryTablePOPG100,
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'line',
    mode: 'lines',
    name: 'Population over 100'
  };
  
  var data = [Population, PopulationG100];
  
  var layout = {
    grid: {rows: 1, columns: 2 ,pattern: 'independent',
    title        : "USA Population", 
    plot_bgcolor : "Lightskyblue", 
    paper_bgcolor: "Lightskyblue"}
  };
  
  Plotly.newPlot('div6', data, layout);

/*
  let barGraph = [{
    x           : countryTableYearPOP,
    y           : countryTablePOP,
    text        : countryTableYearPOP,
    name        : "Population/Year",
    type        : "bar",
    orientation : "v",
    transforms  : [{ type : 'sort', target : 'y', order : 'descending'}],
    marker      : { color : colorGradient}}];
    let layout1 = { title        : "USA Population"  , 
                    plot_bgcolor : "Lightskyblue", 
                    paper_bgcolor: "Lightskyblue"};
    Plotly.newPlot("div6"   ,    barGraph, layout1);

    let barline = [{
      x           : countryTableYearPOP,
      y           : countryTablePOPG100,
      text        : countryTableYearPOP,
      name        : "Population/Year",
      type        : "line",
      orientation : "v",
      transforms  : [{ type : 'sort', target : 'y', order : 'descending'}],
      marker      : { color : colorGradient}}];
      let layout2 = { title        : "USA Population"  , 
                      plot_bgcolor : "Lightskyblue", 
                      paper_bgcolor: "Lightskyblue"};
      Plotly.newPlot("div6"   ,    barline, layout1);
*/
});



function tabulate(div,data, columns) {
      var table = d3.select(div).append('table').style('border', '1px solid #000000');
      var thead = table.append('thead')
      var tbody = table.append('tbody').style('border', '1px solid #000000');;
  
      // append the header row
      thead.append('tr').selectAll('th').data(columns).enter().append('th').text(function (column) { return column; });
  
      // create a row for each object in the data
      var rows = tbody.selectAll('tr').data(data).enter().append('tr');
  
      // create a cell in each row for each column
      var cells = rows.selectAll('td').data(function (row) {
          return columns.map(function (column) {
            return {column: column, value: row[column]};
          });
        })
        .enter()
        .append('td')
          .text(function (d) { return d.value; })
          .style('border', '1px solid #000000');
        d3.selectAll('td').style('text-align', 'right');
    return table;
  }
  