import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Download from '../../components/DownLoad/DownLoad'
import './Cv.less'

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

function Tip() {
    console.log('123');
}

/**
 * 简历
 */
class Cv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topShow: false
        }
        this.projects = [
            {
                url: 'https://github.com/liceal/vue-modules-test',
                name: 'Vue有趣实用的第三方库合集快速入门，快速上手，创建文件夹自动引入组件'
            },
            {
                url: 'https://github.com/liceal/vue-blog',
                name: '早期入门Vue+Php写的博客，文章CURD，上传图片，文章使用Markdown格式'
            },
        ]
        this.skills = [
            '一年在校项目实战经验',
            '有使用过elementUi,AntProUi开发经验',
            '前端技术栈擅长Vue全家桶,Uniapp,微信小程序,Recat,擅长组件开发及构建优化',
            '后端了解Php,Nodejs',
            '不定时维护技术博客,能快速上手BS端开发'
        ]
        window.addEventListener('scroll', (event) => {
            let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
            this.setState({ topShow: scrollTop >= 400 })
        });
    }

    render() {
        return (
            <div className="cv">
                <Header active="0" />
                <main className="page">
                    <section>
                        <h1>个人信息</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    <div className="col">
                                        林贤澳 | 男 | 1999
                                    </div>
                                    <div className="col">
                                        温州职业技术学院 | 软件技术
                                    </div>
                                    <div className="col">
                                        前端开发 | 一年实践经验
                                    </div>
                                </div>
                            </div>
                            <div className="box-line">
                                <div className="row">
                                    <div className="col">
                                        期望职位：Web前端工程师
                                    </div>
                                    <div className="col">
                                        期望城市：杭州
                                    </div>
                                </div>
                            </div>
                            <div className="box-line">
                                <div className="row">
                                    Github：
                                    <a href="https://github.com/liceal">
                                        https://github.com/liceal
                                    </a>
                                </div>
                                <div className="row">
                                    技术博客：
                                    <a href="https://liceal.github.io/">
                                        https://liceal.github.io/
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>联系方式</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    <div className="col">
                                        手机：13250894776
                                    </div>
                                    <div className="col">
                                        Email: 675024132@qq.com
                                    </div>
                                    <div className="col">
                                        网站：<a href="http://linxianao.com">www.linxianao.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>开源项目</h1>
                        <div className='boxes'>
                            <div className="box-line">
                                {
                                    this.projects.map(v => (
                                        <div className="row" key={v.name}>
                                            <a href={v.url}>{v.name}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>技能掌握</h1>
                        <div className="boxes">
                            <div className="box-line">
                                {
                                    this.skills.map(v => (
                                        <div className="row" key={v}>
                                            - {v}
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>项目经验</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    督导管理系统 （ 2019-03 ~ 2020-01 ）
                                </div>
                                <div className="row">
                                    <b>前端开发</b>
                                </div>
                                <div className="row">
                                    - 负责项目大部分页面开发与设计
                                </div>
                                <div className="row">
                                    - 参与项目需求探讨，提出项目需求
                                </div>

                                <div className="row">
                                    <b>工作内容:</b>
                                </div>
                                <div className="row">
                                    - 使用Vue + AngDesign + springBoot + MySql
                                </div>
                                <div className="row">
                                    - 负责快速构建高质量页面、对接处理数据、分辨率调试及适配
                                </div>
                                <div className="row">
                                    <b>解决难点:</b>
                                </div>
                                <div className="row">
                                    - 不同角色对应不同权限逻辑处理
                                </div>
                                <div className="row">
                                    - 高度组件化、模块化形成界面统一风格
                                </div>
                                <div className="row">
                                    - 文件上传与下载
                                </div>
                                <div className="row">
                                    - 适配不同设备分辨率
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>奖励荣誉</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    学术类：国家励志奖学金(1次)、班级一等奖(2次)
                                </div>
                                <div className="row">
                                    实践类：人工智能团体赛三等奖、程序设计团体赛三等奖、ACM校赛团体三等
                                </div>
                                <div className="row">
                                    技能证书：PAT乙级、二级C
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>自我评价</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    细节把握细致，性格外向开朗，善于沟通，敢于承担责任。
                                 </div>
                            </div>
                        </div>

                    </section>
                    <section>
                        <h1>致谢</h1>
                        <div className="boxes">
                            <div className="box-line">
                                <div className="row">
                                    感谢您花时间阅读我的简历，期待能有机会和您共事
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <FixedButton showTop={this.state.topShow} />
            </div>
        )
    }
}

export default Cv