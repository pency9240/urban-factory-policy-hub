
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>最后更新日期：</strong>2025年1月24日
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 政策概述</h2>
                <p className="text-gray-700 leading-relaxed">
                  城市工场（以下简称"我们"）尊重并保护用户隐私。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
                  当您使用我们的服务时，即表示您同意本隐私政策的条款。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 信息收集</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 我们收集的信息类型</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>个人身份信息：</strong>姓名、电话号码、电子邮件地址、收货地址等</li>
                  <li><strong>账户信息：</strong>用户名、密码（加密存储）、账户偏好设置</li>
                  <li><strong>交易信息：</strong>购买记录、支付信息、订单历史</li>
                  <li><strong>设备信息：</strong>设备型号、操作系统、应用版本、设备标识符</li>
                  <li><strong>使用数据：</strong>应用使用情况、功能使用频率、错误报告</li>
                  <li><strong>位置信息：</strong>基于GPS的精确位置（仅在您明确授权时）</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 信息收集方式</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>您主动提供的信息（注册、下单、客服咨询等）</li>
                  <li>自动收集的技术信息（应用使用、设备信息等）</li>
                  <li>第三方合作伙伴提供的信息（在您授权的情况下）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 信息使用</h2>
                <p className="text-gray-700 mb-4">我们使用收集的信息用于以下目的：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>提供和改进我们的服务</li>
                  <li>处理订单和支付</li>
                  <li>客户服务和技术支持</li>
                  <li>个性化推荐和营销</li>
                  <li>安全监控和欺诈防范</li>
                  <li>法律合规和纠纷解决</li>
                  <li>业务分析和产品优化</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 信息共享</h2>
                <p className="text-gray-700 mb-4">我们承诺不会出售您的个人信息。我们仅在以下情况下共享您的信息：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>服务提供商：</strong>物流配送、支付处理、云服务等合作伙伴</li>
                  <li><strong>法律要求：</strong>响应法律程序、政府请求或保护我们的权利</li>
                  <li><strong>业务转让：</strong>在公司合并、收购或资产转让情况下</li>
                  <li><strong>用户同意：</strong>在获得您明确同意的其他情况</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 数据安全</h2>
                <p className="text-gray-700 mb-4">我们采用行业标准的安全措施保护您的信息：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>数据传输加密（TLS/SSL）</li>
                  <li>数据存储加密</li>
                  <li>访问控制和身份验证</li>
                  <li>定期安全审计和漏洞扫描</li>
                  <li>员工安全培训和保密协议</li>
                  <li>事件响应和数据泄露通知机制</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 数据保留</h2>
                <p className="text-gray-700">
                  我们仅在必要期间保留您的个人信息。保留期限基于业务需要、法律要求和用户关系维护的需要。
                  一般情况下，账户信息在账户关闭后保留3年，交易记录保留7年。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 您的权利</h2>
                <p className="text-gray-700 mb-4">根据适用的隐私法律，您享有以下权利：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>访问权：查看我们持有的您的个人信息</li>
                  <li>更正权：更新或修正不准确的信息</li>
                  <li>删除权：要求删除您的个人信息</li>
                  <li>限制处理权：限制我们处理您的信息</li>
                  <li>数据可携权：获取您的数据副本</li>
                  <li>反对权：反对基于合法利益的数据处理</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 儿童隐私</h2>
                <p className="text-gray-700">
                  我们的服务不面向18岁以下的儿童。我们不会故意收集儿童的个人信息。
                  如果我们发现收集了儿童的个人信息，将立即删除相关信息。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 国际数据传输</h2>
                <p className="text-gray-700">
                  您的信息可能会传输到中国境外的服务器进行处理和存储。我们确保所有数据传输都符合适用的数据保护法律，
                  并采取适当的安全措施保护您的信息。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookie和追踪技术</h2>
                <p className="text-gray-700 mb-4">我们使用以下技术改善用户体验：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cookie：</strong>存储用户偏好和登录状态</li>
                  <li><strong>分析工具：</strong>了解应用使用情况和性能</li>
                  <li><strong>广告标识符：</strong>提供个性化广告（可选择退出）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. 第三方服务</h2>
                <p className="text-gray-700">
                  我们的应用可能包含第三方服务的链接或集成。这些第三方有自己的隐私政策，
                  我们建议您仔细阅读这些政策。我们不对第三方的隐私做法承担责任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. 政策更新</h2>
                <p className="text-gray-700">
                  我们可能会定期更新本隐私政策。重大变更时，我们会通过应用内通知、电子邮件或网站公告的方式告知您。
                  继续使用我们的服务即表示您接受更新后的政策。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. 联系我们</h2>
                <p className="text-gray-700 mb-4">如果您对本隐私政策有任何问题或需要行使您的权利，请通过以下方式联系我们：</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>邮箱：</strong>panyansen@ilovetata.com</li>
                    <li><strong>电话：</strong>86-18666541235</li>
                    <li><strong>地址：</strong>广东省佛山市南海区牛梯路19号</li>
                    <li><strong>邮编：</strong>528231</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. 适用法律</h2>
                <p className="text-gray-700">
                  本隐私政策受中华人民共和国法律管辖。任何争议应通过友好协商解决，
                  协商不成的，提交北京市朝阳区人民法院管辖。
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
