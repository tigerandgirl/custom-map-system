import React, { Component } from 'react';
import asyncComponent from '../projectTools/echart/AsyncComponent'
import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from '../projectTools/echart/optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'../components/echarts/MapReact'))  //饼图组件
const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'../components/echarts/BarReact')) //柱状图组件
const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'../components/echarts/LineReact'))  //折线图组件
const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'../components/echarts/ScatterReact'))  //散点图组件
const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'../components/echarts/MapReact'))  //地图组件
const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'../components/echarts/RadarReact')) //雷达图组件
const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'../components/echarts/CandlestickReact')) //k线图组件

class App extends Component {
  render() {
    return (
      <div>
        <h2>饼图react组件实现</h2>
        <PieReact option={pieOption} />
        <hr/>
  
        <h2>柱状图react组件实现</h2>
        <BarReact option={barOption} />
        <hr/>
        
        <h2>折线图react组件实现</h2>
        <LineReact option={lineOption} />
        <hr/>
  
        <h2>散点图react组件实现</h2>
        <ScatterReact option={scatterOption} />
        <hr/>
  
        <h2>地图react组件实现</h2>
        <MapReact option={mapOption} height="558px" />
        <hr/>
  
        <h2>雷达图react组件实现</h2>
        <RadarReact option={radarOption} />
        <hr/>
  
        <h2>k线图react组件实现</h2>
        <CandlestickReact option={candlestickOption} />
        <hr/>
      </div>
    );
  }
}

export default App;
