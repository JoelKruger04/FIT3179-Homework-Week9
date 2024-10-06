var vg_2 = "prop_symbol_chart.vg.json";
var vg_3 = "bar_chart.vg.json";

vegaEmbed("#prop_symbol_chart", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar_chart", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);