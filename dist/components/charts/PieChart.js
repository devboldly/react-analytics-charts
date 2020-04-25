"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var DataChart_1 = require("./DataChart");
/**
 * See documentation: [PieChart](https://devboldly.github.io/react-analytics-charts/PieChart)
 *
 * A pie chart shows data as slices of pie. You can also display a pie chart as a donut.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [pie chart options](https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function PieChart(props) {
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'query', 'container', 'donut', 'options'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(DataChart_1.DataChart, __assign({}, divProps, { gapi: props.gapi, query: props.query, chart: {
            container: props.container,
            type: 'PIE',
            options: __assign({ width: '100%', pieHole: props.donut ? goldenRatioHole : undefined }, props.options),
        } })));
}
exports.PieChart = PieChart;
var goldenRatioHole = 0.382;