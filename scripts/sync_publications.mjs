import { promises as fs } from "fs";
import path from "path";

const root = process.cwd();
const publicationsDir = path.join(root, "_publications");

const publications = [
  {
    filename: "2025-06-08-paper-title-number-5.md",
    title: "Actual construction cost prediction using hypergraph deep learning techniques",
    year: 2025,
    category: "manuscripts",
    venue: "Advanced Engineering Informatics",
    citation:
      'Hao Liu, Mingkai Li, Jack C. P. Cheng, Chimay J. Anumba, and Liqiao Xia. "Actual construction cost prediction using hypergraph deep learning techniques." <i>Advanced Engineering Informatics</i>, 65: 103187, 2025.',
    recordurl: "https://dblp.org/rec/journals/aei/LiuLCAX25",
  },
  {
    filename: "2024-02-17-paper-title-number-4.md",
    title: "MSDF-VAE: A Cloud-Edge Collaborative Method for Fault Diagnosis Based on Transfer Learning",
    year: 2025,
    category: "manuscripts",
    venue: "IEEE Internet of Things Journal",
    citation:
      'Xiaobin Li, Bo Xiao, Xuejiao Chen, Pei Jiang, Xi Vincent Wang, Pai Zheng, Liqiao Xia, and Chao Yin. "MSDF-VAE: A Cloud-Edge Collaborative Method for Fault Diagnosis Based on Transfer Learning." <i>IEEE Internet of Things Journal</i>, 12(12): 22393-22403, 2025.',
    recordurl: "https://dblp.org/rec/journals/iotj/LiXCJWZXY25",
  },
  {
    filename: "2015-10-01-paper-title-number-3.md",
    title: "Unlocking Large Language Model Power in Industry: Privacy-Preserving Collaborative Creation of Knowledge Graph",
    year: 2025,
    category: "manuscripts",
    venue: "IEEE Transactions on Big Data",
    citation:
      'Liqiao Xia, Junming Fan, Ajith Kumar Parlikad, Xiao Huang, and Pai Zheng. "Unlocking Large Language Model Power in Industry: Privacy-Preserving Collaborative Creation of Knowledge Graph." <i>IEEE Transactions on Big Data</i>, 11(4): 2046-2060, 2025.',
    recordurl: "https://dblp.org/rec/journals/tbd/XiaFPHZ25",
  },
  {
    filename: "2010-10-01-paper-title-number-2.md",
    title: "Leveraging Large Language Models to Empower Bayesian Networks for Reliable Human-Robot Collaborative Disassembly Sequence Planning in Remanufacturing",
    year: 2025,
    category: "manuscripts",
    venue: "IEEE Transactions on Industrial Informatics",
    citation:
      'Liqiao Xia, Youxi Hu, Jiazhen Pang, Xiangying Zhang, and Chao Liu. "Leveraging Large Language Models to Empower Bayesian Networks for Reliable Human-Robot Collaborative Disassembly Sequence Planning in Remanufacturing." <i>IEEE Transactions on Industrial Informatics</i>, 21(4): 3117-3126, 2025.',
    recordurl: "https://dblp.org/rec/journals/tii/XiaHPZL25",
  },
  {
    filename: "2009-10-01-paper-title-number-1.md",
    title: "Graph Embedding-Based Bayesian Network for Fault Isolation in Complex Equipment",
    year: 2025,
    category: "manuscripts",
    venue: "IEEE Transactions on Reliability",
    citation:
      'Liqiao Xia, Pai Zheng, Manuel Herrera, Yongshi Liang, Xinyu Li, and Liang Gao. "Graph Embedding-Based Bayesian Network for Fault Isolation in Complex Equipment." <i>IEEE Transactions on Reliability</i>, 74(3): 3897-3910, 2025.',
    recordurl: "https://dblp.org/rec/journals/tr/XiaZHLLG25",
  },
  {
    title: "LLM-Augmented Multi-Fidelity Bayesian Optimization for Parameter Optimization in Human-Robot Collaborative Assembly",
    year: 2025,
    category: "conferences",
    venue: "IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM 2025)",
    citation:
      'Liqiao Xia, Hongpeng Chen, Jiazhen Pang, Shimin Liu, Pai Zheng, and Fazel Ansari. "LLM-Augmented Multi-Fidelity Bayesian Optimization for Parameter Optimization in Human-Robot Collaborative Assembly." <i>IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM 2025)</i>, 2025.',
    paperurl: "https://doi.org/10.1109/AIM64088.2025.11175780",
    recordurl:
      "https://research.polyu.edu.hk/en/publications/llm-augmented-multi-fidelity-bayesian-optimization-for-parameter-/",
  },
  {
    title: "Establishing a dynamic and static knowledge model of the manufacturing cell management system: An active push approach",
    year: 2024,
    category: "manuscripts",
    venue: "Expert Systems with Applications",
    citation:
      'Qi Lin, Pai Zheng, Yingfeng Zhang, Liqiao Xia, Ziyao Zhang, and Jingya Liang. "Establishing a dynamic and static knowledge model of the manufacturing cell management system: An active push approach." <i>Expert Systems with Applications</i>, 243: 122713, 2024.',
    recordurl: "https://dblp.org/rec/journals/eswa/LinZZXZL24",
  },
  {
    title: "Leveraging error-assisted fine-tuning large language models for manufacturing excellence",
    year: 2024,
    category: "manuscripts",
    venue: "Robotics and Computer-Integrated Manufacturing",
    citation:
      'Liqiao Xia, Chengxi Li, Canbin Zhang, Shimin Liu, and Pai Zheng. "Leveraging error-assisted fine-tuning large language models for manufacturing excellence." <i>Robotics and Computer-Integrated Manufacturing</i>, 88: 102728, 2024.',
    recordurl: "https://dblp.org/rec/journals/rcim/XiaLZLZ24",
  },
  {
    title: "GPSC-GAN: A Data Enhanced Model for Intelligent Fault Diagnosis",
    year: 2024,
    category: "manuscripts",
    venue: "IEEE Transactions on Instrumentation and Measurement",
    citation:
      'Pin Lyu, Yihong Cheng, Ming Zhang, Wenbing Yu, Liqiao Xia, and Chao Liu. "GPSC-GAN: A Data Enhanced Model for Intelligent Fault Diagnosis." <i>IEEE Transactions on Instrumentation and Measurement</i>, 73: 1-16, 2024.',
    recordurl: "https://dblp.org/rec/journals/tim/LyuCZYXL24",
  },
  {
    title: "Cross-Edge Orchestration of Serverless Functions With Probabilistic Caching",
    year: 2024,
    category: "manuscripts",
    venue: "IEEE Transactions on Services Computing",
    citation:
      'Chen Chen, Manuel Herrera, Ge Zheng, Liqiao Xia, Zhengyang Ling, and Jiangtao Wang. "Cross-Edge Orchestration of Serverless Functions With Probabilistic Caching." <i>IEEE Transactions on Services Computing</i>, 17(5): 2139-2150, 2024.',
    recordurl: "https://dblp.org/rec/journals/tsc/ChenHZXLW24",
  },
  {
    title: "Histogram-Based Gradient Boosting Tree: A Federated Learning Approach for Collaborative Fault Diagnosis",
    year: 2024,
    category: "manuscripts",
    venue: "IEEE/ASME Transactions on Mechatronics",
    citation:
      'Liqiao Xia, Pai Zheng, Jinjie Li, Xiao Huang, and Robert X. Gao. "Histogram-Based Gradient Boosting Tree: A Federated Learning Approach for Collaborative Fault Diagnosis." <i>IEEE/ASME Transactions on Mechatronics</i>, 29(4): 2637-2648, 2024.',
    paperurl: "https://doi.org/10.1109/TMECH.2023.3331712",
  },
  {
    title: "Large Language Models for Disease Diagnosis: A Scoping Review",
    year: 2024,
    category: "preprints",
    venue: "CoRR",
    citation:
      'Shuang Zhou, Zidu Xu, Mian Zhang, Chunpu Xu, Yawen Guo, Zaifu Zhan, Sirui Ding, Jiashuo Wang, Kaishuai Xu, Yi Fang, Liqiao Xia, Jeremy Yeung, Daochen Zha, Genevieve B. Melton, Mingquan Lin, and Rui Zhang. "Large Language Models for Disease Diagnosis: A Scoping Review." <i>CoRR</i>, abs/2409.00097, 2024.',
    paperurl: "https://arxiv.org/abs/2409.00097",
    recordurl: "https://dblp.org/rec/journals/corr/abs-2409-00097",
  },
  {
    title: "A visual reasoning-based approach for driving experience improvement in the AR-assisted head-up displays",
    year: 2023,
    category: "manuscripts",
    venue: "Advanced Engineering Informatics",
    citation:
      'Yongshi Liang, Pai Zheng, and Liqiao Xia. "A visual reasoning-based approach for driving experience improvement in the AR-assisted head-up displays." <i>Advanced Engineering Informatics</i>, 55: 101888, 2023.',
    recordurl: "https://dblp.org/rec/journals/aei/LiangZX23",
  },
  {
    title: "A dynamic updating method of digital twin knowledge model based on fused memorizing-forgetting model",
    year: 2023,
    category: "manuscripts",
    venue: "Advanced Engineering Informatics",
    citation:
      'Shimin Liu, Pai Zheng, Liqiao Xia, and Jinsong Bao. "A dynamic updating method of digital twin knowledge model based on fused memorizing-forgetting model." <i>Advanced Engineering Informatics</i>, 57: 102115, 2023.',
    recordurl: "https://dblp.org/rec/journals/aei/LiuZXB23",
  },
  {
    title: "A cyber-physical robotic mobile fulfillment system in smart manufacturing: The simulation aspect",
    year: 2023,
    category: "manuscripts",
    venue: "Robotics and Computer-Integrated Manufacturing",
    citation:
      'Kin Lok Keung, Carman K. M. Lee, Liqiao Xia, Chao Liu, Bufan Liu, and P. Ji. "A cyber-physical robotic mobile fulfillment system in smart manufacturing: The simulation aspect." <i>Robotics and Computer-Integrated Manufacturing</i>, 83: 102578, 2023.',
    recordurl: "https://dblp.org/rec/journals/rcim/KeungLXLLJ23",
  },
  {
    title: "Maintenance planning recommendation of complex industrial equipment based on knowledge graph and graph neural network",
    year: 2023,
    category: "manuscripts",
    venue: "Reliability Engineering & System Safety",
    citation:
      'Liqiao Xia, Yongshi Liang, Jiewu Leng, and Pai Zheng. "Maintenance planning recommendation of complex industrial equipment based on knowledge graph and graph neural network." <i>Reliability Engineering & System Safety</i>, 232: 109068, 2023.',
    recordurl: "https://dblp.org/rec/journals/ress/XiaLLZ23",
    note: "ESI Highly Cited Paper",
  },
  {
    title: "Residual-Hypergraph Convolution Network: A Model-Based and Data-Driven Integrated Approach for Fault Diagnosis in Complex Equipment",
    year: 2023,
    category: "manuscripts",
    venue: "IEEE Transactions on Instrumentation and Measurement",
    citation:
      'Liqiao Xia, Yongshi Liang, Pai Zheng, and Xiao Huang. "Residual-Hypergraph Convolution Network: A Model-Based and Data-Driven Integrated Approach for Fault Diagnosis in Complex Equipment." <i>IEEE Transactions on Instrumentation and Measurement</i>, 72: 1-11, 2023.',
    recordurl: "https://dblp.org/rec/journals/tim/XiaLZH23",
  },
  {
    title: "Towards Mutual-Cognitive Human-Robot Collaboration: A Zero-Shot Visual Reasoning Method",
    year: 2023,
    category: "conferences",
    venue: "IEEE CASE 2023",
    citation:
      'Shufei Li, Pai Zheng, Liqiao Xia, Xi Vincent Wang, and Lihui Wang. "Towards Mutual-Cognitive Human-Robot Collaboration: A Zero-Shot Visual Reasoning Method." <i>IEEE CASE 2023</i>, pp. 1-6, 2023.',
    recordurl: "https://dblp.org/rec/conf/case/LiZXWW23",
  },
  {
    title: "A Novel Fault Diagnosis Method Based on Feature Fusion and Model Agnostic Meta-Learning",
    year: 2023,
    category: "conferences",
    venue: "IEEE CASE 2023",
    citation:
      'Pin Lyu, Xueqing Li, Wenbing Yu, Liqiao Xia, and Chao Liu. "A Novel Fault Diagnosis Method Based on Feature Fusion and Model Agnostic Meta-Learning." <i>IEEE CASE 2023</i>, pp. 1-6, 2023.',
    recordurl: "https://dblp.org/rec/conf/case/LyuLYXL23",
  },
  {
    title: "Secure Co-Creation of Industrial Knowledge Graph: Graph Complement Method with Federated Learning and ChatGPT",
    year: 2023,
    category: "conferences",
    venue: "IEEE CASE 2023",
    citation:
      'Liqiao Xia, Pai Zheng, Yongshi Liang, Ge Zheng, and Zhengyang Ling. "Secure Co-Creation of Industrial Knowledge Graph: Graph Complement Method with Federated Learning and ChatGPT." <i>IEEE CASE 2023</i>, pp. 1-6, 2023.',
    recordurl: "https://dblp.org/rec/conf/case/XiaZLZL23",
  },
  {
    title: "Transformer-based hierarchical latent space VAE for interpretable remaining useful life prediction",
    year: 2022,
    category: "manuscripts",
    venue: "Advanced Engineering Informatics",
    citation:
      'Tao Jing, Pai Zheng, Liqiao Xia, and Tianyuan Liu. "Transformer-based hierarchical latent space VAE for interpretable remaining useful life prediction." <i>Advanced Engineering Informatics</i>, 54: 101781, 2022.',
    recordurl: "https://dblp.org/rec/journals/aei/JingZXL22",
  },
  {
    title: "A novel hypergraph convolution network-based approach for predicting the material removal rate in chemical mechanical planarization",
    year: 2022,
    category: "manuscripts",
    venue: "Journal of Intelligent Manufacturing",
    citation:
      'Liqiao Xia, Pai Zheng, Xiao Huang, and Chao Liu. "A novel hypergraph convolution network-based approach for predicting the material removal rate in chemical mechanical planarization." <i>Journal of Intelligent Manufacturing</i>, 33(8): 2295-2306, 2022.',
    recordurl: "https://dblp.org/rec/journals/jim/XiaZHL22",
  },
  {
    title: "Toward cognitive predictive maintenance: A survey of graph-based approaches",
    year: 2022,
    category: "manuscripts",
    venue: "Journal of Manufacturing Systems",
    citation:
      'Liqiao Xia, Pai Zheng, Xinyu Li, Robert X. Gao, and Lihui Wang. "Toward cognitive predictive maintenance: A survey of graph-based approaches." <i>Journal of Manufacturing Systems</i>, 64: 107-120, 2022.',
    paperurl: "https://doi.org/10.1016/j.jmsy.2022.06.002",
  },
  {
    title: "Privacy-preserving gradient boosting tree: Vertical federated learning for collaborative bearing fault diagnosis",
    year: 2022,
    category: "manuscripts",
    venue: "IET Collaborative Intelligent Manufacturing",
    citation:
      'Liqiao Xia, Pai Zheng, Jinjie Li, Wangchujun Tang, and Xiangying Zhang. "Privacy-preserving gradient boosting tree: Vertical federated learning for collaborative bearing fault diagnosis." <i>IET Collaborative Intelligent Manufacturing</i>, 4(3): 208-219, 2022.',
    paperurl: "https://doi.org/10.1049/cim2.12057",
  },
  {
    title: "A Shortest Path Graph Attention Network and Non-traditional Multi-deep Layouts in Robotic Mobile Fulfillment System",
    year: 2022,
    category: "conferences",
    venue: "IEEM 2022",
    citation:
      'Kin Lok Keung, Liqiao Xia, Carman K. M. Lee, and C. Y. Leung. "A Shortest Path Graph Attention Network and Non-traditional Multi-deep Layouts in Robotic Mobile Fulfillment System." <i>IEEM 2022</i>, pp. 655-659, 2022.',
    recordurl: "https://dblp.org/rec/conf/ieem/KeungXLL22",
  },
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function escapeYaml(text) {
  return text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  for (const [index, pub] of publications.entries()) {
    const slug = slugify(pub.title);
    const filePath = path.join(
      publicationsDir,
      pub.filename ?? `${pub.year}-01-01-${slug}.md`,
    );
    const firstAuthor =
      pub.citation.startsWith("Liqiao Xia") || pub.citation.startsWith("L. Xia");
    const tieBreaker = publications.length - index;
    const sortkey = pub.year * 1000 + (firstAuthor ? 500 : 0) + tieBreaker;

    const lines = [
      "---",
      `title: "${escapeYaml(pub.title)}"`,
      "collection: publications",
      `category: ${pub.category}`,
      `permalink: /publication/${pub.year}-${slug}/`,
      `date: ${pub.year}-01-01`,
      `first_author: ${firstAuthor}`,
      `sortkey: ${sortkey}`,
      `venue: "${escapeYaml(pub.venue)}"`,
      "citation: >-",
      `  ${pub.citation}`,
      pub.paperurl ? `paperurl: "${pub.paperurl}"` : null,
      pub.recordurl ? `recordurl: "${pub.recordurl}"` : null,
      pub.note ? `note: "${escapeYaml(pub.note)}"` : null,
      "share: false",
      "comments: false",
      "related: false",
      "---",
      "",
      "Publication details are available via the external links below.",
      "",
    ]
      .filter(Boolean)
      .join("\n");

    await fs.writeFile(filePath, lines, "utf8");
  }

  console.log(`Generated ${publications.length} publication files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
