
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">城市工场</h3>
            <p className="text-gray-300 mb-4">
              中国领先的零售供应链公司，致力于为消费者提供优质、新鲜的生活用品和食品。
              我们的使命是连接优质供应商与消费者，打造更美好的品质生活。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">关于我们</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-emerald-400 transition-colors">产品服务</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">联系我们</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors">隐私政策</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系信息</h4>
            <ul className="space-y-2 text-gray-300">
              <li>电话：86-18666541235</li>
              <li>邮箱：panyansen@ilovetata.com</li>
              <li>地址：广东省佛山市南海区牛梯路19号</li>
              <li>邮编：528231</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 城市工场. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
