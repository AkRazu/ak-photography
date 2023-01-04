import React from 'react';
import useProducts from '../../useProducts/useProducts';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useProducts([]);
    console.log(services);
    return (
        <div className=" bg-[#F4F0ED]">
            <div className="container py-10">
                <p style={{ letterSpacing: "3px" }} className='font-mono text-[#B5B5B5]'>WHAT I DO</p>
                <p className='font-mono text-4xl text-[#4D504A]'>My Services</p>

                <div className="grid md:grid-cols-4 gap-4">
                    {
                      services.map(product=> <Service
                        key={product.id}
                        product={product}
                      ></Service>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;