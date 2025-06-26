import React, { Component } from 'react'
import Download from '../../components/DownLoad/DownLoad'
import marked from 'marked'
import hljs from 'highlight.js'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import "highlight.js/styles/github.css"
import './markdown-cv.less'

// 下载显示的内容
async function downloadMdToPDF() {
  try {
    const element = document.querySelector('#cv');
    if (!element) {
      console.error('未找到 #cv 元素');
      alert('未找到内容，请刷新页面后重试');
      return;
    }

    const pageWidth = 210; // A4 宽度 (mm)
    const pageHeight = 297; // A4 高度 (mm)
    const scale = 2; // 提高分辨率，保持清晰度

    // 使用 html2canvas 渲染整个 DOM 元素为 canvas
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true, // 允许跨域资源
      logging: false, // 禁用日志
    });

    const imgData = canvas.toDataURL('image/png'); // 使用 PNG 格式，保持最高质量
    const imgWidth = pageWidth; // 图片宽度等于 A4 宽度
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // 按比例计算图片高度

    // 创建 PDF 实例
    const pdf = new jsPDF('p', 'mm', 'a4');

    if (imgHeight <= pageHeight) {
      // 如果内容高度小于等于一页，直接添加图片
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // 如果内容高度超过一页，进行分页处理
      let position = 0;
      while (position < imgHeight) {
        const remainingHeight = imgHeight - position;
        const currentHeight = Math.min(pageHeight, remainingHeight);

        // 创建一个临时 canvas，用于裁剪当前页内容
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = (currentHeight * canvas.width) / imgWidth;

        const pageContext = pageCanvas.getContext('2d');
        pageContext.drawImage(
          canvas,
          0,
          position * (canvas.height / imgHeight), // 裁剪起始位置
          canvas.width,
          pageCanvas.height,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        const pageImgData = pageCanvas.toDataURL('image/png'); // 当前页图片数据

        // 添加当前页到 PDF
        pdf.addImage(pageImgData, 'PNG', 0, 0, imgWidth, currentHeight);

        position += pageHeight; // 更新位置
        if (position < imgHeight) {
          pdf.addPage(); // 添加新页面
        }
      }
    }

    // 保存 PDF 文件
    pdf.save('cv.pdf');
  } catch (error) {
    console.error('PDF 导出失败:', error);
    alert('PDF 导出失败，请稍后重试');
  }
}

/**
 * 下载和置顶按钮
 */
function FixedButton(props) {

  if (props.showTop) {
    return (
      <div>
        <div className="fixed-button go-top" onClick={() => {
          document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>
          <div className="text iconfont icon-Group-"></div>
        </div>

        <Download onClick={downloadMdToPDF} />
      </div>
    )
  }
  return (
    <div className="fixed-button download">
      <Download onClick={downloadMdToPDF} />

      {/* <a className="text iconfont icon-xiazai" href={pdfUrl} /> */}
    </div>
  )
}

class markdownCv extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cv: ``,
      topShow: false,
      colors: []
    }

    // 读取静态资源文本内容
    fetch(
      // require('@/static/CV.md'),
      'https://raw.githubusercontent.com/liceal/cv/refs/heads/master/src/static/CV.md',
      {
        method: "get"
      })
      .then((res) => res.text())
      .then((data) => {
        this.setState({ cv: data })
        // console.log('data:', data);
      })

    // 配置markdown渲染
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => {
        return hljs.highlightAuto(code).value
      },
    })

    // 设置指定按钮出现
    window.addEventListener('scroll', (event) => {
      let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
      this.setState({ topShow: scrollTop >= 400 })
    });

  }

  render() {
    return (
      <div className="cv" >
        <div id="cv" className="page" dangerouslySetInnerHTML={{ __html: marked(this.state.cv) }}>
        </div>
        <FixedButton showTop={this.state.topShow} />

      </div>

    )
  }
}

export default markdownCv