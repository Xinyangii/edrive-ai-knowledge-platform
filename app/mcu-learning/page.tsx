import Link from "next/link";

const chapters = [
  {
    num: "一",
    title: "如何使用工具",
    slug: "how-to-use-tools",
    desc: "宋荣康编写，涵盖软件安装、硬件设备、常用软件操作指南",
    topics: ["PCAN / CANoe / CANalyzer / CANape / INCA / VDC 安装", "VECTOR / ZLG / ES582 / PCAN-USB Pro 硬件", "PCAN 数据采集、CANalyzer 回放、INCA 标定、VDC 刷写", "常用网站与神秘术语"],
  },
  {
    num: "二",
    title: "如何认识电驱系统",
    slug: "edrive-system",
    desc: "电驱系统定义、硬件组成、整车信号接口、状态机管理",
    topics: ["电驱系统三大核心硬件：MCU、驱动电机、减速器", "整车级信号与接口：低压电源、CAN/UDS通信、高压功率", "状态机管理：下电→上电→READY→上高压状态跳转"],
  },
  {
    num: "三",
    title: "如何接手一个项目",
    slug: "project-onboarding",
    desc: "网络拓扑、诊断、通信矩阵、驾驶性与NVH指标",
    topics: ["网络拓扑：总线类型、ECU节点、网管路由、终端电阻", "诊断：ISO 14229/ISO 15031/ISO 21434 三大标准", "通信矩阵：DBC 数据库文件、MCU 输入输出报文", "驾驶性指标：扭矩响应、爬升斜率、蠕行平稳性", "NVH：谐波补偿、载频调整、电流滤波"],
  },
  {
    num: "四",
    title: "如何开始具体工作",
    slug: "start-work",
    desc: "软件交付四步法、问题分析四步法、设变流程",
    topics: ["交付软件：需求打合→建单排期→开发测试→软件提交", "分析问题：仪表点灯→确认工况→操作还原→分层定位", "VHOME 常用：试验车开出门单"],
  },
  {
    num: "五",
    title: "如何变得更加专业",
    slug: "professional-advancement",
    desc: "硬件设计、软件架构、坐标变换、FOC、SVPWM、无传感器控制",
    topics: ["硬件：功率变换、控制板架构、热管理与EMC设计", "软件：RTOS任务划分、分层架构、实时调度", "坐标变换：Clarke变换→Park变换→反Park变换", "磁场定向控制：PI调节器、抗积分饱和、前馈补偿", "SVPWM：扇区判断、七段式/五段式、过调制、死区补偿", "无位置传感器控制与高级控制策略"],
  },
];

export default function McuLearningHome() {
  return (
    <main>
      <header className="page-hero" style={{ background: "radial-gradient(120% 100% at 80% -20%, #14344e 0%, var(--navy) 60%)" }}>
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <p className="eyebrow"><span /> MCU LEARNING PLATFORM</p>
          <h1>电驱 MCU 学习平台</h1>
          <p>岚图电驱 MCU 方向新人学习手册，涵盖工具使用、系统认知、项目流程、故障排查、专业进阶五大板块，由宋荣康等编写整理。</p>
          <div className="page-hero-meta">
            <span>5 大章节</span>
            <span>手册 V0.0</span>
            <span>持续更新</span>
          </div>
        </div>
      </header>

      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="section-heading">
          <span className="section-index">MCU</span>
          <span className="kicker">LEARNING HANDBOOK</span>
          <h2 className="section-title">手册目录</h2>
          <p>按章节顺序阅读，从工具使用到专业进阶，系统掌握 MCU 开发标定全流程</p>
        </div>

        <div className="path-page-list">
          {chapters.map((ch, idx) => (
            <div className="path-page-card" key={ch.slug}>
              <div className={`path-page-head ${idx === 0 ? "cyan" : idx === 1 ? "lime" : idx === 2 ? "orange" : idx === 3 ? "blue" : "cyan"}`}>
                <span className="path-page-index">{ch.num}</span>
                <div>
                  <span>CHAPTER {idx + 1}</span>
                  <h2>
                    <Link href={`/mcu-learning/docs/${ch.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {ch.title}
                    </Link>
                  </h2>
                  <p>{ch.desc}</p>
                </div>
              </div>
              <div className="path-node-list">
                {ch.topics.map((t, i) => (
                  <Link key={i} href={`/mcu-learning/docs/${ch.slug}`} className="path-resource">
                    <div>
                      <strong>{t}</strong>
                    </div>
                    <div>
                      <small>第{ch.num}章</small>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}