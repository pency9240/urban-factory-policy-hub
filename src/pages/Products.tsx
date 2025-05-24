
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, Star, Truck, Shield } from 'lucide-react';

const Products = () => {
  console.log('Products page is rendering...');
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              我们的
              <span className="text-emerald-600">产品服务</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              城市工场为您提供全方位的供应链解决方案，从商品采购到最终配送，我们确保每个环节都达到最高标准。
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">生鲜食品</h3>
              <p className="text-gray-600">新鲜蔬菜、水果、肉类等优质食材，直接从产地到您的餐桌。</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Star className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">日用百货</h3>
              <p className="text-gray-600">家居用品、个人护理、清洁用品等日常生活必需品。</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">快速配送</h3>
              <p className="text-gray-600">高效的物流配送网络，确保商品快速安全地送达。</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
