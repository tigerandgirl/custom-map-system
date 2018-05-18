import React from 'react';
import echarts from 'echarts';
import 'echarts-wordcloud';

export default class extends React.Component {

    constructor(props) {
      super(props);
      this.init = this.init.bind(this)

    }
    
    init(){
      let myChart = echarts.init(this.ID)
      console.log(this.ID);
      var treeUrl = require('../../assets/images/lining.jpeg');
      console.log(treeUrl)

      var starUrl = "images/favicon.fe811.png";
     
      var presents = ['圣诞树', '贺卡', '圣诞礼盒', '围巾', '袜子', '苹果', '手链', '巧克力', '玫瑰', '香水', '乐高', '芭比', '项链', '抱枕', '变形金刚', '摆件', '魔方', '文具', '棒棒糖', '蓝牙耳帽', '超级飞侠', '暖手宝', '夜灯', '堆袜', '耳钉', '公仔', '手机壳', '八音盒', '剃须刀', '打火机', '手表', '巴克球', '模型', '音响', '蒙奇奇', '保温杯']
     
      var data = [];
      for (var i = 0; i < presents.length; ++i) {
          data.push({
              name: presents[i],
              value: (presents.length - i) * 20
          });
      }
      for (var i = 10; i < presents.length; ++i) {
          var cnt = Math.floor(Math.random() * 10);
          for (var j = 0; j < cnt; ++j) {
              data.push({
                  name: presents[i],
                  value: Math.random() * 10
              });
          }
      }
      
      var maskImage = new Image();
    //   console.log(maskImage);
      maskImage.onload = function() {
          myChart.setOption({
              tooltip: {
                  show: false
              },
              backgroundColor: 'rgba(255,0,0,0.2)',
              color: '#0f0',
              series: [{
                  type: 'wordCloud',
                  shape: 'circle',
                  gridSize: 1,
                  sizeRange: [10, 35],
                  rotationRange: [0, 90],
                  rotationStep: 30,
                  maskImage: maskImage,
                  textStyle: {
                      normal: {
                        //   color: function(v) {
                        //       if (v.value > 600) {
                        //           return 'rgb(0, 116, 111)';
                        //       } else if (v.value > 200) {
                        //           return 'rgb(0, 156, 147)';
                        //       } else if (v.value > 9) {
                        //           return 'rgb(70, 209, 133)';
                        //       } else {
                        //           return 'rgb(20, 186, 167)';
                        //       }
                        //   }
                        color: function () {
                            // Random color
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                      },
                      emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                      }
                  },
                  width: 600,
                  height: 500,
                  top: 40,
                  data: data,
                  backgroundColor: '#00ff00'
              }],
              areaStyle:{
                color: '#0f0',
                type: 'default'
              },
              loadingOption:{
                  text: '加载中',
                  x: 'center',
                  y: 'center'
              },
              graphic: {
                  elements: [{
                      type: 'image',
                      style: {
                          image: starUrl,
                          width: 40,
                          height: 40
                      },
                      left: 'center',
                      top: 40
                  }]
              }
          });
      };
      maskImage.src = treeUrl;
    }

    componentDidMount() {
      this.init()
    }

    render() {
      const { width="800px", height="600px" } = this.props
      return (
        <div ref={ID => this.ID = ID} style={{width, height}}>

        </div>
      );
    }
  }
