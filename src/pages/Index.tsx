
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart, Truck, Shield, Users } from 'lucide-react';

const Index = () => {
  console.log('Index page is rendering...');
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              品质生活
              <span className="text-emerald-600">供应链专家</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              城市工场致力于为中国消费者提供优质、新鲜的生活用品和食品。
              我们连接全球优质供应商，打造可信赖的零售供应链生态系统。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                了解更多
              </button>
              <button className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择城市工场
            </h2>
            <p className="text-xl text-gray-600">
              我们通过创新的供应链管理，为您提供卓越的购物体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">优质商品</h3>
              <p className="text-gray-600">精选全球优质供应商，确保每一件商品都符合最高品质标准</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">快速配送</h3>
              <p className="text-gray-600">高效的物流网络，确保商品快速、安全地送达您的手中</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">品质保证</h3>
              <p className="text-gray-600">严格的质量控制体系，为每一位消费者提供安心保障</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">专业服务</h3>
              <p className="text-gray-600">专业的客户服务团队，为您提供贴心的购物咨询和售后服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            开启您的品质生活之旅
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            立即体验城市工场带来的优质购物体验
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            立即开始
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
