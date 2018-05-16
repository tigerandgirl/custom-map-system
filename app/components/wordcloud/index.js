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
      console.log('/////0')
      console.log(this.ID);
      var treeUrl = "data:image/png;base64,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";

      var starUrl = "data:image/png;base64,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";
     
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
      console.log(maskImage);
      maskImage.onload = function() {
        console.log(1111);
          myChart.setOption({
              tooltip: {
                  show: false
              },
              series: [{
                  type: 'wordCloud',
                  gridSize: 1,
                  sizeRange: [10, 35],
                  rotationRange: [0, 90],
                  rotationStep: 90,
                  maskImage: maskImage,
                  textStyle: {
                      normal: {
                          color: function(v) {
                              if (v.value > 600) {
                                  return 'rgb(0, 116, 111)';
                              } else if (v.value > 200) {
                                  return 'rgb(0, 156, 147)';
                              } else if (v.value > 9) {
                                  return 'rgb(70, 209, 133)';
                              } else {
                                  return 'rgb(20, 186, 167)';
                              }
                          }
                      }
                  },
                  width: 600,
                  height: 500,
                  top: 40,
                  data: data
              }],
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
      const { width="100%", height="200px" } = this.props
      return (
        <div ref={ID => this.ID = ID} style={{width, height}}>

        </div>
      );
    }
  }
