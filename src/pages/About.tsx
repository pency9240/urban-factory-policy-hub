
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                关于城市工场
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                我们是中国领先的零售供应链公司，致力于连接优质供应商与消费者，
                打造更美好的品质生活体验。
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-emerald-600" size={32} />
                </div>
                <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
                <p className="text-gray-600 leading-relaxed">
                  通过创新的供应链管理和技术驱动，为中国消费者提供优质、新鲜、安全的生活用品和食品，
                  让每个家庭都能享受到品质生活的美好。
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-emerald-600" size={32} />
                </div>
                <h2 className="text-2xl font-semibold mb-4">我们的愿景</h2>
                <p className="text-gray-600 leading-relaxed">
                  成为中国最受信赖的零售供应链平台，引领行业发展，
                  构建一个透明、高效、可持续的零售生态系统。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">我们的故事</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">创立初心（2020年）</h3>
                    <p className="text-gray-600">
                      城市工场成立于2020年，创始团队来自零售、供应链和科技领域的资深专家。
                      我们看到了中国零售市场对高品质商品的巨大需求，以及传统供应链的效率提升空间。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">快速发展（2021-2022年）</h3>
                    <p className="text-gray-600">
                      通过建立全球供应商网络和先进的物流体系，我们快速扩展到全国主要城市，
                      建立了覆盖生鲜食品、日用百货、健康产品等多个品类的供应链网络。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">技术创新（2023年）</h3>
                    <p className="text-gray-600">
                      我们投入大量资源进行技术研发，建立了智能化的供应链管理系统，
                      通过数据分析和人工智能优化库存管理、需求预测和配送路线。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">持续增长（2024年至今）</h3>
                    <p className="text-gray-600">
                      如今，城市工场已服务超过百万用户，与数千家优质供应商建立合作关系，
                      我们将继续致力于提供更好的产品和服务，成为消费者最信赖的品质生活伙伴。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">品质至上</h3>
                <p className="text-gray-600">
                  我们始终将产品品质放在首位，严格筛选供应商，确保每一件商品都符合最高标准。
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">客户第一</h3>
                <p className="text-gray-600">
                  以客户需求为导向，不断优化服务体验，为客户创造真正的价值。
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">持续创新</h3>
                <p className="text-gray-600">
                  拥抱变化，持续创新，用科技的力量推动零售行业的发展和进步。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
