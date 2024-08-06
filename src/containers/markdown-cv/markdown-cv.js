import React, { Component } from 'react'
import Download from '../../components/DownLoad/DownLoad'
import marked from 'marked'
import hljs from 'highlight.js'
import "highlight.js/styles/github.css"
import './markdown-cv.less'

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

        <Download />
      </div>
    )
  }
  return (
    <div className="fixed-button download">
      <Download />

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
      require('@/static/CV.md'),
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
        <div className="page" dangerouslySetInnerHTML={{ __html: marked(this.state.cv) }}>
        </div>
        <FixedButton showTop={this.state.topShow} />

      </div>

    )
  }
}

export default markdownCv