<template>
  <div class="px-6 max-w-6xl mx-auto">
    <div
      class="mx-auto mt-6 font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      <p>
        信息科学与工程学院研究生推免——科研创新能力、个人获奖、社会服务和学生工作计分办法
      </p>
    </div>
    <div class="mx-auto leading-7 text-gray-700 text-left mt-6">
      <p>
        <strong>一、总体原则</strong
        >：遵照新大教字〔2022〕79号《新疆大学推荐优秀应届本科毕业生免试攻读研究生推荐选拔工作实施细则（修订）》。
      </p>
      <br />

      <p>
        <strong>二、认定范围</strong
        >：包括以团队或者个人所获得的学科竞赛奖励、发表的论文、申请的专利、申报并获批的项目，所申报的材料务必与计算机科学与技术、通信工程、电子信息工程、网络空间安全、信息安全5个专业密切相关。
      </p>
      <br />

      <p>
        <strong>三、分值计算说明</strong
        >：按照第四条赋分细则累加后进行归一化，归一化后科研创新最高分15分，个人奖励最高分5分。
      </p>
      <br />

      <p><strong>四、赋分细则</strong>：</p>
      <br />

      <p>
        （1）以鼓励学生参加高水平的学科竞赛为导向，学科竞赛获奖依据学科竞赛的水平进行分类分级赋分，同一年的同一竞赛按最高获奖认定1次，不能重复认定，赋分详见附表1。
      </p>

      <p>（2）个人奖励赋分细则见附件2。</p>

      <p>
        （3）论文、专利、科研项目、大学生创新创业项目等学术活动赋分细则见附件3。
      </p>
      <br />
      <p><strong>五、学科竞赛分类分级赋分表</strong></p>
      <br />

      1. 学科竞赛赋分按照表1进行。<br />
      2. Ⅲ类竞赛中的每一类竞赛获奖只计算1个最高奖项，5分封顶。<br />
      3. Ⅳ类竞赛中的每一类竞赛获奖只计算1个最高奖项，3分封顶。<br />

      <div class="px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      学科竞赛名称
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      类别
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国一
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国二
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国三
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省一
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省二
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省三
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="contest in contests" :key="contest.email">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    >
                      {{ contest.title }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span :class="getStripStatus(contest.type)">{{
                        contest.type
                      }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n1 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n2 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n3 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p1 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p2 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p3 }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <p><strong>六、个人获奖赋分细则</strong></p>
      <br />

      4.
      个人奖励务必是国家、政府授予的个人荣誉，企业授予的荣誉不在认定范围之类，奖助学金颁发的证书不予以认定。<br />
      5.
      全国大学生数学建模大赛个人获奖，认定前三排名，按照1:0.5:0.3的比例系数获得相应等级的分数。<br />
      6. 个人奖励只认定范围见表2“获奖类别”中的4类。<br />
      7. 每一类个人获奖只认定1项最高获奖。<br />
      8. 所有类别的个人奖励累计分数5分封顶。<br />
      9. 具体赋分办法参见下表2。<br />

      <div class="px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      获奖类别
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国一
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国二
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      国三
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省一
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省二
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      省三
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      校一
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      校二
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      校三
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="contest in contests2" :key="contest.title">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    >
                      {{ contest.title }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n1 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n2 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.n3 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p1 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p2 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.p3 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.s1 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.s2 }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ contest.s3 }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p><strong>七、学术活动赋分细则</strong></p>
      <br />
      <p>学术论文</p>
      <br />
      1.
      发表的论文须以新疆大学为第一单位，论文发表内容需要与计算机科学与技术、通信工程、电子信息工程、网络空间安全、信息安全5个专业密切相关，再按照2-4项赋分，学术论文赋分5分封顶。<br />
      2. 在三区及以上期刊以第一作者发表论文，加5分/篇。<br />
      3. 在四区期刊以第一作者发表论文，加3分/篇。<br />
      4. 在五区期刊以第一作者发表论文，加1分/篇（仅限申报1篇）。<br />
      <strong
        >注：学生与本校教师共同发表论文，教师为第一作者，学生为第二作者的，学生可按照第一作者认定。</strong
      ><br />
      <br />
      <p>专利</p>
      <br />
      1.
      所取得的专利专利权人属于新疆大学，然后再按照第2-6项赋分，专利赋分4分封顶。<br />
      2. 获国家发明专利，持有专利证书的，排名前三加分，分别是4分，3分，2分。<br />
      3. 以第一专利发明人获国家级实用新型专利，持有专利证书的，加1分。<br />
      4. 以第一专利发明人获国家级外观设计专利，持有专利证书的，加1分。<br />
      5. 以第一专利发明人获软件著作权，持有专利证书的，加1分（仅限申报1个）。<br />
      6. 科技成果转让或被采纳（以证书、协议、证明认定），加3分。<br />
      <br />
      <p>项目</p>
      <br />
      1. 科研项目以新疆大学科研系统的数据为准。<br />
      2.
      大学生创新创业项目以新疆大学教务处、学工部公布的名单为准，创新创业项目务必结题，并且项目在执行过程中在中期检查过程中没有被警告处理。<br />
      3.
      满足以上条件1和2，方可按照4-7赋分，同一类项目只认定1项，总赋分3分封顶。<br />
      4. 主持校级以上科学研究项目，加3分。<br />
      5. 主持国家级大学生创新创业训练计划项目，加3分/项。<br />
      6. 主持自治区大学生创新创业训练计划项目，加2分/项。<br />
      7. 主持校级大学生创新创业训练计划项目，加1分/项。<br />

      <br />
      <p><strong>八、思想品德、社会服务和学生工作评分细则</strong></p>
      <br />

      1.
      <strong>参军入伍服兵役</strong
      >，加3分。在校期间参军入伍服兵役。申请推免学生向学院学工办提交“义务兵退出现役证”，加3分。<br />
      2.
      参加国际服务、到国际组织实习的，加3分。参加国际服务、到国际组织实习。申请推免学生向学院学工办提交相关服务和实习组织出具的证明材料或服务和实习期间荣获的荣誉证书/结业证书等（附证明人、联系电话、加盖公章有效），加3分。<br />
      3.
      参加志愿服务，有相关证明材料，加1分。参加志愿服务。申请推免学生向学院学工办提交在校期间参加校内、校外志愿服务活动相关证明材料，如：书面证明、证书、表扬信、鉴定表等（附证明人、联系电话、加盖公章有效）。按照参加自治区或全国的各类赛事、展会、会议等大型活动的志愿服务4分；参加校外各类社会组织的志愿公益活动（如社区、养老院、儿童村等）3分；参加学校组织的各类志愿公益服务活动2分；参加学院组织的各类志愿公益服务活动1分。各类别最多累加3次，全部类别累加后进行归一化，归一化后参加志愿服务最高分1分。<br />
      4.
      担任校级、院级学生干部一年以上的，加1分。担任校级、院级学生干部。①担任校级和院级学生会、社团、协会各部门负责人（满一年），由相应组织主管单位出具书面证明材料（附证明人、联系电话、加盖公章有效）或聘书，加0.7分。②担任校级和院级学生会主席团成员（满一年），由相应组织主管单位出具书面证明材料（附证明人、联系电话、加盖公章有效）或聘书，加1分。（有多项加分情况时，1分封顶）<br />
      5.
      担任班级学生干部一年以上的，加1分。担任班级学生干部。担任班级/团支部负责人及其他委员，由班主任出具书面证明材料（写明担任职务、时间段、工作职责及工作成效，署名签字有效），任职时长1年至2年（不含）的加0.7分，2年（含）及以上的加1分。（有多项加分情况时，1分封顶）<br />

      <div
        class="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8"
      >
        <div
          class="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5"
        >
          <p class="text-sm leading-6 text-white">
            <a href="#">
              <strong class="font-semibold">提示</strong
              ><svg
                viewBox="0 0 2 2"
                class="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" /></svg
              >必须指出的是，虽然思想品德在保研中也有做要求，不过由于其往往是容易被忽视、且基本不会得到执行的要求。故本站与标准文件略有不同，特意缺失了该部分。<span
                aria-hidden="true"
              ></span>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="mx-auto leading-7 text-gray-700 text-left mt-6 mb-21">
      <p><strong>X、个人心得</strong></p>
      <br />
      <p>
        其实希望做成什么事，往往都需要努力与运气并存。当然，如果你不太幸运的话，还会需要“天赋”。
      </p>
      <br />
      <p>保研也是。</p>
      <br />

      <p>
        保研绝非仅仅依靠学习上的努力。弥补信息差的、社交的能力几乎与努力在保研的路上相持，具体包括但不限于如何优雅地与自己讨厌的人相处并与其交换利益、如何舔老师、如何维护信息差并使得自己成为信息差的既得利益者云云。但大多数人完全未能践行这些，即使他们已经明白、或者是已经保研。
      </p>
      <br />

      <p>
        倘是认为保研是一次综合性的考察，倒也不为过。它全面的考察了一名学生做题家的能力、弄虚作假的水平、打压别人的手法、营造“阶级”壁垒的手段，它也锻炼了一个孩子的社交能力、合作能力、抗压能力，完全可以训练出有素的资本家。社会主义社会尚未到达前，成为资本家，是绝大部分希望实现财务自由的人的殊途同归的终点。因此不得不说，参与保研的竞争，是十分具有锻炼意义的，它也具有资本竞争时大起大落的特点，一不小心就会彻底出局，沦为“平庸”。
      </p>
      <br />

      <p>
        我往往不知道自己为什么选择参与保研竞争。心里的潜意识告诉我，是为了证明自己的无人在意的自尊，但我又觉得不应该这样。大部分人参与保研竞争的原因，和我应该类似，很简单：高考没考好（或者还行），觉得自己不应该在这所院校，然后绩点又刚好还不错，于是便参与了这场角逐。
      </p>
      <br />

      <p>
        这场竞争是残酷的，最令我痛苦的是，它使我不断地品尝屈身求人的滋味。我求过两位老师，第一位是一名实验课的老师，我先试着发送了五次加微信的请求，她未通过，于是我只好当面找她，恳求她让我重做实验，她没有看我一眼，冷漠地拒绝了我；第二位是一名理论课老师，我先试着发送了五次加微信的请求，他未通过，于是我只好当面找他，我恳请他，让我看我的平时分，并希望能将我的分数改低一些（为什么要改低，读者可以自己想一想），他想了一些理由拒绝了我的第一个请求，并让办公室的另一位老师一起嘲笑我的第二个请求是如此无知，当然也拒绝了我的第二个请求。
      </p>
      <br />

      <p>
        经过这两次的碰壁，我才终于体会到在这场角逐中的可怖之处——
        <strong
          >它要求你用利益蒙蔽双眼，它要求你放弃自我，它要求你卑躬屈膝，彻底向它制定的规则臣服。</strong
        >
      </p>
      <br />

      <p>
        然而，令人矛盾的是，若你想突破这些令人痛苦的限制，你首先要臣服。无人在意你的想法，没人会聆听蚂蚁的声音。
      </p>
      <br />
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
const contests = [
  {
    title: "全国大学生机器人大赛ROBOCON",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "ACM国际大学生程序设计大赛",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "CCF大学生计算机系统与程序设计竞赛",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "全国大学生智能汽车大赛",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "全国大学生电子设计竞赛",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "全国大学生信息安全竞赛—创新实践能力赛",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "华为中国区大学生ICT大赛（实践赛）",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title: "“互联网+”大学生创新创业大赛  ",
    type: "一类",
    n1: "5.0",
    n2: "4.0",
    n3: "3.0",
    p1: "2.5",
    p2: "2.0",
    p3: "1.5",
  },
  {
    title:
      "中国大学生计算机设计大赛——人工智能、大数据、物联网方向、软件开发、移动游戏开发",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "信息安全铁人三项赛",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "大学生网络安全尖锋训练营",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "全国大学生信息安全竞赛——作品赛",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "华为大学生ICT大赛（创新赛）",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "网鼎杯网络安全大赛",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "“挑战杯”全国大学生系列科技学术竞赛  ",
    type: "二类",
    n1: "3.0",
    n2: "2.5",
    n3: "2.0",
    p1: "2.0",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "中国软件杯大学生软件设计大赛  ",
    type: "三类",
    n1: "2.5",
    n2: "2.0",
    n3: "1.5",
    p1: "1.5",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "中国工业互联网安全大赛",
    type: "三类",
    n1: "2.5",
    n2: "2.0",
    n3: "1.5",
    p1: "1.5",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "全国大学生智能技术应用大赛",
    type: "三类",
    n1: "2.5",
    n2: "2.0",
    n3: "1.5",
    p1: "1.5",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "中国高校计算机大赛（天梯赛、网络技术挑战赛）",
    type: "三类",
    n1: "2.5",
    n2: "2.0",
    n3: "1.5",
    p1: "1.5",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "全国大学大唐移动通信设计大赛",
    type: "三类",
    n1: "2.5",
    n2: "2.0",
    n3: "1.5",
    p1: "1.5",
    p2: "1.0",
    p3: "1.0",
  },
  {
    title: "iCAN国际大学生创新创业大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "中国大学生计算机设计大赛——除第9条外的其它方向",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "护网杯网络安全防护赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "新疆高校大学生信息安全大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "天山固网杯网络安全大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "中国机器人与人工智能大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "蓝桥杯全国软件和信息技术专业人才大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "自治区高校区块链大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*新华三杯全国大学生数字技术大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*全国大学生算法设计与编程挑战赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*全国高校计算机能力挑战赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*全国大学生信息安全与对抗技术竞赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*全国大学生网络安全精英赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
  {
    title: "*全国仿真创新应用大赛",
    type: "四类",
    n1: "2.0",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.5",
  },
];
const contests2 = [
  {
    title: "全国大学生数学建模大赛个人获奖",
    n1: "5",
    n2: "4.0",
    n3: "3.0",
    p1: "3.0",
    p2: "2.5",
    p3: "2.0",
    s1: "2.0",
    s2: "1.5",
    s3: "1.0",
  },
  {
    title: "体育类个人获奖",
    n1: "4",
    n2: "3.0",
    n3: "2.5",
    p1: "2.5",
    p2: "2.0",
    p3: "2.0",
    s1: "1.5",
    s2: "1.0",
    s3: "0.5",
  },
  {
    title: "艺术类个人获奖",
    n1: "3",
    n2: "2.5",
    n3: "2.5",
    p1: "2.0",
    p2: "2.0",
    p3: "1.5",
    s1: "1.0",
    s2: "0.5",
    s3: "0.0",
  },
  {
    title: "英语类个人获奖",
    n1: "2",
    n2: "1.5",
    n3: "1.0",
    p1: "1.0",
    p2: "0.5",
    p3: "0.0",
    s1: "0.0",
    s2: "0.0",
    s3: "0.0",
  },
];

function getStripStatus(str) {
  if (str == "一类")
    return "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-green-600/20";
  if (str == "二类")
    return "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-green-600/20";
  if (str == "三类")
    return "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-green-600/20";
  if (str == "四类")
    return "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-green-600/20";
}
</script>

<style>
</style>